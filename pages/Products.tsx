import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export default function Products() {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 100000],
    material: "",
    purity: "",
  });

  const [showFilters, setShowFilters] = useState(true);
  const [sortBy, setSortBy] = useState("featured");

  const purities = ["22K", "24K", "18K", "92.5"];
  const materials = ["Gold", "Diamond", "Silver"];

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter((p) => p.category.toLowerCase() === filters.category.toLowerCase());
    }

    if (filters.material) {
      result = result.filter((p) => {
        const material = filters.material.toLowerCase();
        return (
          p.purity.includes("K") ? material === "gold" :
          p.purity === "92.5" ? material === "silver" :
          material === "diamond"
        );
      });
    }

    if (filters.purity) {
      result = result.filter((p) => p.purity === filters.purity);
    }

    result = result.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Sort products
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [filters, sortBy]);

  const handlePriceChange = (newRange: [number, number]) => {
    setFilters({ ...filters, priceRange: newRange });
  };

  return (
    <main className="min-h-screen bg-gold-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-secondary to-secondary/95 text-white py-12">
        <div className="container-max px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Collection
          </h1>
          <p className="text-gray-200 max-w-2xl">
            Browse our complete range of premium jewellery pieces with advanced filters
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-max px-4 py-12">
        <div className="flex gap-6 lg:gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-64 flex-shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-lg p-6 shadow-md sticky top-20">
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <h3 className="text-lg font-serif font-bold text-secondary">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-500 hover:text-secondary"
                >
                  ✕
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-lg font-serif font-bold text-secondary mb-4">
                  Category
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value=""
                      checked={filters.category === ""}
                      onChange={(e) =>
                        setFilters({ ...filters, category: e.target.value })
                      }
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700">All Categories</span>
                  </label>
                  {["Necklaces", "Rings", "Bracelets", "Earrings", "Bangles", "Mangalsutras"].map(
                    (cat) => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value={cat}
                          checked={filters.category === cat}
                          onChange={(e) =>
                            setFilters({ ...filters, category: e.target.value })
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">{cat}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h4 className="text-lg font-serif font-bold text-secondary mb-4">
                  Material
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="material"
                      value=""
                      checked={filters.material === ""}
                      onChange={(e) =>
                        setFilters({ ...filters, material: e.target.value })
                      }
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700">All Materials</span>
                  </label>
                  {materials.map((material) => (
                    <label key={material} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        value={material}
                        checked={filters.material === material}
                        onChange={(e) =>
                          setFilters({ ...filters, material: e.target.value })
                        }
                        className="w-4 h-4"
                      />
                      <span className="text-gray-700">{material}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Purity Filter */}
              <div className="mb-8">
                <h4 className="text-lg font-serif font-bold text-secondary mb-4">
                  Purity
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="purity"
                      value=""
                      checked={filters.purity === ""}
                      onChange={(e) =>
                        setFilters({ ...filters, purity: e.target.value })
                      }
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700">All Purities</span>
                  </label>
                  {purities.map((purity) => (
                    <label key={purity} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="purity"
                        value={purity}
                        checked={filters.purity === purity}
                        onChange={(e) =>
                          setFilters({ ...filters, purity: e.target.value })
                        }
                        className="w-4 h-4"
                      />
                      <span className="text-gray-700">{purity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-8">
                <h4 className="text-lg font-serif font-bold text-secondary mb-4">
                  Price Range
                </h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="5000"
                    value={filters.priceRange[1]}
                    onChange={(e) =>
                      handlePriceChange([filters.priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹{filters.priceRange[0].toLocaleString()}</span>
                    <span>₹{filters.priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() =>
                  setFilters({
                    category: "",
                    priceRange: [0, 100000],
                    material: "",
                    purity: "",
                  })
                }
                className="w-full py-2 px-4 bg-gold-100 text-secondary font-semibold rounded-lg hover:bg-gold-200 transition"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1 min-w-0">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden px-4 py-2 border border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary hover:text-white transition flex items-center gap-2"
                >
                  <ChevronDown className="w-5 h-5" />
                  Filters
                </button>

                <div className="text-gray-600 font-medium">
                  Showing {filteredProducts.length} products
                </div>
              </div>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-4">No products found matching your filters</p>
                <button
                  onClick={() =>
                    setFilters({
                      category: "",
                      priceRange: [0, 100000],
                      material: "",
                      purity: "",
                    })
                  }
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
