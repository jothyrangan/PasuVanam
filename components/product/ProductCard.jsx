"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib/constants";
import { useCart } from "@/hooks/useCart";

export const ProductCard = ({ product }) => {
    const { items, addItem, removeItem, updateQuantity } = useCart();
    const cartItem = items.find(item => item.product.id === product.id);
    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
            <Link href={`${ROUTES.SHOP}/${product.slug}`} className="relative h-64 w-full bg-gray-100 overflow-hidden block">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {!product.inStock && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Out of Stock
                    </div>
                )}
            </Link>

            <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2 gap-4">
                    <Link href={`${ROUTES.SHOP}/${product.slug}`} className="group-hover:text-primary transition-colors">
                        <h3 className="text-xl font-heading font-semibold text-gray-900 leading-tight">
                            {product.name}
                        </h3>
                    </Link>
                    <span className="font-semibold text-xl text-primary shrink-0 bg-primary/5 px-2 py-1 rounded-lg">
                        ₹{product.price}
                    </span>
                </div>

                <p className="text-sm font-medium text-gray-500 mb-4">{product.unit}</p>

                <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed flex-1">
                    {product.description}
                </p>

                {cartItem ? (
                    <div className="flex items-center justify-between bg-primary/5 border border-primary/20 rounded-xl p-1 h-12 w-full">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-lg hover:bg-white text-primary"
                            onClick={() => {
                                if (cartItem.quantity === 1) {
                                    removeItem(product.id);
                                } else {
                                    updateQuantity(product.id, cartItem.quantity - 1);
                                }
                            }}
                        >
                            <Minus className="w-4 h-4" />
                        </Button>
                        <span className="font-semibold text-lg text-primary">{cartItem.quantity}</span>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-lg hover:bg-white text-primary"
                            onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                            disabled={!product.inStock}
                        >
                            <Plus className="w-4 h-4" />
                        </Button>
                    </div>
                ) : (
                    <Button
                        className="w-full rounded-xl gap-2 font-medium h-12"
                        disabled={!product.inStock}
                        onClick={() => addItem(product, 1)}
                    >
                        <ShoppingCart className="w-5 h-5" />
                        {product.inStock ? "Add to Cart" : "Sold Out"}
                    </Button>
                )}
            </div>
        </div>
    );
};
