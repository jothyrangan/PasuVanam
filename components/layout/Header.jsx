"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Container } from "./Container";
import { ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";

const NAV_LINKS = [
  { name: "Home", href: ROUTES.HOME },
  { name: "Shop", href: ROUTES.SHOP },
  { name: "Our Farm", href: ROUTES.ABOUT },
  { name: "Process", href: ROUTES.PROCESS },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalItems = useCart((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  );

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Logo />
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href={ROUTES.CART}
              className="relative p-2 text-gray-700 hover:text-primary transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {console.log("Cart total items:", totalItems)}{" "}
              {/* Debug log for cart items */}
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            {/* <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white shadow-soft rounded-full px-6">
                            Subscribe
                        </Button> */}
          </div>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-background p-6 shadow-xl flex flex-col h-full animate-in slide-in-from-left">
            <div className="flex items-center justify-between mb-8">
              <Logo />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-gray-500 hover:bg-gray-100 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block py-3 text-lg font-medium border-b border-gray-100 ${
                      pathname === link.href ? "text-primary" : "text-gray-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            {/* <div className="pt-6 border-t border-gray-100 pb-safe">
              <Button className="w-full bg-primary hover:bg-primary/90 py-6 text-lg rounded-xl">
                Start Subscription
              </Button>
            </div> */}
          </div>
        </div>
      )}
    </header>
  );
};
