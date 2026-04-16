import type { Metadata } from 'next';
import { Header, Footer, Hero, Section } from '@/components';

export const metadata: Metadata = {
  title: 'House Rules | Sunrise Summit',
  description: 'House rules and guidelines for your stay at Sunrise Summit. Review policies on occupancy, quiet hours, parking, smoking, pets, and hot tub usage.',
  openGraph: {
    title: 'House Rules | Sunrise Summit',
    description: 'House rules and guidelines for your stay at Sunrise Summit cabin rental.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sunrise Summit',
  },
};

interface RuleSection {
  title: string;
  icon: string;
  rules: string[];
}

const ruleSections: RuleSection[] = [
  {
    title: 'General Rules',
    icon: '📌',
    rules: [
      'Maximum occupancy is 8 guests. Only registered guests are permitted to stay overnight.',
      'Please treat the property with respect as if it were your own home.',
      'No parties, events, or gatherings beyond the registered guest count.',
      'Quiet enjoyment of the property ensures a peaceful experience for all.',
      'Report any damages or maintenance issues immediately to the property manager.',
    ],
  },
  {
    title: 'Quiet Hours',
    icon: '🌙',
    rules: [
      'Quiet hours are from 9:00 PM to 8:00 AM.',
      'Keep noise levels to a minimum during quiet hours out of respect for neighbors.',
      'Outdoor activities and music should be brought inside after 9:00 PM.',
    ],
  },
  {
    title: 'Parking',
    icon: '🚗',
    rules: [
      'Park only in designated parking areas - the driveway and marked spaces.',
      'Maximum of 4 vehicles allowed on the property.',
      'Do not block the turnaround area.',
      'Large vehicles, trailers, or RVs require prior approval.',
      'Street parking is not permitted.',
    ],
  },
  {
    title: 'Smoking Policy',
    icon: '🚭',
    rules: [
      'Smoking is strictly prohibited anywhere on the property, both inside and outside.',
      'This includes cigarettes, cigars, vapes, and any other smoking materials.',
      'Violation of the smoking policy will result in a $500 cleaning fee.',
    ],
  },
  {
    title: 'Pet Policy',
    icon: '🐾',
    rules: [
      'No pets allowed.',
    ],
  },
  {
    title: 'Hot Tub / Spa',
    icon: '🛁',
    rules: [
      'Please see our dedicated spa instructions page for full rules, operating instructions, and safety guidelines: /instructions/spa',
    ],
  },
  {
    title: 'Check-out Reminders',
    icon: '✅',
    rules: [
      'Check-out time is 10:00 AM.',
      'Take out all trash to the outdoor bins.',
      'Leave used towels on the tile floor of the main bathroom or near the laundry room.',
      'Turn off all lights, fans, and electronics.',
      'Lock all doors and windows.',
      'Return any moved furniture to its original position.',
      'Leave the key/door code as you found it (self-locking door).',
    ],
  },
];

export default function HouseRulesPage() {
  return (
    <>
      <Header />
      <main className="animate-fade-in">
        <Hero
          title="House Rules"
          subtitle="Guidelines to ensure a comfortable and enjoyable stay for everyone"
          imageSrc="/images/hero.png"
        />

        {/* Introduction */}
        <Section>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-mountain text-lg leading-relaxed">
              We want you to have an amazing stay at Sunrise Summit. These guidelines help us
              maintain the property for all our guests and ensure everyone has a peaceful,
              enjoyable experience. Thank you for your cooperation!
            </p>
          </div>
        </Section>

        {/* Rules Sections */}
        {ruleSections.map((section, index) => (
          <Section key={section.title} variant={index % 2 === 0 ? 'cream' : 'white'}>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{section.icon}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-navy">
                  {section.title}
                </h2>
              </div>

              <div className="bg-white rounded-xl border border-sand p-6 md:p-8">
                <ul className="space-y-4">
                  {section.rules.map((rule, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 mt-1.5">
                        <svg
                          className="w-5 h-5 text-coral"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="text-mountain leading-relaxed">{rule}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>
        ))}

        {/* Agreement Note */}
        <Section variant="cream">
          <div className="max-w-3xl mx-auto">
            <div className="bg-navy/5 rounded-xl p-6 md:p-8 text-center">
              <h3 className="text-xl font-bold text-navy mb-4">
                Thank You for Respecting Our Home
              </h3>
              <p className="text-mountain leading-relaxed">
                By booking your stay at Sunrise Summit, you agree to follow these house rules.
                Violation of these rules may result in additional fees or early termination of
                your stay without refund. If you have any questions about these guidelines,
                please contact us before your arrival.
              </p>
              <div className="mt-6">
                <a
                  href="mailto:gracethisplacellc@gmail.com"
                  className="inline-block text-coral hover:text-sunrise font-semibold transition-colors"
                >
                  Contact us with questions
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
