interface AmenityCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function AmenityCard({ icon, title, description }: AmenityCardProps) {
  return (
    <div className="bg-mountain/10 rounded-xl p-6 hover:bg-mountain/20 transition-colors duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-navy mb-2">{title}</h3>
      <p className="text-mountain text-sm leading-relaxed">{description}</p>
    </div>
  );
}
