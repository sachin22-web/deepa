import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Collections", path: "/collections" },
    { label: "Gallery", path: "/gallery" },
    { label: "Calculator", path: "/calculator" },
    { label: "Inquiries", path: "/inquiries" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gold-200 shadow-md">
      <div className="container-max">
        <div className="flex items-center justify-between py-4 px-4 md:px-0">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            {/* GD Logo */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-serif font-bold text-lg md:text-xl">GD</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full shadow-md"></div>
            </div>
            <div className="text-xl md:text-2xl font-serif font-bold">
              <span className="text-secondary">GD</span>
              <span className="text-primary ml-1 text-lg">Jewellers</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-secondary hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gold-50 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-secondary" />
            ) : (
              <Menu className="w-5 h-5 text-secondary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-gold-200 py-4 px-4 bg-gold-50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-secondary hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
