import { ShieldCheck, Leaf, Award, Sparkles } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: ShieldCheck,
      title: "Pure & Clean",
      description: "Free from additives, crafted with complete care and hygiene.",
    },
    {
      icon: Leaf,
      title: "Naturally Made",
      description: "Prepared using time-honored methods for authentic taste.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Carefully processed to deliver rich aroma and texture.",
    },
    {
      icon: Sparkles,
      title: "Everyday Goodness",
      description: "Perfect for cooking, rituals, and daily nourishment.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
      {badges.map((badge, idx) => {
        const Icon = badge.icon;

        return (
          <div
            key={idx}
            className="group relative p-6 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition">
              <Icon className="h-5 w-5" />
            </div>

            {/* Title */}
            <h4 className="font-semibold text-gray-900 text-base mb-1">
              {badge.title}
            </h4>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {badge.description}
            </p>

            {/* Subtle Glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-primary/5 to-secondary/5" />
          </div>
        );
      })}
    </div>
  );
};