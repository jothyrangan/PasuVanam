import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/shared/SEOHead";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <SEOHead title="About PasuVanam" />

      <div className="pt-24 pb-16 bg-background">
        <Container>

          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading mb-4">
              Our Story
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Rooted in tradition and crafted with care, PasuVanam brings you
              pure ghee made the way it was meant to be.
            </p>
          </div>

          {/* Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                PasuVanam was created with a simple purpose — to bring back the
                richness, aroma, and purity of traditional ghee into modern
                homes.
              </p>

              <p>
                In a world filled with processed products, we focus on keeping
                things natural and honest. Every batch is carefully prepared to
                retain its authentic taste and nutritional value.
              </p>

              <p>
                Our approach is rooted in patience, quality, and respect for
                traditional methods that have been followed for generations.
              </p>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://i.pinimg.com/736x/36/13/af/3613af4cdf77e823a586bdc63d9fde39.jpg"
                alt="Traditional Ghee Preparation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="https://i.pinimg.com/736x/d1/5d/ce/d15dce1a667efbfa2a9d6c2b6e2a446a.jpg"
                alt="Pure Ghee"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed order-1 md:order-2">
              <h2 className="text-3xl font-heading text-foreground">
                Our Philosophy
              </h2>

              <p>
                We believe that good food starts with purity. That’s why our
                ghee is made with attention to detail, preserving its natural
                aroma, texture, and richness.
              </p>

              <p>
                Every jar reflects our commitment to quality — no shortcuts, no
                unnecessary processing, just clean and authentic ghee you can
                trust for your family.
              </p>

              <p>
                Whether it’s for daily cooking or traditional rituals,
                PasuVanam ghee is made to be a part of your everyday life.
              </p>
            </div>
          </div>

        </Container>
      </div>
    </>
  );
}