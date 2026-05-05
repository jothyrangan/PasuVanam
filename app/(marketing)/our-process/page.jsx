import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/shared/SEOHead";
import { TrustBadges } from "@/components/shared/TrustBadges";
import Image from "next/image";

export default function OurProcessPage() {
  return (
    <>
      <SEOHead title="Our Process" />

      <div className="pt-24 pb-16 bg-transparent">
        <Container>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-heading mb-6">
              Our Process
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Every jar of our ghee is crafted with care, patience, and
              attention to detail — preserving purity, aroma, and traditional
              goodness.
            </p>
          </div>

          {/* Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Carefully Crafted</h2>

              <p className="text-gray-700 leading-relaxed">
                We follow a slow and mindful process to ensure that every batch
                of ghee maintains its natural richness and flavor.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Each step is carried out with precision — focusing on quality
                over quantity, so you receive ghee that is consistent and pure.
              </p>

              <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                <h3 className="font-semibold text-primary mb-2">
                  Our Commitment
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed">
                  No shortcuts, no unnecessary processing — just clean,
                  traditional preparation methods that preserve authenticity and
                  taste.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://i.pinimg.com/736x/36/13/af/3613af4cdf77e823a586bdc63d9fde39.jpg"
                alt="Ghee Preparation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="https://i.pinimg.com/736x/d1/5d/ce/d15dce1a667efbfa2a9d6c2b6e2a446a.jpg"
                alt="Pure Ghee"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl font-semibold">Purity in Every Step</h2>

              <p className="text-gray-700 leading-relaxed">
                From preparation to packaging, every stage is handled with care
                to maintain hygiene, quality, and consistency.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The result is a golden, aromatic ghee that fits perfectly into
                your daily cooking and traditional rituals.
              </p>

              <div className="bg-secondary/10 p-6 rounded-xl border border-secondary/20">
                <h3 className="font-semibold text-secondary mb-2">
                  What Makes Us Different
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Attention to detail, consistency in quality, and a deep
                  respect for traditional preparation methods.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Section */}
          <TrustBadges />
        </Container>
      </div>
    </>
  );
}
