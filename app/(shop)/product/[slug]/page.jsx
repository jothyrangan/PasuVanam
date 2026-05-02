"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/shared/SEOHead";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductTabs } from "@/components/product/ProductTabs";
import { QuantitySelector } from "@/components/product/QuantitySelector";
import { AddToCartButton } from "@/components/product/AddToCartButton";

import { PRODUCTS } from "@/lib/data";
import { ROUTES } from "@/lib/constants";

export default function ProductDetailPage({ params }) {
    const [quantity, setQuantity] = useState(1);
    const { slug } = params;

    const product = PRODUCTS.find(p => p.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <>
            <SEOHead title={product.name} description={product.description} />

            <div className="bg-orange-50/30 border-b border-orange-50">
                <Container>
                    <div className="py-4">
                        <Link
                            href={ROUTES.SHOP}
                            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Shop
                        </Link>
                    </div>
                </Container>
            </div>

            <div className="pt-8 pb-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Product Images */}
                        <div>
                            <ProductGallery images={[product.image]} productName={product.name} />
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col pt-2 lg:pt-6">
                            <div className="mb-6">
                                <h1 className="text-3xl md:text-4xl font-heading text-gray-900 mb-2">
                                    {product.name}
                                </h1>
                                <p className="text-lg text-gray-500 font-medium mb-4">{product.unit}</p>

                                <div className="flex items-center gap-4">
                                    <span className="text-3xl font-bold text-primary">₹{product.price}</span>
                                    {product.inStock && (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                                            <CheckCircle2 className="w-4 h-4" />
                                            In Stock
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="mb-8">
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl mb-8">
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="font-medium text-gray-900">Quantity</span>
                                    <QuantitySelector
                                        quantity={quantity}
                                        onIncrease={() => setQuantity(q => q + 1)}
                                        onDecrease={() => setQuantity(q => q - 1)}
                                    />
                                </div>

                                <div className="pt-4 mt-4 border-t border-gray-200">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-gray-600">Total Price:</span>
                                        <span className="text-2xl font-bold text-gray-900">₹{product.price * quantity}</span>
                                    </div>
                                    <AddToCartButton
                                        product={product}
                                        quantity={quantity}
                                        disabled={!product.inStock}
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" /> Secure Pyaments
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" /> Early Morning Delivery Guarantee
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" /> Lab Certified Purity
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <ProductTabs description={product.description} />
                </Container>
            </div>
        </>
    );
}
