import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/shared/SEOHead";
import { TrustBadges } from "@/components/shared/TrustBadges";

export default function WhyMaayadPage() {
    return (
        <>
            <SEOHead title="Why Maayad A2 Milk?" />
            <div className="pt-24 pb-16">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-heading mb-6">The A2 Difference</h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Not all milk is created equal. Discover why A2 milk from traditional Gir cows is the healthier choice for your family.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold">What is A2 Milk?</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Milk contains proteins, the most vital ones being Casein and Whey. Beta-casein constitutes about 30% of the total protein in cow&apos;s milk. There are two main variants of beta-casein: A1 and A2.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Historically, all cows originated producing only A2 milk. Regular milk today mostly contains A1 beta-casein, which some studies suggest can cause digestive discomfort.
                            </p>
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <h3 className="font-semibold text-green-900 mb-2">Our Promise</h3>
                                <p className="text-green-800 text-sm leading-relaxed">
                                    Maayad Dairy exclusively rears pure Indian origin Gir cows that naturally produce only 100% pure A2 beta-casein milk, making it naturally easier to digest.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-xl font-semibold mb-6 text-center">A1 vs A2 Milk</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="font-medium text-gray-500 line-through">A1 Regular Milk</span>
                                    <span className="font-semibold text-primary">A2 Maayad Milk</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="text-gray-500">Cross-breed cows (HF, Jersey)</span>
                                    <span className="font-medium text-gray-900">Pure Indian desit cows (Gir)</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="text-gray-500">May cause bloating</span>
                                    <span className="font-medium text-gray-900">Easy to digest</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="text-gray-500">Commercial farm reared</span>
                                    <span className="font-medium text-gray-900">Free-grazing environments</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <TrustBadges />
                </Container>
            </div>
        </>
    );
}
