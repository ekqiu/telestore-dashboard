import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';

export const metadata: Metadata = {
  title: 'Pricing',
};

const plans = [
  {
    name: 'Pay As You Go',
    price: '10%',
    period: 'platform fee',
    description: 'No monthly fee. Only pay a small fee on each sale.',
    features: [
      'Unlimited product listings',
      'Telegram shop integration',
      'Order notifications in Telegram',
      'Basic sales dashboard',
      'Email support',
      'No upfront cost',
    ],
    cta: 'Start Selling',
    highlight: true,
  },
  {
    name: 'Starter',
    price: '$19',
    period: '/mo',
    description: 'Perfect for individuals and small teams starting out.',
    features: [
      'Up to 3 team members',
      'Telegram shop integration',
      'Order management tools',
      'Basic sales analytics',
      'Email support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/mo',
    description: 'For growing teams who need more features.',
    features: [
      'Up to 10 team members',
      'Advanced sales analytics',
      'Telegram shop integration',
      'Priority email support',
      'Custom Telegram bot branding',
    ],
    cta: 'Upgrade Now',
    highlight: false,
  },
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gradient-to-br from-blue-50 to-white">
      <Header />
      <section className="mx-auto w-full max-w-5xl flex-1 flex flex-col items-center justify-center py-16">
        <h1 className={`${lusitana.className} text-4xl font-bold text-gray-900 mb-4 text-center`}>
          Simple, transparent pricing
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">
          Choose the plan that fits your needs. No hidden fees, no surprises.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl shadow-lg border ${
                plan.highlight
                  ? 'border-blue-500 bg-white scale-105 z-10'
                  : 'border-gray-200 bg-gray-50'
              } p-8 transition-transform`}
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{plan.name}</h2>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-500 ml-1 mb-1">{plan.period}</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="mb-8 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.name === 'Enterprise' ? 'mailto:ekqiu@duck.com' : '/signup'}
                className={`flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-colors ${
                  plan.highlight
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-white text-blue-500 border border-blue-500 hover:bg-blue-50'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRightIcon className="w-5" />
              </Link>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-xs mt-8 text-center">
          Need a custom plan? <a href="/contact" className="text-blue-500 underline">Contact us</a>
        </p>
      </section>
      <Footer />
    </main>
  );
}
