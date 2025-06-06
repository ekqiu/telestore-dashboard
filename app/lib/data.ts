import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  Revenue,
} from './definitions';
import { formatCurrency } from './utils';
import { getCurrentUser } from '@/auth';

export async function fetchRevenue() {
  try {
    const data = await sql<Revenue>`SELECT * FROM revenue`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  try {
    const user = await getCurrentUser();
    const organisationId = user?.organisation_id;
    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.telegram, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.organisation_id = ${organisationId}
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchCardData() {
  try {
    const user = await getCurrentUser();
    const organisationId = user?.organisation_id;

    const invoiceCountPromise = sql`
      SELECT COUNT(*) FROM invoices
      WHERE organisation_id = ${organisationId}
    `;
    const customerCountPromise = sql`
      SELECT COUNT(DISTINCT customer_id) FROM invoices
      WHERE organisation_id = ${organisationId}
    `;
    const invoiceStatusPromise = sql`
      SELECT
        SUM(CASE WHEN status = 'confirmed' THEN amount ELSE 0 END) AS "confirmed",
        SUM(CASE WHEN status = 'processing' THEN amount ELSE 0 END) AS "processing",
        SUM(CASE WHEN status = 'shipped' THEN amount ELSE 0 END) AS "shipped",
        SUM(CASE WHEN status = 'delivered' THEN amount ELSE 0 END) AS "delivered"
      FROM invoices
      WHERE organisation_id = ${organisationId}
    `;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalInvoices = formatCurrency(
        Number(data[2].rows[0].confirmed ?? 0) +
        Number(data[2].rows[0].processing ?? 0) +
        Number(data[2].rows[0].shipped ?? 0) +
        Number(data[2].rows[0].delivered ?? 0)
      );

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const user = await getCurrentUser();
    const organisationId = user?.organisation_id;

    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.telegram,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        invoices.organisation_id = ${organisationId} AND (
          customers.name ILIKE ${`%${query}%`} OR
          customers.telegram ILIKE ${`%${query}%`} OR
          invoices.amount::text ILIKE ${`%${query}%`} OR
          invoices.date::text ILIKE ${`%${query}%`} OR
          invoices.status ILIKE ${`%${query}%`}
        )
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoicesPages(query: string) {
  try {
    const user = await getCurrentUser();
    const organisationId = user?.organisation_id;

    const count = await sql`
      SELECT COUNT(*)
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        invoices.organisation_id = ${organisationId} AND (
          customers.name ILIKE ${`%${query}%`} OR
          customers.telegram ILIKE ${`%${query}%`} OR
          invoices.amount::text ILIKE ${`%${query}%`} OR
          invoices.date::text ILIKE ${`%${query}%`} OR
          invoices.status ILIKE ${`%${query}%`}
        )
    `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  try {
    const user = await getCurrentUser();
    const organisationId = user?.organisation_id;

    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id}
        AND invoices.organisation_id = ${organisationId};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));

    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

// update below to be filtered by organisation_id

export async function fetchCustomers() {
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    const data = await sql<CustomersTableType>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.telegram,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'processed' THEN invoices.amount ELSE 0 END) AS total_processed,
		  SUM(CASE WHEN invoices.status = 'sent' THEN invoices.amount ELSE 0 END) AS total_sent
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.telegram ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.telegram, customers.image_url
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_processed: formatCurrency(customer.total_processed),
      total_sent: formatCurrency(customer.total_sent),
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}
