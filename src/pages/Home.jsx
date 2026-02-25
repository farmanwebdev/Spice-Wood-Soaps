import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Leaf, ShieldCheck, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
  { id: 1, category: 'Woody', name: 'Spiced Sandalwood', description: 'A warm, woody blend of sandalwood and exotic spices. Perfect for a grounding morning shower.', price: 12.0, stock: 5 },
  { id: 2, category: 'Earthy', name: 'Cedarwood & Sage', description: 'Fresh and earthy, capturing the essence of a forest walk.', price: 11.5, stock: 3 },
  { id: 3, category: 'Citrus', name: 'Cinnamon Citrus', description: 'Invigorating orange and lemon zest mixed with a spicy kick of cinnamon.', price: 10.0, stock: 8 },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Spice Wood Soaps | Handcrafted Natural Soaps</title>
        <meta name="description" content="Small-batch, artisanal goat's milk soaps made in Saint Augustine, FL. Natural ingredients, veteran owned." />
      </Helmet>

      {/* Hero Section */}
      <section className="text-center py-16  bg-secondary-foreground/70">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xl md:text-2xl mb-8 leading-relaxed  bg-primary/30 text-primary-foreground/70 px-10 py-10 rounded inline-block">
            Discover our collection of small batch, artisanal goat's milk soaps crafted with natural ingredients. Gentle on your skin, kind to the earth.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Shop Collection
          </Link>
        </div>
      </section>

      {/* Value Propositions – Updated to match UI */}
      <section className="py-20 bg-background/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-primary-foreground">
            {[
              { title: 'Natural', desc: 'Made with natural ingredients and zero artificial additives.', icon: Leaf },
              { title: 'Skin Friendly', desc: 'Hypoallergenic formulas tested for sensitive skin types.', icon: ShieldCheck },
              { title: 'Handcrafted', desc: 'Made in small batches to ensure premium quality.', icon: Star },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center p-6 space-y-4">
                <div className="p-4 bg-primary/60 rounded-full text-primary">
                  <item.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                <p className="text-secondary/100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary-foreground/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Selected for You
          </p>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-primary-foreground font-serif text-3xl font-bold">Featured Collections</h2>
            <Link to="/shop" className="text-primary hover:underline font-semibold">
              View All Products →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className=" bg-background/70 py-16  text-center px-4">
        <h2 className=" text-primary-foreground fnt-serif text-4xl font-bold mb-4">Crafted with Intention</h2>
        <p className="text-primary-foreground/60 mb-20 leading-relaxed  px-10 py-10 rounded inline-block">
          Spice Wood Soaps began in a small kitchen with a simple mission: to create skincare that reconnects us with nature. We believe that what you put on your body should be as wholesome as what you put in it. Every bar is cured for 6 weeks and hand wrapped in eco‑friendly packaging. We use only essential oils, natural clays, and natural colorants. No synthetics, no shortcuts. Every bar is cured for 6 weeks and hand wrapped in eco‑friendly packaging. We use only essential oils, natural clays, and natural colorants. No synthetics, no shortcuts.
        </p>
        
        
       
        <Link to="/about" className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
          Read Our Story
        </Link>
      </section>
    </>
  );
}