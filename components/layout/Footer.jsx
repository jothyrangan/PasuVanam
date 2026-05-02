import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "@/components/shared/Logo";
import { ROUTES, CONTACT_INFO, SITE_TAGLINE } from "@/lib/constants";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary/20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
                    {/* Brand Col */}
                    <div className="lg:col-span-4 flex flex-col space-y-4">
                        <Logo white className="mb-4" />
                        <p className="text-primary-foreground/80 max-w-sm leading-relaxed">
                            {SITE_TAGLINE}. We bring the goodness of traditional Indian dairy straight from our farm to your home.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="font-heading text-xl font-semibold mb-6">Explore</h4>
                        <ul className="space-y-3">
                            <li><Link href={ROUTES.HOME} className="text-primary-foreground/80 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href={ROUTES.SHOP} className="text-primary-foreground/80 hover:text-white transition-colors">Shop Products</Link></li>
                            <li><Link href={ROUTES.ABOUT} className="text-primary-foreground/80 hover:text-white transition-colors">Our Farm</Link></li>
                            <li><Link href={ROUTES.WHY_MAAYAD} className="text-primary-foreground/80 hover:text-white transition-colors">Why A2 Milk?</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="lg:col-span-2">
                        <h4 className="font-heading text-xl font-semibold mb-6">Support</h4>
                        <ul className="space-y-3">
                            <li><Link href={ROUTES.FAQ} className="text-primary-foreground/80 hover:text-white transition-colors">FAQs</Link></li>
                            <li><Link href={ROUTES.SHIPPING} className="text-primary-foreground/80 hover:text-white transition-colors">Shipping & Returns</Link></li>
                            <li><Link href={ROUTES.TERMS} className="text-primary-foreground/80 hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href={ROUTES.PRIVACY} className="text-primary-foreground/80 hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-4">
                        <h4 className="font-heading text-xl font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 mt-1 text-white/70 shrink-0" />
                                <span className="text-primary-foreground/80 leading-relaxed">{CONTACT_INFO.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-white/70 shrink-0" />
                                <a href={`tel:${CONTACT_INFO.phone}`} className="text-primary-foreground/80 hover:text-white transition-colors">
                                    {CONTACT_INFO.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-white/70 shrink-0" />
                                <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary-foreground/80 hover:text-white transition-colors">
                                    {CONTACT_INFO.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/20 text-center text-primary-foreground/60 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© {year} Maayad Dairy. All rights reserved.</p>
                    <p>Made with ❤️ in India</p>
                </div>
            </Container>
        </footer>
    );
};
