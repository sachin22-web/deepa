import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  const isPlaceholder = !["/"].includes(location.pathname);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gold-50 py-12">
      <div className="container-max text-center px-4">
        <div className="mb-8">
          <div className="text-8xl font-serif font-bold text-primary mb-4">
            {isPlaceholder ? "🚧" : "404"}
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
          {isPlaceholder ? "Coming Soon" : "Page Not Found"}
        </h1>

        <p className="text-lg text-gray-600 mb-6 max-w-md mx-auto">
          {isPlaceholder
            ? `This page (${location.pathname}) is being crafted with the same elegance as our jewellery collection. Continue prompting to build this section!`
            : "The page you're looking for doesn't exist. Let's get you back to exploring our beautiful collection."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </Link>

          {isPlaceholder && (
            <Link
              to="/products"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              View Products <ChevronLeft className="w-5 h-5 rotate-180" />
            </Link>
          )}
        </div>

        {isPlaceholder && (
          <div className="mt-12 p-6 bg-white rounded-lg border-2 border-gold-200">
            <p className="text-sm text-gray-600 mb-2">
              💡 <strong>Tip:</strong> You can continue building this page by asking me to implement:
            </p>
            <p className="text-sm text-gray-600">
              For example: "Build the products page with filtering" or "Create the user dashboard"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFound;
