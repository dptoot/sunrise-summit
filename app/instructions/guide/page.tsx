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
  instructions: string[];
  tips?: string;
  listStyle?: 'numbered' | 'bullets';
  groups?: { heading: string; intro?: string; steps: string[] }[];
}

const guideSections: GuideSection[] = [
  {
    id: 'wifi',
    title: 'WiFi',
    instructions: [
      'Network name: SunriseSummit_GUEST',
      'Password: Sunrise@SmokyMountains',
      'Coverage: WiFi reaches all areas of the cabin including the deck',
      'Speed: Suitable for streaming and video calls',
    ],
    tips: 'If you experience connectivity issues, try restarting your device or moving closer to the dining room area where the router is located. The network is case-sensitive.',
  },
  {
    id: 'kitchen',
    title: 'Kitchen Appliances',
    instructions: [
      'Coffee & Tea: Keurig, drip coffee maker, and electric kettle on the coffee bar. A starter set of K-cups, Starbucks coffee grounds, sugar, creamer, and tea selections provided. Just add mountain-fresh water!',
      'Dishwasher: Dishwasher detergent is under the sink. Load it up, add detergent, and press Start.',
      'Oven: Preheat by pressing Bake, setting temperature, and pressing Start. The oven will beep when it\'s ready to go!',
      'Microwave: Mounted a bit lower than you might be used to — your shoulders will thank you! Perfectly safe and easy to reach.',
      'Refrigerator: Ice maker is in the freezer. The mountain tap water is as fresh as it gets, but a Brita filter dispenser is available for those who prefer it.',
      'Small Appliances: A crockpot, blender, stand mixer, and waffle maker are available for you to use.',
      'Cooking utensils, pots, and pans are provided in the drawers and cabinets, along with some spices.',
    ],
    tips: 'Water pressure may be slow at first, but the well pump kicks in after a few seconds. A hot water recirculator system gets that mountain-fresh water hot faster!',
    listStyle: 'bullets',
  },
  {
    id: 'fireplaces',
    title: 'Fireplaces',
    instructions: [
      'Type: Propane gas log sets with a remote control. There is no wood burning — the logs are for show only.',
      'Safety: Keep the fireplace screen in place and any glass doors open while it is on. This fireplace gives off carbon monoxide, so never leave it running while you sleep or leave the house.',
      'Smell gas? Do not light anything, do not touch light switches or use a phone inside. Leave the cabin and contact us right away.',
    ],
    listStyle: 'bullets',
    groups: [
      {
        heading: 'Option 1: The pilot light is OFF (lighting it from scratch)',
        intro: 'Use this if the little pilot flame is out, the remote does nothing, or no one has used the fireplace in a while.',
        steps: [
          'Smell around the fireplace and down by the floor. Propane is heavier than air and settles low. If you smell gas, stop and see the safety note above.',
          'Make sure the gas valve is open.',
          'Find the control knob on the burner under the logs.',
          'Push the control knob in and turn it to PILOT. Keep it pressed in.',
          'While still pressing the knob, press the igniter button over and over until the small pilot flame lights.',
          'Keep the knob pressed in for 30 to 60 seconds after the pilot lights. This warms the safety sensor that keeps the pilot burning.',
          'Let go of the knob. If the pilot goes out, wait a few minutes for any gas to clear, then repeat steps 3 to 5.',
          'Once the pilot stays lit, turn the control knob to ON. The main burner is now ready and the remote controls it.',
          'Go to Option 2 below to turn the flames on.',
        ],
      },
      {
        heading: 'Option 2: The pilot light is ON (using the remote)',
        intro: 'Use this if the small pilot flame is already burning and the knob is on ON.',
        steps: [
          'Make sure the control knob is turned to ON.',
          'Press any button on the remote to wake it up.',
          'Press ON on the remote. The main flame lights.',
          'To pick how it runs, press MODE. Manual mode keeps the flame on until you press OFF. Thermostat mode holds the room at a set temperature and the flame cycles on and off by itself.',
          'In thermostat mode, use SET to pick the temperature you want.',
          'Press OFF when you are done. The pilot stays lit, so the fireplace is ready for next time.',
        ],
      },
      {
        heading: 'Shutting it all the way down',
        steps: [
          'Press OFF on the remote, or turn the control knob to PILOT, to turn off the main flame.',
          'To shut everything off, including the pilot, turn the control knob to OFF. Please do this before you check out.',
        ],
      },
    ],
    tips: 'If the remote stops responding, try fresh batteries in both the remote and the receiver box, then contact us. If the pilot will not light, the main flame lights then goes out, or the flame looks weak or yellow, turn it off, open a window, and contact us. The fireplace has a safety sensor that shuts it off when the room is low on fresh air.',
  },
  {
    id: 'thermostat',
    title: 'Heating & Cooling',
    instructions: [
      'Baseboard Heaters: Each bedroom and zone has its own thermostat — adjust individually for your comfort.',
      'To Adjust: Use the up/down buttons on the digital display to set your desired temperature.',
      'Recommended Settings: 68-72°F for comfortable temperatures.',
      'Air Conditioning: There isn\'t any — but you won\'t miss it! At this altitude, summer nights are cool and breezy. Mother Nature handles the AC up here.',
      'Fans: Each room has a ceiling fan with a remote for extra airflow. Each bedroom also has a box fan.',
    ],
    tips: 'Mountain temperatures can swing 20-30 degrees between day and night, so you may want to adjust as the evening cools down.',
    listStyle: 'bullets',
  },
  {
    id: 'locking-up',
    title: 'Locking Up',
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
    instructions: [
      'Smart TVs: Located in the living room, most bedrooms, and game room.',
      'Streaming: You can log into your own streaming accounts on the Smart TVs. Please remember to log out before you leave.',
      'Game Room: Equipped with Xbox and Nintendo Switch for everyone to enjoy. Controllers are in the cabinet below.',
    ],
    tips: 'Board games are available in the game room bookcase for family fun.',
    listStyle: 'bullets',
  },
  {
    id: 'laundry',
    title: 'Washer & Dryer',
    instructions: [
      'Location: Washer and dryer are in the laundry room at the foot of the stairs.',
      'Washer: Add detergent to dispenser, select cycle, and press Start.',
      'Dryer: Clean the lint trap before each use. Select heat level and press Start.',
      'After Use: Please leave the washer door and detergent dispenser open after your last load — this prevents mold and mildew buildup.',
    ],
    tips: 'Please complete any laundry loads before check-out. Do not leave wet items in the washer.',
    listStyle: 'bullets',
  },
  {
    id: 'provided',
    title: 'What We Provide',
    instructions: [
      'Bath: Shampoo, conditioner, body wash, and liquid hand soap.',
      'Paper Goods: A starter set of toilet paper and paper towels.',
      'Kitchen: Some spices are in the kitchen.',
      'Little Ones: A pack n play is available for your use.',
    ],
    listStyle: 'bullets',
  },
  {
    id: 'outdoors',
    title: 'Outdoors',
    instructions: [
      'Walking Sticks: Walking sticks are in the hall coat closet and are available for you to use. When you return them, please clean off any mud or dirt.',
      'Fire Pit: Please review the fire pit rules on our House Rules page before lighting a fire.',
      'Grill: The propane tank is under the grill. Please turn off the propane tank after each use by turning the valve clockwise.',
    ],
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
                <div>
                  <h3 className="text-lg font-semibold text-navy group-hover:text-coral transition-colors">Hot Tub / Spa</h3>
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

                    {section.groups && (
                      <div className="mt-8 space-y-8">
                        {section.groups.map((group) => (
                          <div key={group.heading}>
                            <h3 className="text-lg font-semibold text-navy mb-2">{group.heading}</h3>
                            {group.intro && (
                              <p className="text-mountain text-sm mb-4">{group.intro}</p>
                            )}
                            <ol className="space-y-3">
                              {group.steps.map((step, i) => (
                                <li key={i} className="flex gap-3">
                                  <span className="flex-shrink-0 w-6 h-6 bg-coral/20 text-coral rounded-full flex items-center justify-center text-sm font-bold">
                                    {i + 1}
                                  </span>
                                  <p className="text-mountain leading-relaxed">{step}</p>
                                </li>
                              ))}
                            </ol>
                          </div>
                        ))}
                      </div>
                    )}

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
                        password="Sunrise@SmokyMountains"
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
