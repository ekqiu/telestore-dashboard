import TeleStoreLogo from '@/app/ui/telestore-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next'; 
import Header from '@/app/ui/header';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Pricing',
};
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Header />
      <div className="relative mx-auto w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32 flex items-center justify-center md:h-screen">
        <div className="rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={`${lusitana.className} mb-3 text-2xl`}>
            Page Under Maintenance
          </h1>
          <p className="text-gray-500">
            We're still working on this page. In the meantime, you can write in to us at <a href="mailto:help@evankhee.com" className='text-blue-500'>our support email</a> for help, or send us a DM on <a href="https://www.instagram.com/ekqiutech" className='text-blue-500'>our Instagram</a>. We thank you for your patience. ❤️
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
