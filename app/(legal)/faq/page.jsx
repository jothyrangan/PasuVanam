import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/shared/SEOHead";
import { Plus, Minus } from "lucide-react";

export default function FAQPage() {
    const faqs = [
        {
            question: "What is A2 Milk and how is it different?",
            answer: "A2 milk is produced by traditional Indian cow breeds like the Gir cow. It contains only the A2 type of beta-casein protein, which is naturally easier to digest compared to the A1 protein found in milk from cross-bred foreign cows (like Holstein or Jersey)."
        },
        {
            question: "Is your milk raw or pasteurized?",
            answer: "We deliver raw, chilled milk straight from the farm to ensure all natural enzymes and nutrients remain intact. We highly recommend boiling the milk once before consumption."
        },
        {
            question: "How does the subscription work?",
            answer: "You can set up a daily, alternate day, or custom schedule subscription. You pay in advance into your Maayad Wallet, and the amount is deducted daily upon successful delivery. You can pause the subscription at any time from your account."
        },
        {
            question: "How do you make your Bilona Ghee?",
            answer: "Our ghee is made using the ancient Vedic 'Bilona' method. We first convert whole A2 milk into curd, then churn the curd using a wooden bilona (churner) to separate the makkhan (butter), which is then slowly heated over a cow-dung cake fire to produce pure, aromatic ghee."
        },
        {
            question: "Can I pause my milk delivery if I go out of town?",
            answer: "Yes, absolutely! You can pause your delivery via our app/website or by sending us a message on WhatsApp. Please ensure you notify us before 8 PM for changes to take effect the next morning."
        }
    ];

    return (
        <>
            <SEOHead title="Frequently Asked Questions" />
            <div className="pt-24 pb-16">
                <Container className="max-w-3xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-heading mb-4">Frequently Asked Questions</h1>
                        <p className="text-gray-600 text-lg">Everything you need to know about our products and services.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <details key={index} className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-gray-900 group-open:bg-orange-50/50 group-open:text-primary transition-colors">
                                    <span className="text-lg">{faq.question}</span>
                                    <span className="transition-transform duration-300">
                                        <Plus className="w-5 h-5 text-gray-400 group-open:hidden" />
                                        <Minus className="w-5 h-5 text-gray-400 hidden group-open:block" />
                                    </span>
                                </summary>
                                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                                    <p className="mt-4">{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>

                    <div className="mt-16 bg-orange-50/50 border border-orange-100 rounded-2xl p-8 text-center">
                        <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
                        <p className="text-gray-600 mb-6">Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-white shadow-soft transition-colors hover:bg-primary/90"
                        >
                            Get in Touch
                        </a>
                    </div>
                </Container>
            </div>
        </>
    );
}
