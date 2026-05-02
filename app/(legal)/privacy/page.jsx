import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/shared/SEOHead";

export default function PrivacyPage() {
  return (
    <>
      <SEOHead title="Privacy Policy" />

      <div className="pt-24 pb-16 bg-background">
        <Container className="max-w-3xl">

          <h1 className="text-4xl font-heading mb-8">
            Privacy Policy
          </h1>

          <div className="prose max-w-none text-gray-700">

            <p className="text-lg text-gray-600 mb-8">
              At PasuVanam, we respect your privacy and are committed to protecting your personal information.
            </p>

            {/* Info Collection */}
            <h2>Information We Collect</h2>
            <p>
              We may collect personal information that you provide directly to us when you use our website or contact us.
            </p>

            <ul>
              <li>Name and contact details (email, phone number)</li>
              <li>Shipping and billing address</li>
              <li>Order and transaction details</li>
              <li>Any information you provide through forms or communication</li>
            </ul>

            {/* Usage */}
            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>

            <ul>
              <li>Process and deliver your orders</li>
              <li>Provide customer support</li>
              <li>Improve our products and services</li>
              <li>Send important updates related to your orders</li>
            </ul>

            {/* Security */}
            <h2>Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access, misuse, or disclosure.
              However, no method of transmission over the internet is completely secure.
            </p>

            {/* Third Party */}
            <h2>Third-Party Services</h2>
            <p>
              We may use trusted third-party services for payment processing and analytics. These services have their own privacy policies.
            </p>

            {/* Cookies */}
            <h2>Cookies</h2>
            <p>
              Our website may use cookies to enhance user experience and analyze website traffic. You can choose to disable cookies through your browser settings.
            </p>

            {/* Updates */}
            <h2>Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
            </p>

            {/* Contact */}
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>

            <p>
              <strong>Email:</strong> hello@pasuvanam.in <br />
              <strong>Phone:</strong> +91 98765 43210
            </p>

          </div>
        </Container>
      </div>
    </>
  );
}