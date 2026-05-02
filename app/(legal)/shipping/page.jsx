import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/shared/SEOHead";

export default function ShippingPage() {
    return (
        <>
            <SEOHead title="Shipping & Returns" />
            <div className="pt-24 pb-16">
                <Container className="max-w-3xl">
                    <h1 className="text-4xl font-heading mb-8">Shipping & Returns</h1>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">Delivery Policy</h2>
                            <div className="prose prose-orange max-w-none text-gray-700">
                                <p>
                                    <strong>Fresh Milk Delivery:</strong> Our A2 Gir Cow Milk is delivered fresh every morning between 5:00 AM and 7:30 AM. To ensure next-day delivery, all new subscriptions or one-time orders must be placed before 8:00 PM.
                                </p>
                                <p>
                                    <strong>Other Products (Ghee, Paneer):</strong> Non-perishable items like Ghee can be delivered either during the morning slot or shipped via standard courier delivery depending on your location and preference.
                                </p>
                                <p>
                                    <strong>Delivery Areas:</strong> We currently serve all major pin codes across Jaipur city. If your area is not serviceable, you will be notified during checkout.
                                </p>
                                <p>
                                    <strong>Delivery Charges:</strong> We offer FREE morning delivery for all active milk subscriptions. For one-time orders below ₹500, a nominal delivery fee of ₹50 is charged.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">Return & Refund Policy</h2>
                            <div className="prose prose-orange max-w-none text-gray-700">
                                <p>
                                    Due to the highly perishable nature of raw A2 milk and dairy products, we adhere to a strict no-return policy once the delivery is completed.
                                </p>
                                <p>
                                    <strong>Quality Issues:</strong> If you find the milk spoilt or packaging damaged upon delivery:
                                </p>
                                <ul className="list-disc pl-5">
                                    <li>Immediately inform our customer support via WhatsApp or Phone within 2-3 hours of delivery.</li>
                                    <li>Do not consume the product. Keep it refrigerated until advised otherwise.</li>
                                    <li>Upon verification, we will issue a full replacement in the next delivery cycle or process a refund to your original payment method.</li>
                                </ul>
                                <p>
                                    <strong>Subscription Cancellations:</strong> You can pause or cancel your subscription at any time using your dashboard. Unutilized wallet balances will be refunded to your bank account within 5-7 working days upon request.
                                </p>
                            </div>
                        </section>
                    </div>
                </Container>
            </div>
        </>
    );
}
