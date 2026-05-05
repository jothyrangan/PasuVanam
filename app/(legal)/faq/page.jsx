import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/shared/SEOHead";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export default function FAQPage() {
  const faqs = [
    {
      question: "Is your ghee completely pure?",
      answer:
        "Yes, our ghee is made with a strong focus on purity and quality. We do not use any additives, preservatives, or artificial processing.",
    },
    {
      question: "What makes your ghee different?",
      answer:
        "Our ghee is prepared using traditional methods that preserve its natural aroma, texture, and taste. Every batch is crafted carefully to ensure consistency and quality.",
    },
    {
      question: "Can I use this ghee for daily cooking?",
      answer:
        "Absolutely. Our ghee is perfect for everyday cooking, frying, and even traditional uses like pooja. It enhances flavor while maintaining its natural richness.",
    },
    {
      question: "How should I store ghee?",
      answer:
        "Store it in a cool, dry place away from direct sunlight. Always use a clean, dry spoon to maintain freshness and shelf life.",
    },
    {
      question: "Does ghee need refrigeration?",
      answer:
        "No, ghee does not require refrigeration. It naturally has a long shelf life when stored properly.",
    },
    {
      question: "Is your ghee suitable for children and elders?",
      answer:
        "Yes, ghee is widely used across all age groups. It is a part of traditional diets and can be included in daily meals in moderate quantities.",
    },
  ];

  return (
    <>
      <SEOHead title="FAQs" />

      <div className="pt-24 pb-16 bg-transparent">
        <Container className="max-w-3xl">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-heading mb-4">
              Frequently Asked Questions
            </h1>

            <p className="text-gray-600 text-lg">
              Everything you need to know about our ghee.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-soft hover:shadow-md transition"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none p-5 text-gray-900 font-medium group-open:bg-primary/5 transition">
                  <span className="text-base md:text-lg">{faq.question}</span>

                  <span className="transition-transform duration-300">
                    <Plus className="w-5 h-5 text-gray-400 group-open:hidden" />
                    <Minus className="w-5 h-5 text-gray-400 hidden group-open:block" />
                  </span>
                </summary>

                <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100">
                  <p className="mt-4">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">
              Still have questions?
            </h3>

            <p className="text-gray-600 mb-6">
              Our team is here to help you with anything you need.
            </p>

            <Link
              href={ROUTES.CONTACT}
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-white shadow-soft hover:bg-primary/90 transition"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
