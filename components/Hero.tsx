import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  imageSrc?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  imageSrc,
}: HeroProps) {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      style={
        imageSrc
          ? {
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-transparent" />

      {/* Default background if no image */}
      {!imageSrc && (
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-mountain to-navy/90" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center md:text-left w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4 max-w-3xl">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl">
            {subtitle}
          </p>
        )}

        {ctaText && ctaLink && (
          <Link
            href={ctaLink}
            className="inline-block bg-coral hover:bg-sunrise text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cream focus:ring-offset-2 focus:ring-offset-navy"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
