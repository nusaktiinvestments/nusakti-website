'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Leadership', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Investments', href: '#investments' },
        { label: 'Manufacturing', href: '#manufacturing' },
        { label: 'AI Services', href: '#ai' },
        { label: 'Consulting', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Case Studies', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Compliance', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-navy-950 border-t border-gold-500/20">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                  <span className="text-navy-950 font-bold text-xl">N</span>
                </div>
                <span className="font-bold text-lg text-white">Nusakti</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Strategic investments and advanced manufacturing driving sustainable value creation across the global marketplace.
              </p>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Facebook'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-gold-500/50 transition-colors"
                    aria-label={social}
                  >
                    <span className="text-xs font-semibold text-gold-500">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-widest">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-gold-500 transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-sm">
              © {currentYear} Nusakti Ecosystem. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gold-500 transition-colors">Status</a>
              <a href="#" className="hover:text-gold-500 transition-colors">Sitemap</a>
              <a href="#" className="hover:text-gold-500 transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
