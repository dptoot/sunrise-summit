'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', href: '/about' },
  {
    name: 'Instructions',
    href: '/instructions',
    dropdown: [
      { name: 'Check-in', href: '/instructions/check-in' },
      { name: 'House Guide', href: '/instructions/guide' },
      { name: 'House Rules', href: '/instructions/rules' },
    ],
  },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Attractions', href: '/attractions' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-cream transition-shadow duration-300 overflow-visible ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="flex items-center justify-between h-16 overflow-visible">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 hover:opacity-90 transition-opacity relative z-[60]"
          >
            <Image
              src="/images/logo1.png"
              alt="Sunrise Summit - Mountain Cabin Rental"
              width={350}
              height={226}
              className="h-44 w-auto translate-y-8"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative py-4 -my-4"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="text-navy hover:text-mountain transition-colors flex items-center gap-1"
                    aria-expanded={openDropdown === link.name}
                    aria-haspopup="true"
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === link.name ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openDropdown === link.name && (
                    <div className="absolute top-full left-0 pt-1 w-48">
                      <div className="bg-cream border border-sand rounded-lg shadow-lg py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-navy hover:bg-sand transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-navy hover:text-mountain transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-navy hover:text-mountain transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Slide-out Drawer */}
      <div
        className={`fixed inset-0 z-[70] md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-navy/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-cream shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="mb-4">
                  <button
                    className="w-full text-left text-navy font-medium mb-2 flex items-center justify-between"
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.name ? null : link.name)
                    }
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === link.name ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openDropdown === link.name && (
                    <div className="pl-4 border-l-2 border-sand">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block py-2 text-mountain hover:text-navy transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-navy hover:text-mountain transition-colors border-b border-sand"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
