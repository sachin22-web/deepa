import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-primary">
              GD Jewellers
            </h3>
            <p className="text-gray-300 mb-4">
              Elegance Crafted in Gold & Diamonds
            </p>
            <p className="text-sm text-gray-400">
              Premium jewellery collection featuring exquisite gold, diamonds, and
              silverware for every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-primary transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Collections</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/gold" className="text-gray-300 hover:text-primary transition">
                  Gold Jewellery
                </Link>
              </li>
              <li>
                <Link to="/category/diamond" className="text-gray-300 hover:text-primary transition">
                  Diamond Jewellery
                </Link>
              </li>
              <li>
                <Link to="/category/bridal" className="text-gray-300 hover:text-primary transition">
                  Bridal Sets
                </Link>
              </li>
              <li>
                <Link to="/category/silver" className="text-gray-300 hover:text-primary transition">
                  Silver Jewellery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm">
                  123 Jewellery Lane, Gold District<br />
                  Mumbai, India 400001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-primary transition">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@deepajewellers.com" className="text-gray-300 hover:text-primary transition">
                  info@deepajewellers.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-secondary pt-8 mb-8">
          <div className="flex justify-center gap-6">
            <a href="#" className="p-2 hover:bg-primary text-white transition rounded-full">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 hover:bg-primary text-white transition rounded-full">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 hover:bg-primary text-white transition rounded-full">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 hover:bg-primary text-white transition rounded-full">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-secondary pt-8">
          <p className="text-gray-400 text-sm">
            © 2024 Deepa Jewellers. All rights reserved. | Elegance Crafted in Gold & Diamonds
          </p>
        </div>
      </div>
    </footer>
  );
}
