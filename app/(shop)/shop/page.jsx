import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/shared/SEOHead";
import { ProductGrid } from "@/components/product/ProductGrid";
import { PRODUCTS } from "@/lib/data";

export default function ShopPage() {
    return (
        <>
            <SEOHead title="Shop Premium A2 Dairy" />
            <div className="pt-24 pb-20">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl font-heading mb-4 text-foreground">
                                Our Products
                            </h1>
                            <p className="text-lg text-gray-600">
                                Pure, traditional, and lab-tested A2 dairy products delivered fresh to your doorstep.
                            </p>
                        </div>

                        {/* Simple Filter Placeholder */}
                        {/* <div className="flex gap-2">
                            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-white text-sm font-medium cursor-pointer">
                                All
                            </span>
                            <span className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 cursor-pointer transition-colors">
                                Milk
                            </span>
                            <span className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 cursor-pointer transition-colors">
                                Ghee
                            </span>
                        </div> */}
                    </div>

                    <ProductGrid products={PRODUCTS} />
                </Container>
            </div>
        </>
    );
}
