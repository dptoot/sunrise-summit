interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'cream' | 'white';
}

export default function Section({
  children,
  className = '',
  variant = 'white',
}: SectionProps) {
  const bgColor = variant === 'cream' ? 'bg-cream' : 'bg-white';

  return (
    <section className={`py-16 md:py-24 ${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
