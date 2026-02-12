import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo Gallery | Sunrise Summit',
  description: 'Browse photos of Sunrise Summit cabin rental. View exterior shots, living spaces, bedrooms, stunning mountain views, and amenities like our indoor hot tub.',
  openGraph: {
    title: 'Photo Gallery | Sunrise Summit',
    description: 'Browse photos of Sunrise Summit cabin rental featuring stunning mountain views and amenities.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sunrise Summit',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
