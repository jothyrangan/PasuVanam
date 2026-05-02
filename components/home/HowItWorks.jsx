import { Container } from "@/components/layout/Container";
import { Sunrise, Home, CheckCircle2, ShieldCheck } from "lucide-react";

export const HowItWorks = () => {
    const steps = [
        {
            icon: <Sunrise className="w-8 h-8 text-primary" />,
            title: "Morning Milking",
            description: "Our forest-grazing Gir cows are milked before sunrise."
        },
        {
            icon: <CheckCircle2 className="w-8 h-8 text-accent" />,
            title: "Quality Check",
            description: "Strict testing for purity, thickness and nutrients."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-primary" />,
            title: "Chilling & Packing",
            description: "Immediately chilled to 4°C and packed in glass bottles."
        },
        {
            icon: <Home className="w-8 h-8 text-accent" />,
            title: "Home Delivery",
            description: "Delivered fresh to your doorstep before 7:30 AM."
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-orange-50/30" />

            <Container className="relative">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
                        Farm to Doorstep
                    </h2>
                    <p className="text-lg text-gray-600">
                        We ensure our milk reaches you absolutely fresh, raw and unprocessed, maintaining all its natural goodness.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
                    {/* Connecting line (desktop only) */}
                    <div className="hidden lg:block absolute top-12 left-24 right-24 h-0.5 bg-primary/10 -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-orange-50 shadow-lg flex items-center justify-center mb-6 relative z-10">
                                {step.icon}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
