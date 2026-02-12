import type { Metadata } from 'next';
import { Header, Footer, Hero, Section, HotTubGuide } from '@/components';

export const metadata: Metadata = {
  title: 'Hot Tub / Spa Instructions | Sunrise Summit',
  description: 'Complete guide to using the indoor hot tub at Sunrise Summit. Safety guidelines, controls, temperature settings, and troubleshooting.',
  openGraph: {
    title: 'Hot Tub / Spa Instructions | Sunrise Summit',
    description: 'Complete guide to using the indoor hot tub at Sunrise Summit cabin rental.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sunrise Summit',
  },
};

export default function SpaPage() {
  return (
    <>
      <Header />
      <main className="animate-fade-in">
        <Hero
          title="Indoor Hot Tub / Spa"
          subtitle="Everything you need for a relaxing soak"
          imageSrc="/images/hero.png"
        />

        <Section variant="cream">
          <div className="max-w-4xl mx-auto">
            <HotTubGuide />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
