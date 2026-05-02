import { Container } from "@/components/layout/Container";
import { TrustBadges } from "@/components/shared/TrustBadges";

export const FeaturesSection = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
                        Why Choose Maayad?
                    </h2>
                    <p className="text-lg text-gray-600">
                        We are committed to providing the purest, most nutritious dairy products using traditional Indian methods that respect our cows and the environment.
                    </p>
                </div>

                <TrustBadges />
            </Container>
        </section>
    );
};
