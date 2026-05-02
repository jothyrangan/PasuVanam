"use client";

import { Input } from "@/components/ui/Input";

export const AddressForm = () => {
    return (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-100 pb-4">
                1. Delivery Address
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <Input placeholder="Doe" />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <Input type="tel" placeholder="+91 98765 43210" />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Flat, House no., Building, Company, Apartment</label>
                <Input placeholder="Flat no 301, ABC Apartments" />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Area, Street, Sector, Village</label>
                <Input placeholder="Vaishali Nagar" />
            </div>

            <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">City</label>
                    <Input defaultValue="Jaipur" readOnly className="bg-gray-50 text-gray-500" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">PIN Code</label>
                    <Input placeholder="302021" />
                </div>
            </div>
        </div>
    );
};
