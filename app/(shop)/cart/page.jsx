    "use client";

    import { useCart } from "@/hooks/useCart";
    import { Container } from "@/components/layout/Container";
    import { SEOHead } from "@/components/shared/SEOHead";
    import { CartItem } from "@/components/cart/CartItem";
    import { CartSummary } from "@/components/cart/CartSummary";
    import { EmptyCart } from "@/components/cart/EmptyCart";

    export default function CartPage() {
        const { items } = useCart();
        const hasItems = items.length > 0;

        return (
            <>
                <SEOHead title="Your Shopping Cart" />
                <div className="pt-24 pb-20 bg-gray-50/30 min-h-[60vh]">
                    <Container>
                        <div className="mb-10 lg:mb-12 border-b border-gray-200 pb-6">
                            <h1 className="text-3xl md:text-4xl font-heading text-foreground">
                                Shopping Cart
                            </h1>
                            {hasItems && (
                                <p className="text-gray-500 mt-2 font-medium">
                                    You have {items.reduce((total, item) => total + item.quantity, 0)} items in your cart
                                </p>
                            )}
                        </div>

                        {!hasItems ? (
                            <div className="max-w-2xl mx-auto">
                                <EmptyCart />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                                <div className="lg:col-span-8 space-y-2">
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 divide-y divide-gray-100">
                                        {items.map((item) => (
                                            <CartItem key={item.product.id} item={item} />
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:col-span-4 lg:sticky lg:top-24">
                                    <CartSummary />
                                </div>
                            </div>
                        )}
                    </Container>
                </div>
            </>
        );
    }
