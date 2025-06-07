import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import { EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { CameraIcon } from '@heroicons/react/24/solid';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-white p-6">
      <Header />
      <section className="flex flex-1 items-center justify-center pt-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-2">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            We’d love to hear from you. Reach out anytime.
          </p>
          <div className="space-y-6 w-full">
            <div className="flex items-center justify-center gap-3">
              <EnvelopeIcon className="w-6 h-6 text-blue-500" />
              <a href="mailto:ekqiu@duck.com" className="text-blue-600 underline">
                ekqiu@duck.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <PaperAirplaneIcon className="w-6 h-6 text-blue-500" />
              <a href="https://t.me/yourtelegram" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CameraIcon className="w-6 h-6 text-pink-500" />
              <a href="https://instagram.com/yourinstagram" className="text-pink-600 underline" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
