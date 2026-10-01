import type { Metadata } from 'next';
import Image from 'next/image';
import { Header, Footer, Hero, Section } from '@/components';

export const metadata: Metadata = {
  title: 'Local Attractions | Sunrise Summit',
  description: 'Discover local attractions near Sunrise Summit. Explore Great Smoky Mountains National Park, Blue Ridge Parkway, downtown Waynesville, and nearby mountain towns.',
  openGraph: {
    title: 'Local Attractions | Sunrise Summit',
    description: 'Discover local attractions near Sunrise Summit cabin rental in the Great Smoky Mountains.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sunrise Summit',
  },
};

interface Attraction {
  name: string;
  distance?: string;
  description: string;
  url?: string;
}

interface NearbyTown {
  name: string;
  distance: string;
  highlights: string;
  url?: string;
}

interface SeasonalActivity {
  season: string;
  activities: string;
}

const outdoorActivities: Attraction[] = [
  {
    name: 'Great Smoky Mountains National Park',
    distance: '35 min',
    description: 'Hiking, wildlife, scenic drives',
    url: 'https://www.nps.gov/grsm/',
  },
  {
    name: 'Blue Ridge Parkway',
    distance: '30 min',
    description: "America's favorite drive, overlooks, trails",
    url: 'https://www.nps.gov/blri/',
  },
  {
    name: 'Cataloochee Valley',
    distance: '60 min',
    description: 'Elk viewing, historic buildings',
    url: 'https://www.nps.gov/grsm/planyourvisit/cataloochee.htm',
  },
  {
    name: 'Sliding Rock',
    distance: '55 min',
    description: 'Natural waterslide, swimming',
    url: 'https://www.fs.usda.gov/recarea/nfsnc/recarea/?recid=48617',
  },
  {
    name: 'Looking Glass Falls',
    distance: '50 min',
    description: 'Stunning 60ft waterfall',
    url: 'https://www.romanticasheville.com/looking_glass_falls.htm',
  },
];

const popularAttractions: Attraction[] = [
  {
    name: 'Great Smoky Mountains Railroad',
    distance: '55 min',
    description: 'Scenic train rides from Bryson City. Becomes The Polar Express during the holidays!',
    url: 'https://www.gsmr.com/',
  },
  {
    name: 'Harrah\'s Cherokee Casino',
    distance: '40 min',
    description: 'Casino, dining, and entertainment in Cherokee',
    url: 'https://www.caesars.com/harrahs-cherokee',
  },
];

const placesWeLove: Attraction[] = [
  {
    name: 'Grebelknud Meat Company',
    description: 'Great burgers and weekly specials',
    url: 'https://maps.app.goo.gl/PXfcznHGYDKoysdV7',
  },
  {
    name: 'Frog Level Brewing Co',
    description: 'Live music in their outdoor area right on the river',
    url: 'https://maps.app.goo.gl/7gUAvimvxsm1d6QF6',
  },
  {
    name: 'The Scotsman Public House',
    description: 'Dinner and live Celtic music',
    url: 'https://maps.app.goo.gl/QhCzY5dd3FYQBsA89',
  },
  {
    name: 'Blue Ghost Outpost',
    description: 'Great coffee and pastries, very convenient just at the bottom of the mountain heading into Waynesville and Maggie Valley',
    url: 'https://maps.app.goo.gl/xkHGdqmG3yLbQMbz5',
  },
  {
    name: 'Haywood Smokehouse',
    description: 'Seriously delicious BBQ',
    url: 'https://maps.app.goo.gl/PY7tqwoWot7xLkKG9',
  },
];

const groceryStores: Attraction[] = [
  {
    name: 'Publix',
    description: 'Full-service grocery store',
    url: 'https://maps.app.goo.gl/CTxEcy6XyFNjgNox9',
  },
  {
    name: 'Ingles',
    description: 'Full-service grocery store',
    url: 'https://maps.app.goo.gl/BGaGnz9nsqrAaMZY7',
  },
];

const downtownWaynesville = [
  'Main Street shops and galleries',
  'Local restaurants and cafes',
  'Craft breweries (Frog Level, Boojum)',
  'Live music venues',
];

const nearbyTowns: NearbyTown[] = [
  {
    name: 'Asheville',
    distance: '45 min',
    highlights: 'Arts, food, Biltmore Estate',
    url: 'https://www.exploreasheville.com/',
  },
  {
    name: 'Cherokee',
    distance: '40 min',
    highlights: 'Casino, cultural museum, outdoor drama',
    url: 'https://visitcherokeenc.com/',
  },
  {
    name: 'Maggie Valley',
    distance: '30 min',
    highlights: 'Wheels Through Time museum, skiing at Cataloochee',
    url: 'https://www.maggievalley.org/',
  },
  {
    name: 'Sylva',
    distance: '35 min',
    highlights: 'Charming downtown, bookshops',
    url: 'https://www.discoverjacksonnc.com/',
  },
];

const seasonalActivities: SeasonalActivity[] = [
  {
    season: 'Spring',
    activities: 'Wildflowers, waterfalls at peak flow',
  },
  {
    season: 'Summer',
    activities: 'Tubing, hiking, outdoor concerts',
  },
  {
    season: 'Fall',
    activities: 'Spectacular foliage, apple orchards, festivals',
  },
  {
    season: 'Winter',
    activities: 'Skiing at Cataloochee, cozy fireplace days',
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      className="w-4 h-4 inline-block ml-1 opacity-60"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function AttractionCard({ attraction }: { attraction: Attraction }) {
  const content = (
    <div className="bg-white border border-sand rounded-lg p-6 hover:shadow-lg hover:border-coral/50 transition-all duration-300 h-full">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-navy">
          {attraction.name}
          {attraction.url && <ExternalLinkIcon />}
        </h3>
      </div>
      {attraction.distance && (
        <p className="text-sm text-coral font-medium mb-2">{attraction.distance} drive</p>
      )}
      <p className="text-mountain">{attraction.description}</p>
    </div>
  );

  if (attraction.url) {
    return (
      <a
        href={attraction.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {content}
      </a>
    );
  }

  return content;
}

function TownCard({ town }: { town: NearbyTown }) {
  const content = (
    <div className="bg-white border border-sand rounded-lg p-6 hover:shadow-lg hover:border-coral/50 transition-all duration-300 h-full">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-navy">
          {town.name}
          {town.url && <ExternalLinkIcon />}
        </h3>
      </div>
      <p className="text-sm text-coral font-medium mb-2">{town.distance} drive</p>
      <p className="text-mountain">{town.highlights}</p>
    </div>
  );

  if (town.url) {
    return (
      <a
        href={town.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {content}
      </a>
    );
  }

  return content;
}

function SeasonCard({ activity }: { activity: SeasonalActivity }) {
  return (
    <div className="bg-white border border-sand rounded-lg p-6 hover:shadow-lg hover:border-coral/50 transition-all duration-300 h-full text-center">
      <h3 className="text-lg font-semibold text-navy mb-2">{activity.season}</h3>
      <p className="text-mountain">{activity.activities}</p>
    </div>
  );
}

export default function AttractionsPage() {
  return (
    <>
      <Header />
      <main className="animate-fade-in">
        {/* Hero Section */}
        <Hero
          title="Local Attractions"
          subtitle="Discover the best of Western North Carolina"
          imageSrc="/images/mountain-valley-aerial-panorama.jpg"
        />

        {/* Outdoor Activities */}
        <Section variant="cream">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Outdoor Activities
          </h2>
          <p className="text-mountain text-center mb-12 max-w-2xl mx-auto">
            From national parks to stunning waterfalls, adventure awaits a scenic mountain drive from your door.
            The ~15 minute winding road down from the summit is an adventure in itself — enjoy beautiful views around every turn!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outdoorActivities.map((attraction) => (
              <AttractionCard key={attraction.name} attraction={attraction} />
            ))}
          </div>
        </Section>

        {/* Popular Attractions */}
        <Section>
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Popular Attractions
          </h2>
          <p className="text-mountain text-center mb-12 max-w-2xl mx-auto">
            A couple of local favorites worth the drive.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {popularAttractions.map((attraction) => (
              <AttractionCard key={attraction.name} attraction={attraction} />
            ))}
          </div>
        </Section>

        {/* Places We Love */}
        <Section variant="cream">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Places We Love in Waynesville
          </h2>
          <p className="text-mountain text-center mb-12 max-w-2xl mx-auto">
            Our personal favorites for food, drinks, and live music.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placesWeLove.map((place) => (
              <AttractionCard key={place.name} attraction={place} />
            ))}
          </div>
        </Section>

        {/* Downtown Waynesville */}
        <Section>
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Downtown Waynesville
          </h2>
          <p className="text-coral font-medium text-center mb-8">15 min drive from the mountain</p>
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
              <Image
                src="/images/waynesville-gateway-arch.jpeg"
                alt="Waynesville Gateway to the Great Smoky Mountains arch over Main Street"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
            <div className="bg-cream border border-sand rounded-lg p-8">
              <p className="text-mountain text-lg leading-relaxed mb-6">
                Our charming hometown offers a vibrant Main Street experience with something for everyone.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {downtownWaynesville.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-navy"
                  >
                    <span className="w-2 h-2 bg-coral rounded-full mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Nearby Towns */}
        <Section variant="cream">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Nearby Towns
          </h2>
          <p className="text-mountain text-center mb-12 max-w-2xl mx-auto">
            Explore the unique character of Western North Carolina&apos;s charming mountain towns.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyTowns.map((town) => (
              <TownCard key={town.name} town={town} />
            ))}
          </div>
        </Section>

        {/* Nearest Grocery Stores */}
        <Section>
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Nearest Grocery Stores
          </h2>
          <p className="text-mountain text-center mb-12 max-w-2xl mx-auto">
            Stock up on the way in so you can settle in and enjoy the views.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {groceryStores.map((store) => (
              <AttractionCard key={store.name} attraction={store} />
            ))}
          </div>
        </Section>

        {/* Seasonal Activities */}
        <Section variant="cream">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Seasonal Activities
          </h2>
          <p className="text-mountain text-center mb-12 max-w-2xl mx-auto">
            Every season brings new reasons to visit the Smoky Mountains.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalActivities.map((activity) => (
              <SeasonCard key={activity.season} activity={activity} />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
