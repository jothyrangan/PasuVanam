"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/lib/constants";

export const EmptyCart = ({ onActionClick }) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
            <div className="w-24 h-24 mb-6 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-300">
                <ShoppingBag className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-heading mb-2 text-gray-900">Your cart is empty</h3>
            <p className="text-gray-500 max-w-sm mb-8">
                Looks like you haven&apos;t added any premium A2 dairy products to your cart yet.
            </p>
            <Link href={ROUTES.SHOP}>
                <Button
                    size="lg"
                    onClick={onActionClick}
                    className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white shadow-soft"
                >
                    Explore Products
                </Button>
            </Link>
        </div>
    );
};
