import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/shared/SEOHead";
import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <SEOHead title="Our Farm Story" />
            <div className="pt-24 pb-16">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-heading mb-8 text-center">Our Farm Story</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                At Maayad Dairy, our journey began with a simple belief: the purest milk comes from happy, healthy cows living in harmony with nature.
                            </p>
                            <p>
                                We are dedicated to preserving the indigenous Gir cow breed, known for producing A2 milk that is naturally easier to digest and rich in essential nutrients. Our cows graze freely on lush green pastures, bathed in sunlight, far away from the stress of commercial dairy farming.
                            </p>
                        </div>
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                            <div className="absolute inset-0 bg-primary/20 animate-pulse" />
                            <Image
                                src="https://i.pinimg.com/736x/36/13/af/3613af4cdf77e823a586bdc63d9fde39.jpg"
                                alt="Happy Gir Cows"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
                            <div className="absolute inset-0 bg-accent/20 animate-pulse" />
                            <Image
                                src="https://i.pinimg.com/736x/d1/5d/ce/d15dce1a667efbfa2a9d6c2b6e2a446a.jpg"
                                alt="Farm Landscape"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed order-1 md:order-2">
                            <h2 className="text-3xl font-heading text-foreground">The Maayad Philosophy</h2>
                            <p>
                                &quot;Maayad&quot; holds a deep meaning representing Mother Nature and traditional roots. We adhere strictly to the ancient &apos;Bilona&apos; method for churning our A2 ghee, ensuring every drop retains its authentic aroma and medicinal properties.
                            </p>
                            <p>
                                We don&apos;t just sell milk; we deliver health, tradition, and purity straight from our farm to your family&apos;s table.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}
