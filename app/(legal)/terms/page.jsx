import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/shared/SEOHead";

export default function TermsPage() {
  return (
    <>
      <SEOHead title="Terms of Service" />

      <div className="pt-24 pb-16 bg-background">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-heading mb-8">Terms of Service</h1>

          <div className="prose max-w-none text-gray-700">
            <p className="text-lg text-gray-600 mb-8">
              Last updated: {new Date().getFullYear()}
            </p>

            {/* 1 */}
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the PasuVanam website, you agree to be
              bound by these Terms of Service. If you do not agree, please do
              not use our website or services.
            </p>

            {/* 2 */}
            <h2>2. Products & Orders</h2>
            <p>
              We offer ghee products for purchase through our website. All
              orders are subject to availability and confirmation.
            </p>

            <ul>
              <li>
                Prices are listed in INR and may change without prior notice
              </li>
              <li>
                We reserve the right to cancel or refuse any order if necessary
              </li>
              <li>Product images are for representation purposes only</li>
            </ul>

            {/* 3 */}
            <h2>3. Shipping & Delivery</h2>
            <p>
              Orders are processed and shipped as per our shipping policy.
              Delivery timelines may vary depending on your location and
              external factors.
            </p>

            {/* 4 */}
            <h2>4. Returns & Refunds</h2>
            <p>
              Due to the consumable nature of our products, returns are not
              accepted once delivered. However, in case of damaged or incorrect
              items, please contact us within 24 hours for resolution.
            </p>

            {/* 5 */}
            <h2>5. Use of Website</h2>
            <p>
              You agree not to misuse our website or engage in activities that
              may harm the platform or other users.
            </p>

            {/* 6 */}
            <h2>6. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, and branding,
              is the property of PasuVanam and may not be used without
              permission.
            </p>

            {/* 7 */}
            <h2>7. Limitation of Liability</h2>
            <p>
              We are not liable for any indirect or incidental damages arising
              from the use of our products or website.
            </p>

            {/* 8 */}
            <h2>8. Changes to Terms</h2>
            <p>
              We may update these Terms of Service at any time. Changes will be
              reflected on this page.
            </p>

            {/* 9 */}
            <h2>9. Contact</h2>
            <p>
              If you have any questions regarding these terms, please contact us
              at:
            </p>

            <p>
              <strong>Email:</strong> hello@pasuvanam.in <br />
              <strong>Phone:</strong> +91 97889 09837
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
