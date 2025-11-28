import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronRight, Mail, Star } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories, testimonials } from "@/data/products";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const bestSellingProducts = products.slice(0, 6);
  const featuredCategories = categories.slice(0, 5);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen md:h-[600px] bg-gradient-to-r from-secondary via-secondary/95 to-secondary/90 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6951695/pexels-photo-6951695.jpeg"
            alt="Jewellery Model"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container-max relative z-10 section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                Welcome to <span className="text-primary">GD Jewellers</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-2">
                Elegance Crafted in Gold & Diamonds
              </p>
              <p className="text-gray-300 mb-8 max-w-md">
                Discover our exquisite collection of premium gold, diamond, and silver
                jewellery. Each piece is a masterpiece of craftsmanship and elegance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="btn-primary inline-flex items-center justify-center gap-2 text-center"
                >
                  Shop Now <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/collections"
                  className="btn-secondary inline-flex items-center justify-center gap-2 text-center"
                >
                  Explore Collections
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/12026054/pexels-photo-12026054.jpeg"
                alt="Featured Jewellery"
                className="w-full max-w-md h-auto rounded-lg shadow-2xl animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
              Featured Collections
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collections of timeless jewellery pieces
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {featuredCategories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group relative overflow-hidden rounded-lg h-48 md:h-56 bg-gradient-to-br from-gold-100 to-gold-200 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg md:text-xl font-serif font-bold text-secondary text-center px-4 group-hover:text-primary transition">
                  {category.name}
                </h3>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best-Selling Products Section */}
      <section className="section-padding bg-gold-50">
        <div className="container-max">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
              Best-Selling Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most loved jewellery pieces, trusted by customers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {bestSellingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Products <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have chosen GD Jewellers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gold-50 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>

                <p className="font-serif font-bold text-secondary">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-secondary/95">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-6" />

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Join Our Newsletter
            </h2>

            <p className="text-gray-200 mb-8">
              Get exclusive offers, new collection launches, and jewellery tips delivered
              to your inbox.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex gap-4 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-3 rounded-lg bg-white text-secondary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            {subscribed && (
              <p className="mt-4 text-primary font-semibold animate-fade-in">
                ✓ Thank you for subscribing!
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
              Why Choose GD Jewellers?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                Certified Purity
              </h3>
              <p className="text-gray-600">
                All our jewellery comes with authentic certificates and BIS hallmarks
                ensuring genuine gold, silver, and diamonds.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                Master Craftsmen
              </h3>
              <p className="text-gray-600">
                Our expert artisans combine traditional techniques with modern design
                to create timeless masterpieces.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎁</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                Custom Designs
              </h3>
              <p className="text-gray-600">
                Get your dream piece crafted with our custom design service. Your vision,
                our expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gold-50">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">
            Ready to Find Your Perfect Jewel?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our complete collection or book an appointment with our jewellery
            consultants for personalized service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary inline-flex items-center justify-center gap-2">
              Explore Collection <ChevronRight className="w-5 h-5" />
            </Link>
            <button className="btn-secondary inline-flex items-center justify-center gap-2">
              Book Appointment
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
