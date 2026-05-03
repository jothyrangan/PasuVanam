import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/data";
import { ROUTES } from "@/lib/constants";

export const ProductsPreview = () => {
    // Show first 3 products for preview
    const previewProducts = PRODUCTS.slice(0, 3);

    return (
        <section className="py-24 bg-orange-50/50">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
                            Our Premium Products
                        </h2>
                        <p className="text-lg text-gray-600">
                            Handcrafted in small batches to ensure the highest quality and nutritional value.
                        </p>
                    </div>
                    <Link href={ROUTES.SHOP}>
                        <Button variant="outline" className="rounded-full">
                            View All Products
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {previewProducts.map((product) => (
                        <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-heading font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">{product.unit}</p>
                                    </div>
                                    <span className="font-semibold text-lg text-primary">₹{product.price}</span>
                                </div>
                                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                                    {product.description}
                                </p>
                                <Link href={`${ROUTES.PRODUCT}/${product.slug}`}>
                                    <Button className="w-full rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                                        View Details
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
