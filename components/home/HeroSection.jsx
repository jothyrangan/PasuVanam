import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { ROUTES } from "@/lib/constants";

export const HeroSection = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-orange-50/30">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

            <Container className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                            100% Pure A2 Gir Cow Products
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-6 leading-tight">
                            Traditional Goodness,<br />
                            <span className="text-primary">Delivered Fresh.</span>
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                            Experience the authentic taste and health benefits of pure A2 milk and bilona ghee from our free-grazing Gir cows. Farm-to-table delivery every morning.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href={ROUTES.SHOP}>
                                <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 rounded-full shadow-soft hover:shadow-md transition-all">
                                    Shop Products
                                </Button>
                            </Link>
                            <Link href={ROUTES.ABOUT}>
                                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8 rounded-full border-primary/20 hover:bg-primary/5">
                                    Our Farm Story
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-10 flex items-center gap-4 text-sm font-medium text-gray-500">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                                ))}
                            </div>
                            <p>Join 500+ healthy families</p>
                        </div>
                    </div>

                    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        {/* We use a placeholder image structure here. Wait for actual images to be in public/images/ */}
                        <div className="absolute inset-0 bg-primary/20 animate-pulse" />
                        <Image
                            src="https://app.reve.com/api/share/86c94da1-e789-42ad-a966-103c2f5b2000/image_url"
                            alt="Fresh A2 Milk"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Floating badge */}
                        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-accent font-bold text-xl">
                                    A2
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Lab Tested</p>
                                    <p className="text-xs text-gray-500">100% Pure & Safe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
