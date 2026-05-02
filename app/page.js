import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductsPreview />
      <HowItWorks />
      <Testimonials />
    </>
  );
}
