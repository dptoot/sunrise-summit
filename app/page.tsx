import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer, Hero, Section, AmenityCard } from '@/components';

export const metadata: Metadata = {
  title: 'Sunrise Summit | Mountain Cabin Rental in Waynesville, NC',
  description: 'Experience breathtaking mountain views at Sunrise Summit, a 4-bedroom mid-century modern cabin rental in Waynesville, NC. Indoor hot tub, game rooms, and panoramic Smoky Mountain views.',
  openGraph: {
    title: 'Sunrise Summit | Mountain Cabin Rental in Waynesville, NC',
    description: 'Experience breathtaking mountain views at Sunrise Summit, a 4-bedroom mid-century modern cabin rental in Waynesville, NC.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sunrise Summit',
  },
};

const amenities = [
  {
    icon: '🛁',
    title: 'Indoor Hot Tub with Fireplace',
    description: 'Unwind in our luxurious indoor hot tub while enjoying the warmth of a crackling fireplace.',
  },
  {
    icon: '🌅',
    title: 'Breathtaking Sunrise Views',
    description: 'Wake up to stunning panoramic views of the sun rising above the mountain peaks.',
  },
  {
    icon: '🎮',
    title: 'Game Rooms for All Ages',
    description: 'Entertainment for everyone with arcade games, board games, and more.',
  },
  {
    icon: '🏠',
    title: 'Mid-Century Modern Comfort',
    description: 'Thoughtfully designed spaces blending retro charm with modern amenities.',
  },
];

const showcaseImages = [
  { src: '/images/cabin-exterior-aerial-driveway.jpg', alt: 'Mountain cabin aerial view with driveway' },
  { src: '/images/living-room-stone-fireplace-tv.jpeg', alt: 'Living room with stone fireplace' },
  { src: '/images/master-bedroom-king-bed-orange-accents.jpeg', alt: 'Master bedroom with king bed' },
  { src: '/images/deck-fire-pit-twilight-mountain-view.jpeg', alt: 'Deck fire pit at twilight with mountain view' },
  { src: '/images/indoor-hot-tub-cedar-room.jpeg', alt: 'Indoor hot tub in cedar-paneled room' },
  { src: '/images/balcony-vivid-sunset-mountains.jpeg', alt: 'Vivid sunset over mountain ridges' },
];

const stats = [
  { label: '4 Bedrooms' },
  { label: 'Sleeps 8' },
  { label: 'Stunning Mountain Top Views' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="animate-fade-in">
        {/* Hero Section */}
        <Hero
          title="Wake Up Above the Clouds"
          subtitle="A mid-century modern retreat in the heart of the Smokies"
          ctaText="Explore the Property"
          ctaLink="/about"
          imageSrc="/images/hero.png"
        />

        {/* Quick Stats Bar */}
        <div className="bg-navy py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center">
                  <span className="text-cream font-medium text-sm md:text-base whitespace-nowrap">
                    {stat.label}
                  </span>
                  {index < stats.length - 1 && (
                    <span className="hidden md:block mx-6 text-cream/40">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Property Highlights */}
        <Section variant="cream">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            What Makes Us Special
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity) => (
              <AmenityCard
                key={amenity.title}
                icon={amenity.icon}
                title={amenity.title}
                description={amenity.description}
              />
            ))}
          </div>
        </Section>

        {/* Image Preview Section */}
        <Section>
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            Glimpse of Paradise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-lg overflow-hidden group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-block border-2 border-navy text-navy font-semibold px-8 py-3 rounded-lg hover:bg-navy hover:text-cream transition-colors duration-300"
            >
              View Full Gallery
            </Link>
          </div>
        </Section>

        {/* Location Teaser */}
        <Section variant="cream">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Nestled in the Smokies
            </h2>
            <p className="text-mountain text-lg leading-relaxed mb-8">
              Located in the charming town of Waynesville, North Carolina, Sunrise Summit
              offers the perfect basecamp for exploring the Great Smoky Mountains. Just
              minutes from the Blue Ridge Parkway and countless hiking trails, our retreat
              puts you at the heart of Appalachian adventure while providing a peaceful
              sanctuary to return to each evening.
            </p>
            <Link
              href="/attractions"
              className="inline-block bg-coral hover:bg-sunrise text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Explore the Area
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
