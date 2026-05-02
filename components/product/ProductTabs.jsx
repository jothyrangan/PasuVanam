"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export const ProductTabs = ({ description, nutritionFacts, faq }) => {
    const [activeTab, setActiveTab] = useState("description");

    const tabs = [
        { id: "description", label: "Description" },
        { id: "nutrition", label: "Nutrition & Health" },
        { id: "shipping", label: "Shipping & Delivery" },
    ];

    return (
        <div className="mt-16">
            <div className="flex border-b border-gray-200 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "whitespace-nowrap py-4 px-6 font-medium text-sm transition-colors border-b-2",
                            activeTab === tab.id
                                ? "border-primary text-primary"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="py-8 text-gray-700 leading-relaxed">
                {activeTab === "description" && (
                    <div className="space-y-4 animate-in fade-in">
                        <p>{description}</p>
                        <h4 className="font-semibold text-gray-900 mt-6 mb-2">Key Highlights:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>100% Pure A2 Gir Cow Milk</li>
                            <li>Free from antibiotics or oxytocin</li>
                            <li>Untouched by human hands during processing</li>
                            <li>Packed in eco-friendly materials</li>
                        </ul>
                    </div>
                )}

                {activeTab === "nutrition" && (
                    <div className="animate-in fade-in">
                        {nutritionFacts || (
                            <>
                                <p className="mb-6">Rich in A2 beta-casein protein, highly digestible, and suitable for those with lactose sensitivities.</p>
                                <div className="bg-orange-50/50 rounded-xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center border border-orange-100">
                                    <div>
                                        <span className="block text-2xl font-bold text-primary mb-1">High</span>
                                        <span className="text-sm font-medium text-gray-600">Calcium</span>
                                    </div>
                                    <div>
                                        <span className="block text-2xl font-bold text-primary mb-1">A2</span>
                                        <span className="text-sm font-medium text-gray-600">Protein</span>
                                    </div>
                                    <div>
                                        <span className="block text-2xl font-bold text-primary mb-1">Rich</span>
                                        <span className="text-sm font-medium text-gray-600">Omega 3</span>
                                    </div>
                                    <div>
                                        <span className="block text-2xl font-bold text-primary mb-1">Zero</span>
                                        <span className="text-sm font-medium text-gray-600">Preservatives</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )}

                {activeTab === "shipping" && (
                    <div className="space-y-4 animate-in fade-in">
                        <p className="font-medium text-gray-900">Morning Delivery (Between 5:00 AM - 7:30 AM)</p>
                        <p>We operate on a subscription model to ensure you get the freshest milk every single day. Orders placed before 8 PM are delivered the next morning.</p>
                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 mt-6">
                            <h4 className="font-medium mb-2">Current Delivery Areas:</h4>
                            <p className="text-sm">Jaipur City (All major PIN codes including Vaishali Nagar, Malviya Nagar, Mansarovar, Bani Park).</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
