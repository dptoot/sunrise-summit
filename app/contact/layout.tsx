import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Sunrise Summit',
  description: 'Get in touch with Sunrise Summit. Have questions about our mountain cabin rental in Waynesville, NC? We typically respond within 24 hours.',
  openGraph: {
    title: 'Contact Us | Sunrise Summit',
    description: 'Get in touch with Sunrise Summit cabin rental. We typically respond within 24 hours.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sunrise Summit',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
