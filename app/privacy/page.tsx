import TeleStoreLogo from '@/app/ui/telestore-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-white text-gray-900">
      <Header />

      <div className="max-w-3xl mx-auto w-full pt-8">
        <h1 className={`${lusitana.className} mb-6 text-4xl font-extrabold text-center`}>
          Privacy Policy
        </h1>
        <p className="mb-8 text-lg text-gray-700 text-center">
          Your privacy is important to us. This Privacy Policy explains how TeleStore collects, uses, and protects your personal information when you use our platform.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
          <ul className="list-disc pl-8 space-y-2 text-gray-700">
            <li>
              <strong>Account Information:</strong> When you register, we collect your name, email address, and other necessary details.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect information about how you use our platform, such as pages visited and actions taken.
            </li>
            <li>
              <strong>Communications:</strong> If you contact us, we may keep a record of that correspondence.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
          <ul className="list-disc pl-8 space-y-2 text-gray-700">
            <li>To provide and maintain our services.</li>
            <li>To communicate with you about your account or our services.</li>
            <li>To improve and personalize your experience on the platform.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-3">3. Sharing of Information</h2>
          <p className="text-gray-700">
            We do not sell or rent your personal information to third parties. We may share your information only as required by law or to protect our rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-3">4. Data Security</h2>
          <p className="text-gray-700">
            We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or loss.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-3">5. Cookies</h2>
          <p className="text-gray-700">
            TeleStore may use cookies and similar technologies to enhance your experience and analyze usage of our platform. You can control cookies through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-3">6. Your Rights</h2>
          <p className="text-gray-700">
            You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-3">7. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mt-8 mb-3">8. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about this Privacy Policy, please contact us at:{' '}
            <a
              href="mailto:your-email@example.com"
              className="text-blue-600 underline hover:text-blue-800"
            >
              ekqiu@duck.com
            </a>
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}
