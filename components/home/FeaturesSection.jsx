import { Container } from "@/components/layout/Container";
import { TrustBadges } from "@/components/shared/TrustBadges";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-white">
      <Container>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium mb-4">
            Our Promise
          </span>

          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Why Choose {SITE_CONFIG.brand.name} Ghee?
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            We focus on purity, taste, and trust — delivering ghee that brings back
            the richness of tradition while meeting modern quality standards.
          </p>
        </div>

        {/* Trust Badges */}
        <TrustBadges />

      </Container>
    </section>
  );
};