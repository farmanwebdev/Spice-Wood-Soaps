import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
  { id: 1, category: 'Woody', name: 'Spiced Sandalwood', description: 'A warm, woody blend of sandalwood and exotic spices. Perfect for a grounding morning shower.', price: 12.0, stock: 5 },
  { id: 2, category: 'Earthy', name: 'Cedarwood & Sage', description: 'Fresh and earthy, capturing the essence of a forest walk.', price: 11.5, stock: 3 },
  { id: 3, category: 'Citrus', name: 'Cinnamon Citrus', description: 'Invigorating orange and lemon zest mixed with a spicy kick of cinnamon.', price: 10.0, stock: 8 },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="text-center py-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            Discover the Art of Natural Skincare
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Small batch, artisanal goat’s milk soaps made with natural ingredients.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Natural', desc: 'Made with natural ingredients and zero artificial additives.' },
            { title: 'Skin Friendly', desc: 'Hypoallergenic formulas tested for sensitive skin types.' },
            { title: 'Handcrafted', desc: 'Made in small batches to ensure premium quality.' },
          ].map((item) => (
            <div key={item.title} className="text-center p-6 bg-card rounded-xl shadow-sm">
              <h3 className="font-serif text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-3xl font-bold">Selected for You</h2>
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
      <section className="py-16 max-w-4xl mx-auto text-center px-4">
        <h2 className="font-serif text-4xl font-bold mb-4">Crafted with Intention</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Spice Wood Soaps began in a small kitchen with a simple mission: to create skincare that reconnects us with nature. We believe that what you put on your body should be as wholesome as what you put in it.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          Every bar is cured for 6 weeks and hand wrapped in eco‑friendly packaging. We use only essential oils, natural clays, and natural colorants. No synthetics, no shortcuts.
        </p>
        <Link to="/about" className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
          Read Our Story
        </Link>
      </section>
    </div>
  );
}