import { Container } from "@/components/layout/Container";
import { Star } from "lucide-react";
import Image from "next/image";

export const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Lakshmi Narayanan",
      location: "Chennai",
      content:
        "The aroma itself tells the quality. It reminds me of the ghee we used at home during my childhood. Truly pure and satisfying.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Meera Iyer",
      location: "Coimbatore",
      content:
        "I use this ghee daily for cooking and pooja. The taste is rich and natural — you can feel the difference instantly.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 3,
      name: "Arun Kumar",
      location: "Bangalore",
      content:
        "Finally found a ghee I can trust. Clean, flavorful, and consistent every time. My whole family loves it.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-orange-50 to-white relative overflow-hidden">

      <Container>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">

          <span className="inline-block px-4 py-1 text-sm rounded-full bg-orange-100 text-primary mb-4">
            Customer Love
          </span>

          <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-4">
            Trusted by Families Across India
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            From everyday cooking to traditional rituals, our ghee has become a
            part of thousands of homes.
          </p>

          <p className="text-sm text-gray-500 mt-4">
            ⭐ Rated 4.9/5 by 1,200+ happy customers
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 leading-relaxed mb-8 italic">
                “{review.content}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 relative">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};