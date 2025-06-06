import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
  
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

const iconMap = {
  customers: UserGroupIcon,
  invoices: InboxIcon,
  revenue: BanknotesIcon,
};

import { fetchCardData } from '@/app/lib/data';
import { revenue } from '@/app/lib/placeholder-data';

export default async function CardWrapper() {
  const {numberOfInvoices, numberOfCustomers, totalInvoices} = await fetchCardData();
  return (
    <>
      {/* NOTE: Uncomment this code in Chapter 9 */}

      <Card title="Total Revenue" value={totalInvoices} type="revenue" />
      <Card title="Total Orders" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'revenue';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
