import { Container } from "@/components/layout/Container";
import { Flame, Droplet, Leaf, PackageCheck } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <Droplet className="w-8 h-8 text-primary" />,
      title: "Carefully Selected Ingredients",
      description:
        "We begin with high-quality ingredients sourced with care to ensure purity and consistency.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-secondary" />,
      title: "Traditional Preparation",
      description:
        "Prepared using time-honored techniques that preserve natural aroma, texture, and nutrients.",
    },
    {
      icon: <Flame className="w-8 h-8 text-primary" />,
      title: "Slow Cooking Process",
      description:
        "Gently simmered to achieve a rich golden color and deep flavor without compromising quality.",
    },
    {
      icon: <PackageCheck className="w-8 h-8 text-secondary" />,
      title: "Sealed with Freshness",
      description:
        "Hygienically packed to lock in purity, ensuring every jar reaches you in perfect condition.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-white relative overflow-hidden">

      {/* Soft background highlight */}
      <div className="absolute top-0 left-0 w-full h-1/2" />

      <Container className="relative">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium mb-4">
            Our Process
          </span>

          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Crafted with Care, Step by Step
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            From preparation to packaging, every step is handled with attention
            and tradition to deliver ghee that is rich, pure, and full of flavor.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">

          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-24 right-24 h-[2px] bg-primary/10 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">

              {/* Circle */}
              <div className="w-24 h-24 rounded-full bg-white border border-gray-100 shadow-soft flex items-center justify-center mb-6 relative z-10 group-hover:shadow-lg transition">

                {step.icon}

                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm shadow">
                  {index + 1}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};