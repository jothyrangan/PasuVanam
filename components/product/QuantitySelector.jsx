"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const QuantitySelector = ({ quantity, onIncrease, onDecrease, max = 10 }) => {
    return (
        <div className="flex items-center">
            <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-r-none border-r-0 border-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                onClick={onDecrease}
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
            >
                <Minus className="h-4 w-4" />
            </Button>
            <div className="flex h-10 w-14 items-center justify-center border-y border-gray-300 bg-white font-medium text-gray-900">
                {quantity}
            </div>
            <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-l-none border-l-0 border-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                onClick={onIncrease}
                disabled={quantity >= max}
                aria-label="Increase quantity"
            >
                <Plus className="h-4 w-4" />
            </Button>
        </div>
    );
};
