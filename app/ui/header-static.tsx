import TeleStoreLogo from '@/app/ui/telestore-logo';
import Link from 'next/link';

export default function HeaderStatic() {
  return (
    <div className="flex h-20 shrink-0 items-center rounded-lg bg-blue-500 p-4 justify-between">
      <TeleStoreLogo />
      <div className="flex gap-5">
        <Link href="/" className="text-white hover:text-blue-300">Home</Link>
        <Link href="/pricing" className="text-white hover:text-blue-300">Pricing</Link>
        <Link href="/contact" className="text-white hover:text-blue-300">Contact</Link>
        <Link href="/login" className="bg-white px-6 py-3 text-blue-500 rounded-lg hover:bg-blue-400">
          Sign In
        </Link>
      </div>
    </div>
  );
}