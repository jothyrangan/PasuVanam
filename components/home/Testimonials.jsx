import { Container } from "@/components/layout/Container";
import { Star } from "lucide-react";
import Image from "next/image";

export const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Priya Sharma",
            location: "Jaipur City",
            content: "The A2 milk from Maayad has completely changed my family's morning routine. It's thick, sweet, and my kids absolutely love it.",
            rating: 5,
            imageSeed: 12
        },
        {
            id: 2,
            name: "Rahul Verma",
            location: "Vaishali Nagar",
            content: "Their bilona ghee is the most authentic I have tasted in years. Reminds me of the ghee my grandmother used to make.",
            rating: 5,
            imageSeed: 5
        },
        {
            id: 3,
            name: "Anjali Gupta",
            location: "Malviya Nagar",
            content: "Delivery is always on time, before 7 AM. Super happy with their service and the quality of the A2 milk.",
            rating: 5,
            imageSeed: 9
        }
    ];

    return (
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Decoupage background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

            <Container className="relative">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading mb-4">
                        Hear From Our Maayad Family
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Don&apos;t just take our word for it. Here is what families across the city have to say about our A2 dairy products.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-colors">
                            <div className="flex text-yellow-400 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-lg leading-relaxed mb-8 text-primary-foreground/90 italic">
                                &quot;{review.content}&quot;
                            </p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20 relative">
                                    <Image
                                        src={`https://api.dicebear.com/7.x/notionists/svg?seed=${review.imageSeed}&backgroundColor=transparent`}
                                        alt={review.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold">{review.name}</h4>
                                    <p className="text-sm text-primary-foreground/70">{review.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
