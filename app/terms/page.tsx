import TeleStoreLogo from '@/app/ui/telestore-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-white text-gray-900">
      <Header />

      <div className="max-w-3xl mx-auto w-full pt-8">
        <h1 className={`${lusitana.className} mb-6 text-4xl font-extrabold text-center`}>
          Terms and Conditions
        </h1>
        <p className="mb-8 text-lg text-gray-700 text-center">
          Welcome to TeleStore. By accessing or using our platform, you agree to the following terms and conditions. Please read them carefully.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-3">1. Service Overview</h2>
          <p className="text-gray-700">
            TeleStore provides a platform for users in Singapore to list products and manage their business online. The platform is owned and operated by an individual.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-3">2. User Responsibilities</h2>
          <ul className="list-disc pl-8 space-y-2 text-gray-700">
            <li>Provide accurate and complete information when registering and listing products.</li>
            <li>You are responsible for all activities under your account.</li>
            <li>All products listed must comply with Singaporean laws and regulations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-3">3. Prohibited Activities</h2>
          <ul className="list-disc pl-8 space-y-2 text-gray-700">
            <li>No illegal, fraudulent, or misleading listings are allowed.</li>
            <li>No spam, abusive, or harmful behavior is permitted on the platform.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-3">4. Refunds and Warranties</h2>
          <p className="text-gray-700">
            TeleStore acts only as a platform provider and does not guarantee or warrant any products listed by users. Refunds, returns, and warranties are the responsibility of individual sellers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-3">5. Privacy</h2>
          <p className="text-gray-700">
            Your personal information will be handled in accordance with Singapore's Personal Data Protection Act (PDPA). We do not share your information with third parties except as required by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-3">6. Limitation of Liability</h2>
          <p className="text-gray-700">
            TeleStore is not liable for any damages or losses resulting from your use of the platform or from transactions between users.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-3">7. Changes to Terms</h2>
          <p className="text-gray-700">
            We may update these terms from time to time. Continued use of the platform constitutes acceptance of the revised terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-3">8. Contact</h2>
          <p className="text-gray-700">
            For any questions or concerns, please contact us at:{' '}
            <a
              href="mailto:your-email@example.com"
              className="text-blue-600 underline hover:text-blue-800"
            >
              your-email@example.com
            </a>
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}
