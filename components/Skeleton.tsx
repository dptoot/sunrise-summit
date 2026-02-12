interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

export default function Skeleton({
  className = '',
  variant = 'rectangular',
  width,
  height,
}: SkeletonProps) {
  const baseClasses = 'skeleton';

  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
      aria-hidden="true"
      role="presentation"
    />
  );
}

// Pre-built skeleton variants for common use cases
export function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl border border-sand p-6 space-y-4">
      <Skeleton variant="rectangular" height={160} className="w-full" />
      <Skeleton variant="text" height={24} className="w-3/4" />
      <Skeleton variant="text" height={16} className="w-full" />
      <Skeleton variant="text" height={16} className="w-5/6" />
    </div>
  );
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          height={16}
          className={i === lines - 1 ? 'w-4/5' : 'w-full'}
        />
      ))}
    </div>
  );
}

export function SkeletonImage({ aspectRatio = 'video' }: { aspectRatio?: 'video' | 'square' }) {
  const aspectClass = aspectRatio === 'video' ? 'aspect-video' : 'aspect-square';
  return <Skeleton variant="rectangular" className={`w-full ${aspectClass}`} />;
}
