'use client';

import { useState, useEffect, useCallback } from 'react';
import { Header, Footer, Hero, Section } from '@/components';

// Gallery image type
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'Exterior' | 'Living Spaces' | 'Bedrooms' | 'Views' | 'Amenities';
}

// Placeholder gallery data with categories
const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/gallery/exterior-1.jpg', alt: 'Cabin exterior front view', category: 'Exterior' },
  { id: 2, src: '/images/gallery/exterior-2.jpg', alt: 'Cabin exterior with mountain backdrop', category: 'Exterior' },
  { id: 3, src: '/images/gallery/living-1.jpg', alt: 'Open living room with fireplace', category: 'Living Spaces' },
  { id: 4, src: '/images/gallery/living-2.jpg', alt: 'Kitchen and dining area', category: 'Living Spaces' },
  { id: 5, src: '/images/gallery/living-3.jpg', alt: 'Cozy seating area', category: 'Living Spaces' },
  { id: 6, src: '/images/gallery/bedroom-1.jpg', alt: 'Master bedroom with king bed', category: 'Bedrooms' },
  { id: 7, src: '/images/gallery/bedroom-2.jpg', alt: 'Guest bedroom with queen bed', category: 'Bedrooms' },
  { id: 8, src: '/images/gallery/bedroom-3.jpg', alt: 'Bunk room for kids', category: 'Bedrooms' },
  { id: 9, src: '/images/gallery/view-1.jpg', alt: 'Sunrise over the mountains', category: 'Views' },
  { id: 10, src: '/images/gallery/view-2.jpg', alt: 'Deck view at sunset', category: 'Views' },
  { id: 11, src: '/images/gallery/view-3.jpg', alt: 'Winter wonderland scenery', category: 'Views' },
  { id: 12, src: '/images/gallery/amenity-1.jpg', alt: 'Hot tub on the deck', category: 'Amenities' },
  { id: 13, src: '/images/gallery/amenity-2.jpg', alt: 'Game room with pool table', category: 'Amenities' },
  { id: 14, src: '/images/gallery/amenity-3.jpg', alt: 'Fire pit area', category: 'Amenities' },
  { id: 15, src: '/images/gallery/exterior-3.jpg', alt: 'Driveway and parking area', category: 'Exterior' },
];

const categories = ['All', 'Exterior', 'Living Spaces', 'Bedrooms', 'Views', 'Amenities'] as const;
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
      <div className="relative z-10 max-w-4xl max-h-[80vh] mx-4">
        {/* Placeholder box representing the image */}
        <div className="aspect-video bg-mountain/30 rounded-lg flex flex-col items-center justify-center min-w-[300px] sm:min-w-[500px] md:min-w-[700px]">
          <span className="text-cream text-xl font-semibold mb-2">{currentImage.category}</span>
          <span className="text-cream/80 text-sm">{currentImage.alt}</span>
        </div>

        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-navy/70 text-cream px-4 py-2 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
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
      className="group relative aspect-video bg-mountain/20 rounded-lg overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 transition-all hover:shadow-lg"
      aria-label={`View ${image.alt}`}
    >
      {/* Placeholder content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        <span className="text-navy font-semibold text-lg mb-1">{image.category}</span>
        <span className="text-mountain text-sm">{image.alt}</span>
      </div>

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
          imageSrc="/images/hero.png"
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
