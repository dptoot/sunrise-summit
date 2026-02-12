import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-navy text-cream py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-sand focus:ring-offset-2 focus:ring-offset-navy rounded"
          >
            <Image
              src="/images/sunrise-summit.png"
              alt="Sunrise Summit - Mountain Cabin Rental"
              width={120}
              height={77}
              className="h-12 w-auto"
            />
          </Link>

          {/* Copyright and Contact */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm">
            <span>&copy; 2024 Sunrise Summit. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <a
              href="mailto:gracethisplacellc@gmail.com"
              className="hover:text-sand transition-colors underline focus:outline-none focus:ring-2 focus:ring-sand focus:ring-offset-2 focus:ring-offset-navy rounded"
            >
              gracethisplacellc@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
