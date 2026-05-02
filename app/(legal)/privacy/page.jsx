import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/shared/SEOHead";

export default function PrivacyPage() {
    return (
        <>
            <SEOHead title="Privacy Policy" />
            <div className="pt-24 pb-16">
                <Container className="max-w-3xl">
                    <h1 className="text-4xl font-heading mb-8">Privacy Policy</h1>

                    <div className="prose prose-orange max-w-none text-gray-700">
                        <p className="lead text-xl text-gray-600 mb-8">
                            At Maayad Dairy, we respect your privacy and are committed to protecting it.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
                        <p className="mb-4">
                            We collect information that you manually provide to us when creating an account, subscribing to our services, or contacting us. This includes:
                        </p>
                        <ul className="list-disc pl-5 mb-6 space-y-2">
                            <li>Name and contact information (email, phone number)</li>
                            <li>Delivery address and location details</li>
                            <li>Payment and billing information (processed securely through third-party gateways)</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
                        <p className="mb-4">We use the collected information for various purposes:</p>
                        <ul className="list-disc pl-5 mb-6 space-y-2">
                            <li>To provide and maintain our morning delivery service</li>
                            <li>To notify you about changes to our products or delays</li>
                            <li>To provide customer support</li>
                            <li>To process payments and manage your subscription ledger</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
                        <p className="mb-6">
                            The security of your data is important to us. We use commercially acceptable means to protect your Personal Information. However, remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.
                        </p>
                    </div>
                </Container>
            </div>
        </>
    );
}
