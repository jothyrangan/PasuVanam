"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = ({ children, className }) => {
    return (
        <div className={cn("divide-y divide-gray-200 border-b border-t border-gray-200", className)}>
            {children}
        </div>
    );
};

const AccordionItem = ({ title, children, defaultOpen = false, className }) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);

    return (
        <div className={cn("py-4", className)}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between text-left focus:outline-none"
            >
                <span className="font-medium text-foreground">{title}</span>
                <ChevronDown
                    className={cn(
                        "h-5 w-5 text-gray-500 transition-transform duration-200",
                        isOpen ? "rotate-180" : ""
                    )}
                />
            </button>

            <div
                className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                )}
            >
                <div className="text-gray-600 text-sm">
                    {children}
                </div>
            </div>
        </div>
    );
};

export { Accordion, AccordionItem };
