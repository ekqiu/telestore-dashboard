import TeleStoreLogo from '@/app/ui/telestore-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { Metadata } from 'next'; 

export const metadata: Metadata = {
  title: 'Logout',
};
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-42 justify-end">
        <TeleStoreLogo />
        <div className="flex-grow flex justify-end gap-5">
          <Link href="/" className="flex items-center text-sm font-medium text-white hover:text-blue-300 md:text-base">
            <span>Home</span>
          </Link>
          <Link href="/pricing" className="flex items-center text-sm font-medium text-white hover:text-blue-300 md:text-base">
            <span>Pricing</span>
          </Link>
          <Link href="/contact" className="flex items-center text-sm font-medium text-white hover:text-blue-300 md:text-base">
            <span>Contact</span>
          </Link>
          <Link href="/login" className="flex items-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-blue-500 transition-colors hover:bg-blue-400 md:text-base">
            <span>Sign In</span>
          </Link>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32 flex items-center justify-center md:h-screen">
        <div className="rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={`${lusitana.className} mb-3 text-2xl`}>
            You've successfully logged out.
          </h1>
          <p className="text-gray-500">
            Thank you for using TeleStore. We hope to see you again soon!
          </p>
          <Link
              href="/"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base mt-4"
            >
              <span>Back Home</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>
        </div>
    </main>
  );
}
