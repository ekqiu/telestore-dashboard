import TeleStoreLogo from '@/app/ui/telestore-logo';
import Link from 'next/link';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { CameraIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-between bg-gray-800 text-gray-200 p-6 rounded-lg mt-8">
            <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
                <TeleStoreLogo />
                <span className="mt-2 text-xs text-gray-400">
                    &copy; {new Date().getFullYear()} TeleStore. All rights reserved.
                </span>
            </div>
            <nav className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                <Link href="/" className="text-sm font-medium hover:text-gray-400 transition-colors">
                    Home
                </Link>
                <Link href="/pricing" className="text-sm font-medium hover:text-gray-400 transition-colors">
                    Pricing
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:text-gray-400 transition-colors">
                    Contact
                </Link>
                <Link href="/terms" className="text-sm font-medium hover:text-gray-400 transition-colors">
                    Terms
                </Link>
                <Link href="/privacy" className="text-sm font-medium hover:text-gray-400 transition-colors">
                    Privacy
                </Link>
            </nav>
            <div className="mt-4 md:mt-0 flex flex-col items-center md:items-end gap-2">
                <div className="flex gap-3">
                    <a
                        href="https://t.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Telegram"
                        className="hover:text-gray-400"
                    >
                        <PaperAirplaneIcon className="w-5 h-5" />
                    </a>
                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-gray-400"
                    >
                        <CameraIcon className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:support@telestore.com"
                        aria-label="Email"
                        className="hover:text-gray-400"
                    >
                        <EnvelopeIcon className="w-5 h-5" />
                    </a>
                </div>
                <span className="text-xs text-gray-400">support@telestore.com</span>
            </div>
        </footer>
    );
}
