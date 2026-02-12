'use client';

import Link from 'next/link';
import { Header, Footer } from '@/components';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center bg-cream">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center animate-fade-in">
          {/* Mountain illustration */}
          <div className="mb-8">
            <svg
              className="w-32 h-32 mx-auto text-mountain/30"
              viewBox="0 0 100 60"
              fill="currentColor"
            >
              <polygon points="50,5 80,55 20,55" opacity="0.6" />
              <polygon points="30,20 55,55 5,55" opacity="0.4" />
              <polygon points="70,15 95,55 45,55" opacity="0.5" />
            </svg>
          </div>

          {/* Error code */}
          <h1 className="text-6xl md:text-8xl font-bold text-coral mb-4">
            404
          </h1>

          {/* Error message */}
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Page Not Found
          </h2>

          <p className="text-mountain text-lg mb-8 max-w-md mx-auto leading-relaxed">
            Looks like you&apos;ve wandered off the trail. The page you&apos;re looking for
            doesn&apos;t exist or may have been moved.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-coral hover:bg-sunrise text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
            >
              Return Home
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-navy text-navy font-semibold px-8 py-3 rounded-lg hover:bg-navy hover:text-cream transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
