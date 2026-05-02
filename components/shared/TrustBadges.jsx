import { ShieldCheck, Leaf, Truck, Award } from "lucide-react";

export const TrustBadges = () => {
    const badges = [
        {
            icon: <Award className="h-6 w-6 text-primary" />,
            title: "100% Pure A2",
            description: "From certified Gir cows"
        },
        {
            icon: <Leaf className="h-6 w-6 text-accent" />,
            title: "Traditional Bilona",
            description: "Curd-churned method"
        },
        {
            icon: <Truck className="h-6 w-6 text-primary" />,
            title: "Farm to Home",
            description: "Fresh direct delivery"
        },
        {
            icon: <ShieldCheck className="h-6 w-6 text-accent" />,
            title: "Lab Tested",
            description: "Highest quality standards"
        }
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8">
            {badges.map((badge, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-3 p-4 rounded-xl bg-orange-50/50">
                    <div className="p-3 bg-white rounded-full shadow-sm">
                        {badge.icon}
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900">{badge.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">{badge.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
