"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sunrise, ArrowRight } from "lucide-react";

export const DeliverySlots = () => {
    const [selectedSlot, setSelectedSlot] = useState("morning");

    const slots = [
        {
            id: "morning",
            title: "Morning Fresh Delivery",
            time: "Between 5:00 AM - 7:30 AM",
            description: "Get fresh milk right at your doorstep before you wake up.",
            icon: <Sunrise className="w-6 h-6" />,
            recommended: true
        },
        {
            id: "evening",
            title: "Evening Delivery",
            time: "Between 4:00 PM - 7:00 PM",
            description: "Ideal for ghee and non-perishable dairy items.",
            icon: <ArrowRight className="w-6 h-6" />,
            recommended: false
        }
    ];

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-100 pb-4">
                2. Delivery Timings
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {slots.map((slot) => (
                    <div
                        key={slot.id}
                        onClick={() => setSelectedSlot(slot.id)}
                        className={cn(
                            "relative border-2 rounded-xl p-5 cursor-pointer transition-all",
                            selectedSlot === slot.id
                                ? "border-primary bg-primary/5 shadow-sm"
                                : "border-gray-200 hover:border-gray-300 bg-white"
                        )}
                    >
                        {slot.recommended && (
                            <span className="absolute -top-3 left-4 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full px-3">
                                Recommended for Milk
                            </span>
                        )}

                        <div className="flex items-start gap-4 mt-2">
                            <div className={cn(
                                "p-2 rounded-full shrink-0",
                                selectedSlot === slot.id ? "bg-primary text-white" : "bg-gray-100 text-gray-500"
                            )}>
                                {slot.icon}
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">{slot.title}</h4>
                                <p className="text-sm font-medium text-primary mt-1 mb-2">{slot.time}</p>
                                <p className="text-sm text-gray-500">{slot.description}</p>
                            </div>
                        </div>

                        {/* Custom Radio Circle */}
                        <div className="absolute top-5 right-5 w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                            {selectedSlot === slot.id && (
                                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
