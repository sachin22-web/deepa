import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Collections() {
  const collections = [
    {
      id: "gold",
      name: "Gold Jewellery",
      description: "Exquisite gold pieces crafted in 22K and 24K gold. Perfect for everyday elegance and special occasions.",
      image: "https://images.pexels.com/photos/29502314/pexels-photo-29502314.jpeg",
      icon: "✨",
      highlights: ["22K & 24K Gold", "Certified Purity", "Heritage Designs"],
    },
    {
      id: "diamond",
      name: "Diamond Jewellery",
      description: "Stunning diamond collections featuring certified diamonds with exceptional brilliance and clarity.",
      image: "https://images.pexels.com/photos/3266703/pexels-photo-3266703.jpeg",
      icon: "💎",
      highlights: ["Certified Diamonds", "GIA Certified", "Premium Quality"],
    },
    {
      id: "silver",
      name: "Silver Jewellery",
      description: "Elegant sterling silver pieces with contemporary and traditional designs for modern lifestyles.",
      image: "https://images.pexels.com/photos/6716445/pexels-photo-6716445.jpeg",
      icon: "🪙",
      highlights: ["Sterling Silver", "Affordable Luxury", "Versatile Designs"],
    },
    {
      id: "bridal",
      name: "Bridal Collection",
      description: "Complete bridal sets featuring mangalsutras, necklaces, earrings, and bangles for your special day.",
      image: "https://images.pexels.com/photos/14466167/pexels-photo-14466167.jpeg",
      icon: "👰",
      highlights: ["Complete Sets", "Custom Designs", "Lifetime Shine"],
    },
    {
      id: "daily-wear",
      name: "Daily Wear",
      description: "Comfortable and beautiful pieces designed for everyday wear with timeless appeal.",
      image: "https://images.pexels.com/photos/12026054/pexels-photo-12026054.jpeg",
      icon: "🌟",
      highlights: ["Lightweight", "Durable", "Casual Elegance"],
    },
    {
      id: "custom",
      name: "Custom Designs",
      description: "Create your own masterpiece with our design experts. Turn your vision into reality.",
      image: "https://images.pexels.com/photos/18285675/pexels-photo-18285675.jpeg",
      icon: "🎨",
      highlights: ["Personalized", "Expert Craftsmanship", "Unique Pieces"],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] bg-gradient-to-r from-secondary to-secondary/95 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6951695/pexels-photo-6951695.jpeg"
            alt="Collections"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container-max relative z-10 section-padding text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Our Collections
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Discover Our Exquisite Range of Premium Jewellery
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="section-padding bg-gold-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-64 bg-gray-200">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Icon */}
                  <div className="absolute top-4 right-4 text-4xl">{collection.icon}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-secondary mb-3">
                    {collection.name}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {collection.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {collection.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <Link
                    to={`/category/${collection.id}`}
                    className="block w-full px-4 py-2 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-colors text-center"
                  >
                    Explore Collection
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Collections */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-serif font-bold text-secondary mb-4">
              What Makes Our Collections Special
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                Curated Selection
              </h3>
              <p className="text-gray-600">
                Every piece in our collection is carefully selected and crafted to meet our
                exacting standards of quality and beauty.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                Premium Materials
              </h3>
              <p className="text-gray-600">
                We use only the finest gold, diamonds, and gemstones sourced ethically and
                certified for authenticity.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                Timeless Designs
              </h3>
              <p className="text-gray-600">
                Our designs blend traditional craftsmanship with contemporary aesthetics,
                creating pieces that last forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pieces */}
      <section className="section-padding bg-gold-50">
        <div className="container-max">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-serif font-bold text-secondary mb-4">
              Featured Pieces
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our best-selling and most loved jewellery pieces
            </p>
          </div>

          <div className="text-center">
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              View All Products <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/90">
        <div className="container-max text-center text-white">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Find Your Perfect Jewel
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Browse our complete collections or contact our experts for personalized recommendations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Shop Now <ChevronRight className="w-5 h-5" />
            </Link>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
