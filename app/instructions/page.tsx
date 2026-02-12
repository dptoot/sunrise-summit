import type { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer, Hero, Section } from '@/components';

export const metadata: Metadata = {
  title: 'Guest Instructions | Sunrise Summit',
  description: 'Everything you need to know for your stay at Sunrise Summit. Find check-in instructions, house guide, and house rules for our mountain cabin rental.',
  openGraph: {
    title: 'Guest Instructions | Sunrise Summit',
    description: 'Everything you need to know for your stay at Sunrise Summit. Find check-in instructions, house guide, and house rules.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sunrise Summit',
  },
};

const instructionCards = [
  {
    icon: '🔑',
    title: 'Check-in & Check-out',
    description: 'Everything you need to know about arriving and departing from Sunrise Summit.',
    href: '/instructions/check-in',
  },
  {
    icon: '📖',
    title: 'House Guide',
    description: 'Learn how to use all the amenities and features of our mountain retreat.',
    href: '/instructions/guide',
  },
  {
    icon: '📋',
    title: 'House Rules',
    description: 'Guidelines to ensure a comfortable stay for you and future guests.',
    href: '/instructions/rules',
  },
];

export default function InstructionsPage() {
  return (
    <>
      <Header />
      <main className="animate-fade-in">
        <Hero
          title="Guest Instructions"
          subtitle="Everything you need for a perfect stay at Sunrise Summit"
          imageSrc="/images/hero.png"
        />

        <Section variant="cream">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {instructionCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group bg-white border-2 border-sand rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h2 className="text-xl md:text-2xl font-bold text-navy mb-3 group-hover:text-mountain transition-colors">
                  {card.title}
                </h2>
                <p className="text-mountain leading-relaxed">
                  {card.description}
                </p>
                <div className="mt-4 text-coral font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more
                  <svg
                    className="w-5 h-5"
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
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
