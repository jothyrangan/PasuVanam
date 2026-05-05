"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { ROUTES } from "@/lib/constants";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const HeroSection = () => {
  const { brand, hero } = SITE_CONFIG;

  return (
    <section className="relative pt-12 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-transparent">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="max-w-2xl order-2 lg:order-1">
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
            <div className="flex flex-row sm:flex-row gap-4">
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
          <div className="hidden md:block relative h-[200px] md:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-xl order-1 lg:order-2">
            <video
              src="/ghee-dipping.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Floating Card */}
            {/* <div className="absolute bottom-6 left-6">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative bg-gradient-to-br from-yellow-50 to-orange-100 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-yellow-200 overflow-hidden"
              >
                <div className="absolute inset-0 bg-yellow-300/10 blur-2xl animate-pulse" />

                <div className="absolute -left-10 top-0 w-20 h-full bg-white/40 rotate-12 blur-md animate-[shine_3s_infinite]" />

                <div className="relative flex items-center gap-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-14 h-14 bg-yellow-200 text-yellow-800 rounded-full flex items-center justify-center shadow-inner"
                  >
                    <Sparkles className="w-6 h-6" />
                  </motion.div>

                  <div>
                    <p className="text-sm font-semibold text-yellow-900 tracking-wide">
                      100% Pure Ghee
                    </p>
                    <p className="text-xs text-gray-600">
                      Traditionally Handcrafted
                    </p>
                  </div>
                </div>
              </motion.div>
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
};
