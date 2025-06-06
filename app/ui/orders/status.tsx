import {
  CheckIcon,
  ClockIcon,
  ArrowPathIcon,
  TruckIcon,
  ArrowDownTrayIcon,
  XCircleIcon,
  ArrowUturnLeftIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

const STATUS_MAP: Record<
  string,
  {
    label: string;
    icon: React.ElementType;
    color: string;
  }
> = {
  pending: {
    label: 'Pending',
    icon: ClockIcon,
    color: 'bg-yellow-100 text-yellow-800',
  },
  confirmed: {
    label: 'Confirmed',
    icon: CheckIcon,
    color: 'bg-blue-100 text-blue-800',
  },
  processing: {
    label: 'Processing',
    icon: ArrowPathIcon,
    color: 'bg-purple-100 text-purple-800',
  },
  shipped: {
    label: 'Shipped',
    icon: TruckIcon,
    color: 'bg-indigo-100 text-indigo-800',
  },
  delivered: {
    label: 'Delivered',
    icon: ArrowDownTrayIcon,
    color: 'bg-green-100 text-green-800',
  },
  cancelled: {
    label: 'Cancelled',
    icon: XCircleIcon,
    color: 'bg-red-100 text-red-800',
  },
  returned: {
    label: 'Returned',
    icon: ArrowUturnLeftIcon,
    color: 'bg-orange-100 text-orange-800',
  },
  refunded: {
    label: 'Refunded',
    icon: ArrowLeftOnRectangleIcon,
    color: 'bg-gray-100 text-gray-800',
  },
};

export default function InvoiceStatus({ status }: { status: string }) {
  const statusInfo = STATUS_MAP[status];

  if (!statusInfo) {
    return null;
  }

  const Icon = statusInfo.icon;

  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
        statusInfo.color
      )}
    >
      {statusInfo.label}
      <Icon className="ml-1 w-4 h-4" />
    </span>
  );
}
