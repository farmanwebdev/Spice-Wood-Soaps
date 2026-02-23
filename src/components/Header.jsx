import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header({ cartCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/kits', label: 'Kits' },
    { to: '/about', label: 'Our Story' },
    { to: '/gallery', label: 'My Creations' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <div className="bg-primary text-primary-foreground text-center py-2.5 px-4 text-sm font-medium tracking-wide">
        Browse at your leisure! Our official launch is coming soon.
      </div>
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img
                src="/logo.webp"
                alt="Spice Wood Soaps logo"
                className="w-20 h-20 rounded-full object-cover"
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-primary">
                Spice Wood Soaps
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.to
                      ? 'text-primary font-semibold'
                      : 'text-foreground/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/cart" className="relative p-2 text-foreground/80 hover:text-primary transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile menu button and cart */}
            <div className="md:hidden flex items-center gap-4">
              <Link to="/cart" className="relative p-2 text-foreground/80 hover:text-primary transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground p-2"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block py-2 text-sm font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}