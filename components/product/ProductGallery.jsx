"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ProductGallery = ({ images, productName }) => {
    const [activeImage, setActiveImage] = useState(0);

    // If no images provided, use placeholder array
    const displayImages = images?.length > 0
        ? images
        : ['/images/products/milk-1l.jpg', '/images/products/ghee-1l.jpg', '/images/farm/cows.jpg'];

    return (
        <div className="flex flex-col gap-4">
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-gray-100 border border-gray-100">
                <Image
                    src={displayImages[activeImage]}
                    alt={`${productName} view ${activeImage + 1}`}
                    fill
                    className="object-cover transition-all duration-500"
                    priority
                />
            </div>

            {displayImages.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
                    {displayImages.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveImage(idx)}
                            className={cn(
                                "relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-2xl overflow-hidden border-2 snap-start transition-all",
                                activeImage === idx ? "border-primary shadow-md" : "border-transparent hover:border-primary/50 opacity-70 hover:opacity-100"
                            )}
                        >
                            <Image
                                src={img}
                                alt={`${productName} thumbnail ${idx + 1}`}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
