import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "@/components/shared/Logo";
import {
  ROUTES,
  CONTACT_INFO,
  SITE_TAGLINE,
  SITE_NAME,
  SOCIAL_LINKS,
} from "@/lib/constants";

import {
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10">

      <Container>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-4 space-y-5">
            <Logo />

            <p className="text-gray-600 leading-relaxed max-w-sm">
              {SITE_TAGLINE}. Crafted with care to bring purity, aroma, and
              authentic taste to your everyday life.
            </p>

            {/* Social */}
            <div className="flex gap-4 pt-2">
              <a
                href={SOCIAL_LINKS.instagram}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition"
              >
                <Instagram className="w-5 h-5 text-gray-600" />
              </a>

              <a
                href={SOCIAL_LINKS.facebook}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition"
              >
                <Facebook className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-lg font-semibold mb-5 text-gray-900">
              Explore
            </h4>

            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href={ROUTES.HOME} className="hover:text-primary transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href={ROUTES.SHOP} className="hover:text-primary transition">
                  Shop Ghee
                </Link>
              </li>

              <li>
                <Link href={ROUTES.ABOUT} className="hover:text-primary transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href={ROUTES.PROCESS} className="hover:text-primary transition">
                  Our Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-lg font-semibold mb-5 text-gray-900">
              Support
            </h4>

            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href={ROUTES.FAQ} className="hover:text-primary transition">
                  FAQs
                </Link>
              </li>

              <li>
                <Link href={ROUTES.SHIPPING} className="hover:text-primary transition">
                  Shipping & Returns
                </Link>
              </li>

              <li>
                <Link href={ROUTES.TERMS} className="hover:text-primary transition">
                  Terms
                </Link>
              </li>

              <li>
                <Link href={ROUTES.PRIVACY} className="hover:text-primary transition">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-heading text-lg font-semibold mb-5 text-gray-900">
              Contact
            </h4>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-gray-400" />
                <span>{CONTACT_INFO.address}</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary">
                  {CONTACT_INFO.displayPhone || CONTACT_INFO.phone}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {year} {SITE_NAME}. All rights reserved.</p>

          <p className="flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> in India
          </p>
        </div>

      </Container>
    </footer>
  );
};