import { Inter, Yatra_One } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const yatraOne = Yatra_One({
  weight: "400",
  subsets: ["devanagari", "latin"],
  variable: "--font-yatra"
});

export const metadata = {
  title: "PasuVanam - Premium Ghee",
  description: "Experience the rich, authentic taste of PasuVanam Ghee.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${yatraOne.variable} font-sans antialiased text-foreground bg-background min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
