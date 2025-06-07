'use client'

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
// Import Heroicons
import { RocketLaunchIcon, ShieldCheckIcon, PaperAirplaneIcon, AcademicCapIcon, SparklesIcon } from '@heroicons/react/24/outline';
import TestimonialsCarousel from '@/app/ui/testimonialscarousel';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Header />
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="group relative bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg px-6 py-10 md:w-2/5 md:px-20 flex flex-col justify-center gap-6 transition-transform">

          <p className="mt-8 text-xl text-gray-800 md:text-2xl md:leading-normal text-center">
        <strong>Welcome to the future of e-commerce.</strong> Manage your business with ease, and deploy your store onto Telegram at no cost.
          </p>
          <Link
        href="/signup"
        className="flex items-center gap-5 self-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
        <span>Get Started</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image src="/hero-desktop.png" width={1000} height={760} className="hidden md:block" alt="Screenshots of the dashboard project showing desktop version" />
          <Image src="/hero-mobile.png" width={500} height={620} className="block md:hidden" alt="Screenshots of the dashboard project showing mobile version" />
        </div>
      </div>
      {/* Animated Features Section */}
      <section className="relative mt-20 w-full flex flex-col items-center">
        {/* Decorative SVG Waves */}

        <div className="relative flex flex-col items-center w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 z-10">What Makes Us Different?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {/* Feature 1: Reliable */}
        <div className="group relative bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg p-3">
            <RocketLaunchIcon className="h-10 w-10 text-blue-500 animate-float" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-gray-800">Reliable Platform</h3>
          <p className="mt-3 text-gray-600 text-center">Count on robust uptime and fast performance, ensuring your store is always available for your customers.</p>
        </div>
        {/* Feature 2: Secure */}
        <div className="group relative bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg p-3">
            <ShieldCheckIcon className="h-10 w-10 text-green-500 animate-pulse" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-gray-800">Secure by Design</h3>
          <p className="mt-3 text-gray-600 text-center">Your data and transactions are protected with industry-leading security and privacy standards.</p>
        </div>
        {/* Feature 3: Telegram Integration */}
        <div className="group relative bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg p-3">
            <PaperAirplaneIcon className="h-10 w-10 text-blue-400 animate-bounce" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-gray-800">Telegram Integration</h3>
          <p className="mt-3 text-gray-600 text-center">Seamlessly launch and manage your store directly on Telegram, reaching millions of users instantly.</p>
        </div>
          </div>
        </div>
      </section>
      {/* Animated Testimonials Carousel */}
      <section className="mt-24 w-full flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">What Our Users Say</h2>
        <TestimonialsCarousel />
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float 3s ease-in-out infinite reverse;
        }
        .animate-slidein {
          animation: slidein 1s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-12px);}
        }
        @keyframes slidein {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>

        {/* Call to Action Section */}
        <section className="relative mt-24 mb-24 py-16 flex flex-col items-center w-full">
          {/* Decorative Gradient Background */}
          <div className="absolute inset-0 -z-10 flex justify-center items-center">
            <div className="w-[600px] h-[220px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 opacity-30 blur-3xl rounded-3xl"></div>
          </div>
          <div className="relative flex flex-col items-center bg-white/90 rounded-2xl shadow-2xl px-10 py-12 max-w-2xl w-full border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
          {/* Animated Rocket Icon */}
          <span className="inline-block animate-bounce">
            <RocketLaunchIcon className="h-10 w-10 text-blue-500 drop-shadow-lg" />
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            Ready to grow your business?
          </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-700 text-center mb-8 max-w-xl">
          Join hundreds of successful merchants. Launch your store on Telegram and unlock a new world of customers—<span className="font-semibold text-blue-600">for free</span>.
            </p>
            <Link
          href="/signup"
          className="inline-block rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 px-10 py-4 text-lg font-bold text-white shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-500 transition-all duration-200"
            >
          🚀 Create Your Store Now
            </Link>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
          <ShieldCheckIcon className="h-5 w-5 text-green-500" />
          <span>No credit card required</span>
            </div>
          </div>
        </section>

      <Footer />
    </main>
  );
}
