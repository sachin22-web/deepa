import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/12026054/pexels-photo-12026054.jpeg",
      alt: "Gold Necklace",
      category: "Jewellery",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3266703/pexels-photo-3266703.jpeg",
      alt: "Diamond Ring",
      category: "Product",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/6716445/pexels-photo-6716445.jpeg",
      alt: "Pearl & Gemstone Set",
      category: "Jewellery",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/14466167/pexels-photo-14466167.jpeg",
      alt: "Gold Engagement Ring",
      category: "Bridal",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/29502314/pexels-photo-29502314.jpeg",
      alt: "Gold Bracelet Set",
      category: "Jewellery",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/18285675/pexels-photo-18285675.jpeg",
      alt: "Woman with Pearl Necklace",
      category: "Model",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/12026054/pexels-photo-12026054.jpeg",
      alt: "Gold & Diamond Chain",
      category: "Product",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/29502314/pexels-photo-29502314.jpeg",
      alt: "Luxury Gold Jewelry",
      category: "Jewellery",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/6716445/pexels-photo-6716445.jpeg",
      alt: "Bridal Jewelry Set",
      category: "Bridal",
    },
  ];

  const categories = [
    { id: "all", name: "All" },
    { id: "Jewellery", name: "Jewellery" },
    { id: "Product", name: "Products" },
    { id: "Store", name: "Store" },
    { id: "Model", name: "Models" },
    { id: "Bridal", name: "Bridal" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] bg-gradient-to-r from-secondary to-secondary/95 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6951695/pexels-photo-6951695.jpeg"
            alt="Gallery"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container-max relative z-10 section-padding text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Explore the Beauty of GD Jewellers
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white border-b border-gold-200">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-gold-100 text-secondary hover:bg-gold-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="section-padding bg-gold-50">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image.src)}
                className={`group relative overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ${
                  index % 3 === 0 ? "sm:col-span-1" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 md:h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-2 bg-primary text-white font-semibold rounded-lg">
                    View
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No images in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 text-white hover:bg-white/10 rounded-lg transition"
          >
            <X className="w-8 h-8" />
          </button>

          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-4xl max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* About Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-secondary mb-4">
              Capturing Elegance
            </h2>
            <p className="text-gray-600 mb-6">
              Our gallery showcases the exquisite craftsmanship, stunning designs, and happy
              moments shared by our customers. Every image tells a story of elegance,
              quality, and timeless beauty.
            </p>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-serif font-bold text-primary">
                  {galleryImages.length}+
                </p>
                <p className="text-gray-600">Images</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-primary">25+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-primary">20+</p>
                <p className="text-gray-600">Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/90">
        <div className="container-max text-center text-white">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Share Your GD Jewellers Moment
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Tag us on social media with #GDJewellers and get featured in our gallery!
          </p>

          <button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Share Your Photos
          </button>
        </div>
      </section>
    </main>
  );
}
