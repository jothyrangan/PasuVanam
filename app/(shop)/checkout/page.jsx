"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/shared/SEOHead";
import { AddressForm } from "@/components/checkout/AddressForm";
import { DeliverySlots } from "@/components/checkout/DeliverySlots";
import { PaymentOptions } from "@/components/checkout/PaymentOptions";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { ROUTES } from "@/lib/constants";

export default function CheckoutPage() {
    const { items } = useCart();
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Redirect to cart if empty
        if (items.length === 0) {
            router.push(ROUTES.CART);
        }
    }, [items, router]);

    // Prevent hydration mismatch
    if (!mounted || items.length === 0) return null;

    return (
        <>
            <SEOHead title="Checkout - Secure Payment" />
            <div className="pt-24 pb-20 bg-gray-50/30">
                <Container>
                    <div className="mb-8 border-b border-gray-200 pb-6">
                        <h1 className="text-3xl font-heading text-foreground">Secure Checkout</h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-12">
                                <AddressForm />
                                <DeliverySlots />
                                <PaymentOptions />
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <OrderSummary />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}
