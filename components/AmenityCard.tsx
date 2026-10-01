import Image from 'next/image';

interface AmenityCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function AmenityCard({ imageSrc, title, description }: AmenityCardProps) {
  return (
    <div className="relative min-h-72 rounded-xl overflow-hidden group flex items-end">
      <Image
        src={imageSrc}
        alt=""
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />
      <div className="relative z-10 p-6">
        <h3 className="text-lg font-semibold text-cream mb-2">{title}</h3>
        <p className="text-cream/90 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
