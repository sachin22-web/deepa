export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  weight: number;
  purity: string;
  description: string;
  image: string;
  images?: string[];
  stock: number;
  code: string;
  making_charges?: number;
  certifications?: string[];
  stone_details?: string;
}

export const products: Product[] = [
  {
    id: "1",
    code: "DJL001",
    name: "Golden Grace Necklace",
    category: "Necklaces",
    price: 45000,
    weight: 22,
    purity: "22K",
    description: "Elegant gold necklace with delicate craftsmanship and timeless design",
    image: "https://images.pexels.com/photos/12026054/pexels-photo-12026054.jpeg",
    stock: 5,
    making_charges: 2000,
    certifications: ["BIS Certified", "Pure Gold Guarantee"],
    stone_details: "18 genuine diamonds, 2 carats total",
  },
  {
    id: "2",
    code: "DJL002",
    name: "Diamond Radiance Ring",
    category: "Rings",
    price: 55000,
    weight: 8,
    purity: "18K",
    description: "Stunning diamond ring with brilliant sparkle and secure setting",
    image: "https://images.pexels.com/photos/3266703/pexels-photo-3266703.jpeg",
    stock: 3,
    making_charges: 1500,
    certifications: ["GIA Certified", "Diamond Certificate"],
    stone_details: "1 carat solitaire diamond, VS1 clarity",
  },
  {
    id: "3",
    code: "DJL003",
    name: "Royal Bracelet Collection",
    category: "Bracelets",
    price: 35000,
    weight: 18,
    purity: "22K",
    description: "Royal-inspired bracelet with intricate gold work and elegance",
    image: "https://images.pexels.com/photos/29502314/pexels-photo-29502314.jpeg",
    stock: 7,
    making_charges: 1800,
    certifications: ["BIS Certified"],
    stone_details: "Semi-precious stones inlay",
  },
  {
    id: "4",
    code: "DJL004",
    name: "Chandelier Earrings",
    category: "Earrings",
    price: 28000,
    weight: 12,
    purity: "22K",
    description: "Dazzling chandelier style earrings perfect for special occasions",
    image: "https://images.pexels.com/photos/6716445/pexels-photo-6716445.jpeg",
    stock: 6,
    making_charges: 1200,
    certifications: ["BIS Certified"],
    stone_details: "Freshwater pearls and gemstones",
  },
  {
    id: "5",
    code: "DJL005",
    name: "Bridal Mangalsutra",
    category: "Mangalsutras",
    price: 75000,
    weight: 30,
    purity: "22K",
    description: "Traditional bridal mangalsutra with contemporary design and auspiciousness",
    image: "https://images.pexels.com/photos/14466167/pexels-photo-14466167.jpeg",
    stock: 2,
    making_charges: 3000,
    certifications: ["BIS Certified", "Pure Gold Guarantee"],
    stone_details: "Black beads with diamond studded pendant",
  },
  {
    id: "6",
    code: "DJL006",
    name: "Silver Heritage Bangles",
    category: "Bangles",
    price: 12000,
    weight: 28,
    purity: "92.5",
    description: "Classic silver bangles with traditional patterns and modern appeal",
    image: "https://images.pexels.com/photos/6716445/pexels-photo-6716445.jpeg",
    stock: 10,
    making_charges: 500,
    certifications: ["BIS Certified", "Sterling Silver"],
    stone_details: "Pure silver with traditional engraving",
  },
  {
    id: "7",
    code: "DJL007",
    name: "Diamond Stud Earrings",
    category: "Earrings",
    price: 42000,
    weight: 4,
    purity: "18K",
    description: "Timeless diamond studs for everyday elegance and sophistication",
    image: "https://images.pexels.com/photos/3266703/pexels-photo-3266703.jpeg",
    stock: 4,
    making_charges: 1000,
    certifications: ["GIA Certified"],
    stone_details: "0.5 carat diamonds each, VS2 clarity",
  },
  {
    id: "8",
    code: "DJL008",
    name: "Gold Chain Pendant",
    category: "Necklaces",
    price: 38000,
    weight: 20,
    purity: "24K",
    description: "Pure gold chain with contemporary pendant design for modern look",
    image: "https://images.pexels.com/photos/18285675/pexels-photo-18285675.jpeg",
    stock: 8,
    making_charges: 1600,
    certifications: ["BIS Certified", "Pure Gold Guarantee"],
    stone_details: "Designer pendant with semi-precious stone",
  },
];

export const categories = [
  { id: "gold", name: "Gold Jewellery", icon: "✨" },
  { id: "diamond", name: "Diamond Jewellery", icon: "💎" },
  { id: "silver", name: "Silver Jewellery", icon: "🪙" },
  { id: "bridal", name: "Bridal Collection", icon: "👰" },
  { id: "necklaces", name: "Necklaces", icon: "📿" },
  { id: "rings", name: "Rings", icon: "💍" },
  { id: "earrings", name: "Earrings", icon: "👂" },
  { id: "bangles", name: "Bangles", icon: "🌟" },
  { id: "bracelets", name: "Bracelets", icon: "⌚" },
  { id: "mangalsutras", name: "Mangalsutras", icon: "🎀" },
];

export const testimonials = [
  {
    id: 1,
    author: "Priya Sharma",
    text: "Deepa Jewellers creates stunning pieces that are perfect for any occasion. The quality and craftsmanship are exceptional!",
    rating: 5,
  },
  {
    id: 2,
    author: "Rajesh Kumar",
    text: "I bought my wife's engagement ring here and she absolutely loves it. The customer service was outstanding!",
    rating: 5,
  },
  {
    id: 3,
    author: "Anjali Patel",
    text: "The bridal collection is breathtaking. Every piece is a masterpiece. Highly recommended for all special occasions.",
    rating: 5,
  },
  {
    id: 4,
    author: "Vikram Singh",
    text: "Best jewellery store in the city. Their designs are unique and the staff is very knowledgeable.",
    rating: 5,
  },
];
