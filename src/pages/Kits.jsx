import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import KitCard from '../components/KitCard';

const kits = [
  {
    id: 'starter',
    name: 'Starter Collection',
    description: 'Perfect for trying our range. Includes Cucumber Melon and Rose soap bars.',
    includes: ['Cucumber Melon', 'Rose'],
    price: 24.0,
    originalPrice: 28.23,
    savings: '15%',
  },
  {
    id: 'selfcare',
    name: 'Self Care Bundle',
    description: 'A complete spa experience at home. Includes three full size soap bars, a Tattoo Balm, and a soap dish.',
    includes: ['Cucumber Melon', 'Rose', 'Black Raspberry Vanilla', 'Tattoo Balm', 'Soap Dish'],
    price: 55.0,
    originalPrice: 64.70,
    savings: '15%',
  },
  {
    id: 'gift',
    name: 'Gift Set',
    description: 'The ultimate gift for someone special.',
    includes: [
      'Amaretto Sour', 'Margarita', 'Lavender Patchouli', 'Black Raspberry Vanilla',
      'French Vanilla Coffee', 'Random Sugar Scrub', 'Soap Dish', 'Beard Balm', 'Vanilla Balm'
    ],
    price: 70.0,
    originalPrice: 82.35,
    savings: '15%',
  },
  {
    id: 'mystery',
    name: 'Mystery Kit',
    description: 'Love surprises? We’ll hand pick a curated selection of our best products just for you.',
    includes: ['5 Mystery Soaps', '3 Mystery Balms', '2 Mystery Sugar Scrubs', 'Soap Dish'],
    price: 90.0,
    originalPrice: 105.88,
    savings: '15%',
  },
];

export default function Kits() {
  return (
    <>
      <Helmet>
        <title>Kits & Bundles | Spice Wood Soaps</title>
        <meta name="description" content="Curated gift sets and value bundles. Save 15% on our handcrafted soap collections." />
      </Helmet>
      <div className="bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-2">BUNDLES & SAVINGS</h2>
            <h1 className="font-serif text-5xl font-bold text-primary">Our Kits</h1>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Curated collections for gifting or treating yourself. Each kit is thoughtfully assembled and beautifully packaged.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {kits.map(kit => (
              <KitCard key={kit.id} kit={kit} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg mb-4">Looking for individual products?</p>
            <Link to="/shop" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
              Browse All Products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}