"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";

export const AddToCartButton = ({ product, quantity, disabled = false }) => {
    const { addItem } = useCart();
    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = () => {
        setIsAdding(true);
        addItem(product, quantity);

        setTimeout(() => {
            setIsAdding(false);
        }, 800);
    };

    return (
        <Button
            className="w-full text-lg h-14 rounded-xl gap-3 shadow-soft"
            size="lg"
            disabled={disabled || isAdding}
            onClick={handleAddToCart}
        >
            <ShoppingCart className="w-5 h-5" />
            {isAdding ? "Adding..." : `Add to Cart - ₹${product?.price * quantity}`}
        </Button>
    );
};
