import Form from '@/app/ui/orders/edit-form';
import Breadcrumbs from '@/app/ui/orders/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
 
import { notFound } from 'next/navigation';
import { Metadata } from 'next'; 

export const metadata: Metadata = {
  title: 'Edit Order',
};
export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
      ]);
      if (!invoice) {
        notFound();
      }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Orders', href: '/dashboard/orders' },
          {
            label: 'Edit Order',
            href: `/dashboard/orders/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}