import type { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer, Hero, Section, WiFiQRCode } from '@/components';

export const metadata: Metadata = {
  title: 'House Guide | Sunrise Summit',
  description: 'Complete guide to using all amenities at Sunrise Summit. Learn how to operate the WiFi, kitchen appliances, hot tub, fireplaces, and entertainment systems.',
  openGraph: {
    title: 'House Guide | Sunrise Summit',
    description: 'Complete guide to using all amenities at Sunrise Summit cabin rental.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sunrise Summit',
  },
};

interface GuideSection {
  id: string;
  title: string;
  icon: string;
  instructions: string[];
  tips?: string;
  listStyle?: 'numbered' | 'bullets';
}

const guideSections: GuideSection[] = [
  {
    id: 'wifi',
    title: 'WiFi',
    icon: '📶',
    instructions: [
      'Network name: SunriseSummit_GUEST',
      'Password: Sunrise@SmokeyMountains',
      'Coverage: WiFi reaches all areas of the cabin including the deck',
      'Speed: Suitable for streaming and video calls',
    ],
    tips: 'If you experience connectivity issues, try restarting your device or moving closer to the dining room area where the router is located. The network is case-sensitive.',
  },
  {
    id: 'kitchen',
    title: 'Kitchen Appliances',
    icon: '🍳',
    instructions: [
      'Coffee & Tea: Keurig, drip coffee maker, and electric kettle on the coffee bar. A starter set of K-cups, sugar, creamer, and tea selections provided. Just add mountain-fresh water!',
      'Dishwasher: Great news — we have a brand new dishwasher! Load it up, add a detergent pod from under the sink, and press Start. It\'s that easy.',
      'Oven: Preheat by pressing Bake, setting temperature, and pressing Start. The oven will beep when it\'s ready to go!',
      'Microwave: Mounted a bit lower than you might be used to — your shoulders will thank you! Perfectly safe and easy to reach.',
      'Refrigerator: Ice maker is in the freezer. The mountain tap water is as fresh as it gets, but a Brita filter dispenser is available for those who prefer it.',
      'Cooking utensils, pots, pans, and basic spices are provided in the drawers and cabinets.',
    ],
    tips: 'Water pressure may be slow at first, but the well pump kicks in after a few seconds. A hot water recirculator system gets that mountain-fresh water hot faster!',
    listStyle: 'bullets',
  },
  {
    id: 'fireplaces',
    title: 'Fireplaces',
    icon: '🔥',
    instructions: [
      'Status: The fireplaces are currently being replaced and should not be turned on.',
      'Since we\'re heading into the warm season, you won\'t need them — enjoy the mountain breeze instead!',
    ],
    tips: 'If you have any questions about the fireplaces, please contact us.',
  },
  {
    id: 'thermostat',
    title: 'Heating & Cooling',
    icon: '🌡️',
    instructions: [
      'Baseboard Heaters: Each bedroom and zone has its own thermostat — adjust individually for your comfort.',
      'To Adjust: Use the up/down buttons on the digital display to set your desired temperature.',
      'Recommended Settings: 68-72°F for comfortable temperatures.',
      'Air Conditioning: There isn\'t any — but you won\'t miss it! At this altitude, summer nights are cool and breezy. Mother Nature handles the AC up here.',
      'Fans: Each room has a ceiling fan with a remote for extra airflow.',
    ],
    tips: 'Mountain temperatures can swing 20-30 degrees between day and night, so you may want to adjust as the evening cools down.',
    listStyle: 'bullets',
  },
  {
    id: 'locking-up',
    title: 'Locking Up',
    icon: '🔐',
    instructions: [
      'Keypad Locks: The basement and front door have keypad enabled locks. From inside, just turn the latch. From outside, press the check mark button on the keypad.',
      'French Doors: For the main floor french doors, rotate the handle up first, then back down to allow you to correctly turn the deadbolt latch.',
    ],
    tips: 'Always double-check that all doors are locked before leaving or going to bed.',
    listStyle: 'bullets',
  },
  {
    id: 'entertainment',
    title: 'TV & Entertainment',
    icon: '📺',
    instructions: [
      'Smart TVs: Located in the living room, most bedrooms, poker room, and game room.',
      'Streaming: You can log into your own streaming accounts on the Smart TVs. Please remember to log out before you leave.',
      'Game Room: Equipped with Xbox and Nintendo Switch for everyone to enjoy. Controllers are in the cabinet below.',
    ],
    tips: 'Board games and cards are available in the poker room closet for family fun.',
    listStyle: 'bullets',
  },
  {
    id: 'laundry',
    title: 'Washer & Dryer',
    icon: '🧺',
    instructions: [
      'Location: Washer and dryer are in the basement at the foot of the stairs.',
      'Brand New: Both the washer and dryer are brand new and work great!',
      'Washer: Add detergent to dispenser, select cycle, and press Start.',
      'Dryer: Clean the lint trap before each use. Select heat level and press Start.',
      'After Use: Please leave the washer door and detergent dispenser open after your last load — this prevents mold and mildew buildup.',
    ],
    tips: 'Please complete any laundry loads before check-out. Do not leave wet items in the washer.',
    listStyle: 'bullets',
  },
];

export default function HouseGuidePage() {
  return (
    <>
      <Header />
      <main className="animate-fade-in">
        <Hero
          title="House Guide"
          subtitle="Learn how to use all the amenities and features of Sunrise Summit"
          imageSrc="/images/living-room-stone-fireplace-tv.jpeg"
        />

        {/* Quick Navigation */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-navy mb-6 text-center">
              Quick Links
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {guideSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-sand hover:bg-navy hover:text-cream rounded-full text-navy font-medium transition-colors"
                >
                  <span>{section.icon}</span>
                  <span>{section.title}</span>
                </a>
              ))}
            </div>

            {/* Hot Tub / Spa Callout */}
            <Link
              href="/instructions/spa"
              className="mt-8 flex items-center justify-between gap-4 bg-white border-2 border-coral/30 rounded-xl p-5 hover:border-coral hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">🛁</span>
                <div>
                  <h3 className="text-lg font-semibold text-navy group-hover:text-coral transition-colors">Indoor Hot Tub / Spa</h3>
                  <p className="text-mountain text-sm">Learn how to operate the jets and temperature controls, safety guidelines, recommended settings, and troubleshooting tips for the perfect soak</p>
                </div>
              </div>
              <svg
                className="w-5 h-5 text-coral flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </Section>

        {/* Guide Sections */}
        {guideSections.map((section, index) => (
          <Section key={section.id} variant={index % 2 === 0 ? 'cream' : 'white'}>
            <div id={section.id} className="max-w-4xl mx-auto scroll-mt-20">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{section.icon}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-navy">
                  {section.title}
                </h2>
              </div>

              <div className="bg-white rounded-xl border border-sand p-6 md:p-8">
                <div className={section.id === 'wifi' ? 'flex flex-col-reverse md:flex-row gap-6' : ''}>
                  <div className="flex-1">
                    <ul className="space-y-4">
                      {section.instructions.map((instruction, i) => {
                        const colonIndex = instruction.indexOf(':');
                        const hasTopic = section.listStyle === 'bullets' && colonIndex > 0;
                        const topic = hasTopic ? instruction.slice(0, colonIndex + 1) : '';
                        const content = hasTopic ? instruction.slice(colonIndex + 1) : instruction;

                        return (
                          <li key={i} className="flex gap-3">
                            {section.listStyle === 'bullets' ? (
                              <span className="flex-shrink-0 w-2 h-2 mt-2 bg-coral rounded-full" />
                            ) : (
                              <span className="flex-shrink-0 w-6 h-6 bg-coral/20 text-coral rounded-full flex items-center justify-center text-sm font-bold">
                                {i + 1}
                              </span>
                            )}
                            <p className="text-mountain leading-relaxed">
                              {hasTopic && <span className="font-semibold text-navy">{topic}</span>}
                              {content}
                            </p>
                          </li>
                        );
                      })}
                    </ul>

                    {section.tips && (
                      <div className="mt-6 p-4 bg-sand/50 rounded-lg">
                        <p className="text-navy text-sm">
                          <span className="font-semibold">Tip: </span>
                          {section.tips}
                        </p>
                      </div>
                    )}
                  </div>

                  {section.id === 'wifi' && (
                    <div className="flex-shrink-0 flex justify-center">
                      <WiFiQRCode
                        ssid="SunriseSummit_GUEST"
                        password="Sunrise@SmokeyMountains"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Section>
        ))}

        {/* Need Help Section */}
        <Section variant="cream">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              Need Additional Help?
            </h2>
            <p className="text-mountain leading-relaxed mb-6">
              If you have questions about any of the amenities or encounter any issues,
              please check the QR codes posted on the wall by the front door and by the back porch exterior door for detailed instructions, or contact us directly.
            </p>
            <a
              href="mailto:gracethisplacellc@gmail.com"
              className="inline-block bg-coral hover:bg-sunrise text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
