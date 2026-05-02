"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Wallet, CreditCard, Banknote } from "lucide-react";

export const PaymentOptions = () => {
    const [selectedPayment, setSelectedPayment] = useState("upi");

    const methods = [
        {
            id: "upi",
            title: "UPI / QR Code",
            description: "Pay via Google Pay, PhonePe, Paytm",
            icon: <Wallet className="w-5 h-5" />
        },
        {
            id: "card",
            title: "Credit / Debit Card",
            description: "Visa, Mastercard, RuPay",
            icon: <CreditCard className="w-5 h-5" />
        },
        {
            id: "cod",
            title: "Cash on Delivery",
            description: "Pay when you receive the order",
            icon: <Banknote className="w-5 h-5" />
        }
    ];

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-100 pb-4">
                3. Payment Method
            </h3>

            <div className="space-y-3">
                {methods.map((method) => (
                    <div
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        className={cn(
                            "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all",
                            selectedPayment === method.id
                                ? "border-primary bg-primary/5"
                                : "border-gray-200 hover:border-gray-300 bg-white"
                        )}
                    >
                        {/* Custom Radio Circle */}
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center shrink-0">
                            {selectedPayment === method.id && (
                                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                            )}
                        </div>

                        <div className={cn(
                            "p-2 rounded-lg",
                            selectedPayment === method.id ? "bg-white text-primary" : "bg-gray-50 text-gray-500"
                        )}>
                            {method.icon}
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-900">{method.title}</h4>
                            <p className="text-sm text-gray-500">{method.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
