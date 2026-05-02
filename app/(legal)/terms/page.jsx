import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/shared/SEOHead";

export default function TermsPage() {
    return (
        <>
            <SEOHead title="Terms of Service" />
            <div className="pt-24 pb-16">
                <Container className="max-w-3xl">
                    <h1 className="text-4xl font-heading mb-8">Terms of Service</h1>

                    <div className="prose prose-orange max-w-none text-gray-700">
                        <p className="lead text-xl text-gray-600 mb-8">
                            Last updated: October 2023
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                        <p className="mb-6">
                            By accessing and using the Maayad Dairy website and our services, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Subscription & Delivery</h2>
                        <p className="mb-4">
                            We operate primarily on a subscription basis for our daily milk deliveries.
                        </p>
                        <ul className="list-disc pl-5 mb-6 space-y-2">
                            <li>Deliveries are made between 5:00 AM and 7:30 AM daily.</li>
                            <li>Subscription modifications (pause/resume) must be made before 8:00 PM for the next day&apos;s delivery.</li>
                            <li>We are not responsible for spoilage if the milk is left unattended for extended periods after delivery.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Quality & Source</h2>
                        <p className="mb-6">
                            Maayad Dairy guarantees that our products are sourced exclusively from our own farm of Gir cows. We do not use hormonal injections, antibiotics, or synthetic adulterants. Natural variations in milk thickness and color may occur depending on the cows&apos; diet and changing seasons.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Refunds and Returns</h2>
                        <p className="mb-6">
                            Due to the perishable nature of dairy products, we do not accept returns. If you receive a damaged product or have quality concerns, please contact our support team within 4 hours of delivery for a replacement or refund consideration.
                        </p>
                    </div>
                </Container>
            </div>
        </>
    );
}
