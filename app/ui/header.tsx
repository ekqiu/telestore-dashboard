"use client";

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import TeleStoreLogo from '@/app/ui/telestore-logo';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex h-20 shrink-0 items-center rounded-lg bg-blue-500 p-4 md:h-42 justify-between relative z-50">
      <TeleStoreLogo />
      {/* Burger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex flex-grow justify-end gap-5">
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
      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="fixed top-28 left-6 right-6 border-4 border-blue-400 bg-blue-400 p-4 flex flex-col gap-4 md:hidden rounded-lg shadow-lg z-50">
          <Link href="/" className="text-sm font-medium text-white hover:text-blue-300">
            Home
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-white hover:text-blue-300">
            Pricing
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white hover:text-blue-300">
            Contact
          </Link>
          <Link href="/login" className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-blue-500 transition-colors hover:bg-blue-400">
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
}