import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64 md:h-72 bg-gold-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gold-50 transition"
        >
          <Heart
            className={`w-5 h-5 ${isWishlisted ? "fill-red-500 text-red-500" : "text-secondary"}`}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 md:p-6">
        {/* Category & Purity */}
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold text-primary uppercase tracking-wide">
            {product.category}
          </span>
          <span className="text-xs font-semibold text-secondary bg-gold-100 px-2 py-1 rounded">
            {product.purity}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-lg md:text-xl font-serif font-bold text-secondary mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Product Code */}
        <p className="text-xs text-muted-foreground mb-3">{product.code}</p>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Weight */}
        <p className="text-sm font-medium text-secondary mb-3">
          Weight: <span className="text-primary">{product.weight}g</span>
        </p>

        {/* Price */}
        <div className="mb-4">
          <p className="text-2xl font-serif font-bold text-primary">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
        </div>

        {/* Stock Status */}
        <div className="mb-4">
          <p className={`text-sm font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 px-4 py-2 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-colors text-center text-sm"
          >
            View Details
          </Link>
          <button className="flex-1 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
