"use client";

import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/Button";
import { ShieldCheck } from "lucide-react";

export const OrderSummary = () => {
    const { items, totalPrice } = useCart();
    const shippingCost = totalPrice > 500 ? 0 : 50;
    const orderTotal = totalPrice + shippingCost;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
            <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-gray-100">
                Order Summary
            </h3>

            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                        <div className="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden relative shrink-0">
                            <Image
                                src={item.product.image}
                                alt={item.product.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-medium text-gray-900 line-clamp-2 text-sm">
                                {item.product.name}
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                                Qty: {item.quantity} × ₹{item.product.price}
                            </p>
                        </div>
                        <div className="font-semibold text-gray-900">
                            ₹{item.product.price * item.quantity}
                        </div>
                    </div>
                ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-gray-100 text-sm mb-6">
                <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Delivery Charges</span>
                    {shippingCost === 0 ? (
                        <span className="text-green-600 font-medium">FREE</span>
                    ) : (
                        <span className="font-medium text-gray-900">₹{shippingCost}</span>
                    )}
                </div>
            </div>

            <div className="bg-orange-50/50 p-4 rounded-xl flex justify-between items-center mb-8 border border-orange-100">
                <span className="font-semibold text-gray-900">To Pay</span>
                <span className="font-bold border-gray-100text-2xl text-primary">₹{orderTotal}</span>
            </div>

            <div className="space-y-4">
                <Button className="w-full text-lg h-14 rounded-xl shadow-md">
                    Place Order
                </Button>
                <p className="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
                    <ShieldCheck className="w-4 h-4 text-green-600" /> Safe & Secure Payments
                </p>
            </div>
        </div>
    );
};
