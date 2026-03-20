import type { Metadata } from 'next';
import Image from 'next/image';
import { Header, Footer, Hero, Section, AmenityCard } from '@/components';

export const metadata: Metadata = {
  title: 'About Sunrise Summit | 4BR Mountain Cabin',
  description: 'Discover Sunrise Summit, a thoughtfully designed 4-bedroom mid-century modern cabin perched on Heaths Peak in Waynesville, NC. Sleeps 8 with stunning panoramic mountain views.',
  openGraph: {
    title: 'About Sunrise Summit | 4BR Mountain Cabin',
    description: 'Discover Sunrise Summit, a thoughtfully designed 4-bedroom mid-century modern cabin perched on Heaths Peak in Waynesville, NC.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sunrise Summit',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="animate-fade-in">
        {/* Hero Section - smaller variant for about page */}
        <Hero
          title="About Sunrise Summit"
          subtitle="Your mountain escape awaits"
          imageSrc="/images/cabin-deck-mountain-vista.jpg"
        />

        {/* Property Description Section - 2 column layout */}
        <Section variant="white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Descriptive Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                A Retreat Like No Other
              </h2>
              <div className="space-y-4 text-mountain leading-relaxed">
                <p>
                  Perched high on Heaths Peak in Waynesville, North Carolina, Sunrise Summit
                  offers an escape from the ordinary. Wake each morning to breathtaking
                  panoramic views as the sun paints the mountain ridges in shades of gold
                  and amber.
                </p>
                <p>
                  This thoughtfully designed mid-century modern cabin combines timeless
                  style with modern comfort. Clean lines, warm wood accents, and expansive
                  windows create a seamless connection between the cozy interior and the
                  stunning natural landscape beyond.
                </p>
                <p>
                  Whether you&apos;re gathering with family, reconnecting with friends, or
                  seeking a peaceful retreat, Sunrise Summit provides the perfect setting
                  to slow down, breathe deep, and create lasting memories together.
                </p>
              </div>
            </div>

            {/* Right: Property Image */}
            <div className="relative rounded-2xl aspect-[4/3] overflow-hidden">
              <Image
                src="/images/cabin-exterior-aerial-driveway.jpg"
                alt="Sunrise Summit mountain cabin aerial view"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Section>

        {/* Amenities Grid Section */}
        <Section variant="cream">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Everything You Need
            </h2>
            <p className="text-mountain max-w-2xl mx-auto">
              From comfortable accommodations to entertainment for all ages,
              Sunrise Summit has been thoughtfully equipped for your perfect stay.
            </p>
          </div>

          {/* Amenity Categories */}
          <div className="space-y-12">
            {/* Bedrooms & Baths */}
            <div>
              <h3 className="text-xl font-semibold text-navy mb-6 border-b border-sand pb-2">
                Bedrooms & Baths
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AmenityCard
                  icon="🛏️"
                  title="4 Bedrooms"
                  description="Spacious and comfortable bedrooms, each designed for restful sleep after your mountain adventures."
                />
                <AmenityCard
                  icon="🚿"
                  title="2 Full + 2 Half Baths"
                  description="Two full bathrooms and two half baths ensure plenty of space for everyone."
                />
                <AmenityCard
                  icon="👨‍👩‍👧‍👦"
                  title="Sleeps 8"
                  description="Perfect for families or groups of friends looking to experience the mountains together."
                />
              </div>
            </div>

            {/* Living Spaces */}
            <div>
              <h3 className="text-xl font-semibold text-navy mb-6 border-b border-sand pb-2">
                Living Spaces
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AmenityCard
                  icon="🏠"
                  title="Open Living Area"
                  description="A welcoming great room where everyone can gather, relax, and enjoy the stunning views."
                />
                <AmenityCard
                  icon="🔥"
                  title="2 Fireplaces"
                  description="Cozy up by the fire on cool mountain evenings - one in the living area and one by the hot tub."
                />
                <AmenityCard
                  icon="🍳"
                  title="Fully Equipped Kitchen"
                  description="Everything you need to prepare meals, from morning coffee to family dinners."
                />
              </div>
            </div>

            {/* Entertainment */}
            <div>
              <h3 className="text-xl font-semibold text-navy mb-6 border-b border-sand pb-2">
                Entertainment
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AmenityCard
                  icon="🃏"
                  title="Poker Room"
                  description="Gather around the poker table for cards and good conversation."
                />
                <AmenityCard
                  icon="🎮"
                  title="Game Room"
                  description="Xbox, Nintendo Switch, board games, and more — fun for all ages."
                />
                <AmenityCard
                  icon="📺"
                  title="Smart TVs"
                  description="Stream your favorite shows and movies on smart TVs throughout the cabin."
                />
              </div>
            </div>

            {/* Outdoor */}
            <div>
              <h3 className="text-xl font-semibold text-navy mb-6 border-b border-sand pb-2">
                Outdoor & Relaxation
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AmenityCard
                  icon="🌄"
                  title="Large Deck"
                  description="Expansive outdoor deck space with Adirondack chairs around the fire pit, perfect for morning coffee or evening stargazing."
                />
                <AmenityCard
                  icon="🏔️"
                  title="Panoramic Views"
                  description="Stunning mountain vistas stretching across multiple ridges and valleys."
                />
                <AmenityCard
                  icon="♨️"
                  title="Indoor Hot Tub"
                  description="Soak in the hot tub while enjoying the warmth of the adjacent fireplace year-round."
                />
              </div>
            </div>
          </div>
        </Section>

        {/* The Experience Section */}
        <Section variant="white" className="relative overflow-hidden">
          {/* Subtle background treatment */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-transparent to-mountain/5 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
              More Than a Stay
            </h2>
            <div className="space-y-6 text-mountain leading-relaxed text-lg">
              <p>
                There&apos;s something magical about watching the sunrise from
                elevation. As the first light crests the distant ridges and spills
                across the valleys below, you&apos;ll understand why we named this
                place Sunrise Summit.
              </p>
              <p>
                This isn&apos;t just a vacation rental - it&apos;s an invitation to
                disconnect from the noise of everyday life and reconnect with what
                matters most. The mountains have a way of putting things in
                perspective, of reminding us to slow down and savor the moment.
              </p>
              <p className="font-medium text-navy">
                Whether it&apos;s the laughter echoing from the game room, quiet
                conversations by the fire, or the collective gasp as the sunrise
                paints the sky in impossible colors - these are the memories that
                will stay with you long after you&apos;ve returned home.
              </p>
            </div>

            {/* Decorative element */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-4 text-sand">
                <div className="w-16 h-px bg-sand" />
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 22h20L12 2zm0 5l6.9 13H5.1L12 7z" />
                </svg>
                <div className="w-16 h-px bg-sand" />
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
