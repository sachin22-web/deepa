import { ChevronRight, Award, Heart, Truck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const features = [
    {
      icon: Award,
      title: "100% Certified Jewellery",
      description: "All pieces come with authentic BIS hallmarks and certificates of purity",
    },
    {
      icon: Heart,
      title: "Lifetime Polishing",
      description: "Free lifetime maintenance and polishing service for all purchases",
    },
    {
      icon: Truck,
      title: "Secure Delivery",
      description: "Insured shipping with tracking for complete peace of mind",
    },
    {
      icon: Sparkles,
      title: "Custom Designs",
      description: "Our artisans craft bespoke pieces tailored to your vision",
    },
  ];

  const craftSteps = [
    {
      number: 1,
      title: "Designing",
      description: "Expert designers create unique sketches and 3D models of your vision",
      emoji: "✏️",
    },
    {
      number: 2,
      title: "Handcrafting",
      description: "Master artisans meticulously craft each piece with precision",
      emoji: "🔨",
    },
    {
      number: 3,
      title: "Polishing",
      description: "Detailed polishing and finishing to achieve perfect lustre",
      emoji: "✨",
    },
    {
      number: 4,
      title: "Quality Check",
      description: "Rigorous inspection and certification of all pieces",
      emoji: "✓",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] bg-gradient-to-r from-secondary to-secondary/95 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6951695/pexels-photo-6951695.jpeg"
            alt="Jewellery Collection"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container-max relative z-10 section-padding text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            About GD Jewellers
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Crafting Timeless Elegance Since 1998
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img
                src="https://images.pexels.com/photos/12026054/pexels-photo-12026054.jpeg"
                alt="Artisans at work"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-bold text-secondary mb-6">
                Our Heritage
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 1998, GD Jewellers has been a beacon of trust and excellence
                in the jewellery industry for over two decades. What began as a small
                workshop with a vision to create timeless pieces has grown into one of the
                most respected jewellery brands in India.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Every piece of jewellery we create tells a story of dedication, precision,
                and passion. Our master craftsmen, trained in traditional techniques passed
                down through generations, combine age-old craftsmanship with contemporary
                design sensibilities.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                We believe in absolute transparency and purity. Every gold, silver, and
                diamond piece is certified and hallmarked, giving our customers the
                assurance of authenticity and value. Your trust is our most valuable asset.
              </p>

              <Link to="/products" className="btn-primary inline-flex items-center gap-2">
                View Collections <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gold-50">
        <div className="container-max">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-serif font-bold text-secondary mb-4">
              Why Choose GD Jewellers?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Excellence, integrity, and customer satisfaction are at the heart of everything
              we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Craftsmanship Process */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-serif font-bold text-secondary mb-4">
              Our Craftsmanship Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every piece goes through meticulous steps to ensure perfection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {craftSteps.map((step) => (
              <div key={step.number} className="relative">
                {/* Step Box */}
                <div className="bg-gold-50 rounded-lg p-8 h-full">
                  <div className="text-5xl mb-4 text-center">{step.emoji}</div>
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-secondary mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">{step.description}</p>
                </div>

                {/* Arrow */}
                {step.number < 4 && (
                  <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 text-primary">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="section-padding bg-gradient-to-r from-secondary to-secondary/95 text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <div className="relative w-full aspect-square bg-gold-100 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-7xl">👩‍💼</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <h2 className="text-4xl font-serif font-bold mb-4">
                Meet Our Founder
              </h2>

              <p className="text-lg mb-4 text-gray-100">
                <span className="font-serif font-bold text-primary">Deepa Sain</span> –
                Founder & Master Jeweller with 30+ Years of Excellence
              </p>

              <p className="text-gray-200 mb-4 leading-relaxed">
                With over 30 years of experience in jewellery design and craftsmanship,
                Deepa founded GD Jewellers with a singular vision: to create
                timeless pieces that celebrate life's most precious moments.
              </p>

              <p className="text-gray-200 mb-6 leading-relaxed">
                Her commitment to ethical sourcing, authentic craftsmanship, and customer
                satisfaction has made GD Jewellers a trusted name in the industry. Every
                piece created under her vision carries the promise of purity, elegance, and
                lasting beauty.
              </p>

              <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-gray-100">
                "Jewellery is not just an accessory; it's an expression of love, trust, and
                timeless beauty. That's what we craft at GD Jewellers."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gold-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-serif font-bold text-secondary mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional quality jewellery that combines traditional
                craftsmanship with modern design, ensuring every customer experiences the
                joy of authentic elegance and timeless beauty at honest prices.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-serif font-bold text-secondary mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be India's most trusted luxury jewellery brand, recognized for our
                unwavering commitment to purity, innovation, and customer satisfaction,
                while preserving the art of traditional jewellery-making for generations to
                come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/90">
        <div className="container-max text-center text-white">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Experience GD Jewellers
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover our exquisite collection of premium gold, diamond, and silver jewellery
          </p>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explore Premium Collections <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
