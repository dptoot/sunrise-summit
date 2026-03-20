'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Header, Footer, Hero, Section } from '@/components';

// Gallery image type
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'Exterior' | 'Living Spaces' | 'Bedrooms' | 'Bathrooms' | 'Views' | 'Amenities';
}

const galleryImages: GalleryImage[] = [
  // Exterior
  { id: 1, src: '/images/cabin-exterior-aerial-driveway.jpg', alt: 'Mountain cabin aerial view with stone facade and driveway', category: 'Exterior' },
  { id: 2, src: '/images/cabin-deck-mountain-vista.jpg', alt: 'Cabin deck overlooking mountain range', category: 'Exterior' },
  { id: 3, src: '/images/front-porch-yellow-door-garden.jpg', alt: 'Covered front porch with yellow door and garden', category: 'Exterior' },
  { id: 4, src: '/images/mountain-valley-aerial-panorama.jpg', alt: 'Aerial panoramic view of Smoky Mountain valley', category: 'Exterior' },

  // Living Spaces
  { id: 5, src: '/images/living-room-teal-wall-leather-sofas.jpeg', alt: 'Open living room with teal accent wall and leather sofas', category: 'Living Spaces' },
  { id: 6, src: '/images/living-room-stone-fireplace-tv.jpeg', alt: 'Cozy living room with stone fireplace and mounted TV', category: 'Living Spaces' },
  { id: 7, src: '/images/dining-room-blue-walls-table-set.jpeg', alt: 'Formal dining room with blue walls set for six', category: 'Living Spaces' },
  { id: 8, src: '/images/dining-room-table-set-wide-view.jpeg', alt: 'Dining room wide view with table set and forest views', category: 'Living Spaces' },
  { id: 9, src: '/images/dining-nook-sunset-window-view.jpeg', alt: 'Dining nook with stunning sunset through windows', category: 'Living Spaces' },
  { id: 10, src: '/images/kitchen-nook-mountain-panorama.jpeg', alt: 'Kitchen eating area with panoramic mountain view', category: 'Living Spaces' },
  { id: 11, src: '/images/breakfast-nook-teal-walls.jpeg', alt: 'Breakfast nook with teal walls and round table', category: 'Living Spaces' },
  { id: 12, src: '/images/lower-lounge-green-velvet-armchairs.jpeg', alt: 'Lower level lounge with green velvet armchairs', category: 'Living Spaces' },
  { id: 13, src: '/images/coffee-station-keurig-kettle.jpeg', alt: 'Coffee station with Keurig, drip maker, and electric kettle', category: 'Living Spaces' },

  // Bedrooms
  { id: 14, src: '/images/master-bedroom-king-bed-orange-accents.jpeg', alt: 'Master bedroom with king bed and orange accents', category: 'Bedrooms' },
  { id: 15, src: '/images/master-bedroom-craftsman-bed-wide.jpeg', alt: 'Master bedroom wide view with craftsman-style bed', category: 'Bedrooms' },
  { id: 16, src: '/images/master-bedroom-orange-curtains-fan.jpeg', alt: 'Master bedroom with orange curtains and ceiling fan', category: 'Bedrooms' },
  { id: 17, src: '/images/bedside-closeup-orange-pillows-lamp.jpeg', alt: 'Bedside detail with orange pillows, lamp, and fresh flowers', category: 'Bedrooms' },
  { id: 18, src: '/images/attic-twin-bedroom-green-walls.jpeg', alt: 'Cozy attic bedroom with twin beds and green walls', category: 'Bedrooms' },
  { id: 19, src: '/images/navy-bedroom-queen-bed.jpeg', alt: 'Guest bedroom with navy accent wall and queen bed', category: 'Bedrooms' },
  { id: 20, src: '/images/spacious-bedroom-navy-wall-loveseat.jpeg', alt: 'Spacious bedroom with navy wall and yellow loveseat', category: 'Bedrooms' },

  // Bathrooms
  { id: 21, src: '/images/main-bathroom-blue-double-vanity.jpeg', alt: 'Main bathroom with blue walls and double vanity', category: 'Bathrooms' },
  { id: 22, src: '/images/bathroom-rustic-vanity-vessel-sink.jpeg', alt: 'Bathroom with rustic vanity and vessel sink', category: 'Bathrooms' },
  { id: 23, src: '/images/half-bath-floral-wallpaper.jpeg', alt: 'Half bath with floral wallpaper and dark wainscoting', category: 'Bathrooms' },

  // Views
  { id: 24, src: '/images/deck-sunset-view-telescope.jpeg', alt: 'Mountain sunset from deck with telescope', category: 'Views' },
  { id: 25, src: '/images/balcony-vivid-sunset-mountains.jpeg', alt: 'Vivid sunset from balcony over mountain ridges', category: 'Views' },
  { id: 26, src: '/images/deck-adirondack-chairs-starry-sky.jpeg', alt: 'Deck with Adirondack chairs under the Milky Way', category: 'Views' },
  { id: 27, src: '/images/deck-fire-pit-twilight-mountain-view.jpeg', alt: 'Fire pit at twilight with mountain vista', category: 'Views' },

  // Amenities
  { id: 28, src: '/images/indoor-hot-tub-cedar-room.jpeg', alt: 'Indoor hot tub in cedar-paneled room with fireplace', category: 'Amenities' },
  { id: 29, src: '/images/game-room-poker-table-stone-wall.jpeg', alt: 'Game room with poker table and stone wall fireplace', category: 'Amenities' },
  { id: 30, src: '/images/stone-fireplace-lounge-armchairs.jpeg', alt: 'Stone fireplace lounge with armchairs', category: 'Amenities' },
  { id: 31, src: '/images/poker-room-stone-walls-wide.jpeg', alt: 'Poker room wide view with stone walls', category: 'Amenities' },
  { id: 32, src: '/images/pub-room-poker-table-stone-walls.jpeg', alt: 'Pub room with poker table and stone accents', category: 'Amenities' },
  { id: 33, src: '/images/stone-lounge-green-chairs-cedar-ceiling.jpeg', alt: 'Stone wall lounge with green chairs and cedar ceiling', category: 'Amenities' },
  { id: 34, src: '/images/entertainment-room-tv-led-lights.jpeg', alt: 'Entertainment room with large TV and LED accent lights', category: 'Amenities' },
  { id: 35, src: '/images/gaming-console-collection-closeup.jpeg', alt: 'Gaming console collection with Nintendo Switch and Xbox', category: 'Amenities' },
  { id: 36, src: '/images/recreation-room-foosball-bookshelf.jpeg', alt: 'Recreation room with foosball table and bookshelf', category: 'Amenities' },
  { id: 37, src: '/images/recreation-room-staircase-wide.jpeg', alt: 'Recreation room wide view with staircase and games', category: 'Amenities' },
  { id: 38, src: '/images/scrabble-board-game-table.jpeg', alt: 'Scrabble board game on glass table', category: 'Amenities' },
  { id: 39, src: '/images/basement-lounge-sectional-colorful-art.jpeg', alt: 'Basement lounge with sectional sofa and colorful art', category: 'Amenities' },
  { id: 40, src: '/images/arcade-pacman-cabinet-lounge.jpeg', alt: 'Pac-Man arcade cabinet in lounge area', category: 'Amenities' },
];

const categories = ['All', 'Exterior', 'Living Spaces', 'Bedrooms', 'Bathrooms', 'Views', 'Amenities'] as const;
type Category = typeof categories[number];

// Lightbox Component
interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

function Lightbox({ images, currentIndex, isOpen, onClose, onPrevious, onNext }: LightboxProps) {
  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  if (!isOpen || currentIndex < 0 || currentIndex >= images.length) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-navy/90"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-cream hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cream rounded-full"
        aria-label="Close lightbox"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous button */}
      <button
        onClick={onPrevious}
        className="absolute left-4 z-10 p-2 text-cream hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cream rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous image"
        disabled={images.length <= 1}
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 z-10 p-2 text-cream hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cream rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next image"
        disabled={images.length <= 1}
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image content area */}
      <div className="relative z-10 flex items-center justify-center mx-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="rounded-lg max-h-[80vh] max-w-[90vw] object-contain"
        />

        {/* Image counter and caption */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-navy/70 text-cream px-4 py-2 rounded-full text-sm whitespace-nowrap">
          {currentIndex + 1} / {images.length} &mdash; {currentImage.alt}
        </div>
      </div>
    </div>
  );
}

// Gallery Image Card Component
interface GalleryCardProps {
  image: GalleryImage;
  onClick: () => void;
}

function GalleryCard({ image, onClick }: GalleryCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 transition-all hover:shadow-lg"
      aria-label={`View ${image.alt}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white bg-coral/90 px-4 py-2 rounded-lg text-sm font-medium">
          View Image
        </span>
      </div>
    </button>
  );
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  // Open lightbox with specific image
  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  }, []);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  // Navigate to previous image
  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  }, [filteredImages.length]);

  // Navigate to next image
  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  }, [filteredImages.length]);

  // Reset lightbox index when category changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setLightboxOpen(false);
  }, [selectedCategory]);

  return (
    <>
      <Header />

      <main className="animate-fade-in">
        <Hero
          title="Photo Gallery"
          subtitle="Take a tour of Sunrise Summit"
          imageSrc="/images/deck-adirondack-chairs-starry-sky.jpeg"
        />

        <Section variant="cream">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 ${
                    selectedCategory === category
                      ? 'bg-coral text-white'
                      : 'bg-white text-navy hover:bg-sand'
                  }`}
                  aria-pressed={selectedCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <GalleryCard
                key={image.id}
                image={image}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>

          {/* Empty state */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-mountain text-lg">No images found in this category.</p>
            </div>
          )}
        </Section>
      </main>

      <Footer />

      {/* Lightbox */}
      <Lightbox
        images={filteredImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </>
  );
}
