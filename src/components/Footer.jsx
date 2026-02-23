import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary/20 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-foreground">Spice Wood Soaps</h3>
            <p className="text-foreground font-semibold leading-relaxed">
              Handcrafted artisanal soaps made with natural ingredients. Inspired by nature, crafted with love.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-foreground">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-foreground font-semibold hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/shop?new=true" className="text-foreground font-semibold hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link to="/about" className="text-foreground font-semibold hover:text-primary transition-colors">Our Process</Link></li>
              <li><Link to="/contact" className="text-foreground font-semibold hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary hover:scale-110 transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary hover:scale-110 transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary hover:scale-110 transition-all shadow-sm">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 text-center text-sm text-foreground font-semibold">
          © 2026 Spice Wood Soaps. All rights reserved.
        </div>
      </div>
    </footer>
  );
}