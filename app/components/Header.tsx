'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Investments', href: '#investments' },
    { label: 'Manufacturing', href: '#manufacturing' },
    { label: 'AI Assistant', href: '#ai' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 glass-effect border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
            <span className="text-navy-950 font-bold text-lg">N</span>
          </div>
          <span className="font-bold text-xl hidden sm:block">Nusakti</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-gold-500 transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button className="btn-gold hidden md:block">Get Started</button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className={`w-6 h-0.5 bg-gold-500 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gold-500 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gold-500 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur border-t border-gold-500/20">
          <nav className="flex flex-col py-4 px-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 text-gray-300 hover:text-gold-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="btn-gold w-full mt-4">Get Started</button>
          </nav>
        </div>
      )}
    </header>
  );
}
