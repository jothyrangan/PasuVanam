"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib/constants";
import { ShieldCheck, Truck } from "lucide-react";

export const CartSummary = () => {
    const { totalPrice, totalItems } = useCart();
    const shippingCost = totalPrice > 500 ? 0 : 50;
    const orderTotal = totalPrice + shippingCost;

    if (totalItems === 0) return null;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full sticky top-24">
            <h3 className="text-xl font-semibold mb-6">Order Summary</h3>

            <div className="space-y-4 mb-6 text-gray-600">
                <div className="flex justify-between">
                    <span>Subtotal ({totalItems} items)</span>
                    <span className="font-medium text-gray-900">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                    <span>Delivery Charges</span>
                    {shippingCost === 0 ? (
                        <span className="text-green-600 font-medium tracking-wide">FREE</span>
                    ) : (
                        <span className="font-medium text-gray-900">₹{shippingCost}</span>
                    )}
                </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-8">
                <div className="flex justify-between items-center bg-orange-50/50 p-4 rounded-xl">
                    <span className="font-semibold text-gray-900 text-lg">Total Amount</span>
                    <span className="font-bold text-2xl text-primary">₹{orderTotal}</span>
                </div>
            </div>

            <div className="mt-auto space-y-4">
                <Link href={ROUTES.CHECKOUT} className="block w-full">
                    <Button className="w-full text-lg h-14 rounded-xl shadow-md">
                        Proceed to Checkout
                    </Button>
                </Link>
                <div className="flex flex-col gap-3 py-4 mt-4 border-t border-gray-100 bg-gray-50/50 rounded-xl px-4">
                    <p className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                        <Truck className="w-4 h-4 text-primary" /> Free delivery on orders over ₹500
                    </p>
                    <p className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                        <ShieldCheck className="w-4 h-4 text-green-600" /> Secure SSL Checkout
                    </p>
                </div>
            </div>
        </div>
    );
};
