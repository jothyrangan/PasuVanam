import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/shared/SEOHead";

export default function ShippingPage() {
  return (
    <>
      <SEOHead title="Shipping & Returns" />

      <div className="pt-24 pb-16 bg-transparent">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-heading mb-8">Shipping & Returns</h1>

          <div className="space-y-12">
            {/* Shipping */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                Shipping Policy
              </h2>

              <div className="prose max-w-none text-gray-700">
                <p>We aim to deliver your order safely and on time.</p>

                <ul>
                  <li>
                    Orders are processed within <strong>24–48 hours</strong>{" "}
                    after confirmation.
                  </li>
                  <li>
                    Delivery timelines typically range between{" "}
                    <strong>2–5 business days</strong> depending on your
                    location.
                  </li>
                  <li>
                    We ship across major locations in India through trusted
                    courier partners.
                  </li>
                  <li>
                    Shipping charges (if applicable) will be calculated at
                    checkout.
                  </li>
                </ul>

                <p>
                  Once your order is shipped, you will receive tracking details
                  to monitor your delivery.
                </p>
              </div>
            </section>

            {/* Returns */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                Return & Refund Policy
              </h2>

              <div className="prose max-w-none text-gray-700">
                <p>
                  As ghee is a consumable product, we do not accept returns once
                  the product has been delivered.
                </p>

                <p>
                  However, if you receive a damaged or incorrect product, please
                  contact us within <strong>24 hours</strong> of delivery.
                </p>

                <ul>
                  <li>Share your order details and images of the issue</li>
                  <li>Our team will review and verify the concern</li>
                  <li>Eligible cases will receive a replacement or refund</li>
                </ul>

                <p>
                  Refunds, if approved, will be processed to your original
                  payment method within <strong>5–7 business days</strong>.
                </p>
              </div>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
}
