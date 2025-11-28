import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Collections from "./pages/Collections";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Inquiry from "./pages/Inquiry";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JewelleryCalculator from "./components/JewelleryCalculator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculator" element={<JewelleryCalculator />} />
          <Route path="/inquiries" element={<Inquiry />} />
          {/* Placeholder routes - will be implemented later */}
          <Route path="/product/:id" element={<NotFound />} />
          <Route path="/category/:id" element={<NotFound />} />
          <Route path="/login" element={<NotFound />} />
          <Route path="/signup" element={<NotFound />} />
          <Route path="/dashboard" element={<NotFound />} />
          <Route path="/admin" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
