import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { ROUTES } from "@/lib/constants";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const HeroSection = () => {
  const { brand, hero } = SITE_CONFIG;

  return (
    <section className="relative pt-32 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-background">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              {hero.badge}
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-gray-900 mb-6 leading-tight">
              {brand.tagline.split(",")[0]},
              <br />
              <span className="text-secondary">
                {brand.tagline.split(",")[1]}
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              {brand.subTagline}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={ROUTES.SHOP}>
                <Button className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white shadow-md">
                  {hero.ctaPrimary}
                </Button>
              </Link>

              <Link href={ROUTES.ABOUT}>
                <Button
                  variant="outline"
                  className="h-12 px-8 rounded-full border-primary text-primary hover:bg-primary/10"
                >
                  {hero.ctaSecondary}
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-10 flex items-center gap-4 text-sm text-gray-500">
              {/* Customer Images */}
              <div className="flex -space-x-3">
                {[
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/68.jpg",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm"
                  >
                    <img
                      src={src}
                      alt={`customer-${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Text */}
              <p className="font-medium text-gray-600">{hero.stats}</p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={hero.image}
              alt="A2 Milk"
              fill
              className="object-cover"
              priority
            />

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-lg border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 text-secondary rounded-full flex items-center justify-center font-bold">
                  {hero.floatingCard.label}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {hero.floatingCard.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {hero.floatingCard.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
