import { BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export default function TeleStoreLogo() {
  return (
    <Link href="/">
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <BuildingStorefrontIcon className="h-11 w-11" />
      <p className="text-[32px] pl-1">TeleStore</p>
    </div>
    </Link>
  );
}
