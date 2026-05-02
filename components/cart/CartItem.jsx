"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { QuantitySelector } from "@/components/product/QuantitySelector";
import { ROUTES } from "@/lib/constants";

export const CartItem = ({ item }) => {
    const { updateQuantity, removeItem } = useCart();
    const { product, quantity } = item;

    return (
        <div className="flex gap-4 sm:gap-6 py-6 border-b border-gray-100 last:border-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-50 rounded-2xl overflow-hidden relative shrink-0">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col flex-1 justify-between">
                <div>
                    <div className="flex justify-between items-start mb-1 gap-2">
                        <Link
                            href={`${ROUTES.SHOP}/${product.slug}`}
                            className="text-lg font-semibold font-heading text-gray-900 hover:text-primary transition-colors"
                        >
                            {product.name}
                        </Link>
                        <span className="font-semibold text-lg text-gray-900">₹{product.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{product.unit}</p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <QuantitySelector
                        quantity={quantity}
                        onIncrease={() => updateQuantity(product.id, quantity + 1)}
                        onDecrease={() => updateQuantity(product.id, quantity - 1)}
                        max={20}
                    />
                    <button
                        onClick={() => removeItem(product.id)}
                        className="text-sm text-red-500 hover:text-red-600 font-medium flex items-center gap-1.5 p-2 rounded-lg hover:bg-red-50 transition-colors"
                        aria-label={`Remove ${product.name} from cart`}
                    >
                        <Trash2 className="w-4 h-4" />
                        <span className="hidden sm:inline">Remove</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
