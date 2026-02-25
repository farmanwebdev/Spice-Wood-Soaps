import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Gift, ShoppingCart } from 'lucide-react';

// Kit data (matches the image)
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
    description: 'The ultimate gift for someone special. Includes five handcrafted soaps, a random sugar scrub, a soap dish, a beard balm, and a Vanilla Balm.',
    includes: [
      'Amaretto Sour',
      'Margarita',
      'Lavender Patchouli',
      'Black Raspberry Vanilla',
      'French Vanilla Coffee',
      'Random Sugar Scrub',
      'Soap Dish',
      'Beard Balm',
      'Vanilla Balm',
    ],
    price: 70.0,
    originalPrice: 82.35,
    savings: '15%',
  },
  {
    id: 'mystery',
    name: 'Mystery Kit',
    description: 'Love surprises? We’ll hand pick a curated selection of our best products just for you. Includes 5 soaps, 3 balms, 2 sugar scrubs, and a soap dish.',
    includes: ['5 Mystery Soaps', '3 Mystery Balms', '2 Mystery Sugar Scrubs', 'Soap Dish'],
    price: 90.0,
    originalPrice: 105.88,
    savings: '15%',
  },
];

export default function Kits() {
  const [activeTab, setActiveTab] = useState('soap');

  return (
    <>
      <Helmet>
        <title>Kits & Bundles | Spice Wood Soaps</title>
        <meta name="description" content="Curated gift sets and value bundles. Save 15% on our handcrafted soap collections." />
      </Helmet>

      <div className="py-16 bg-secondary-foreground/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider text-sm uppercase">
              Bundles & Savings
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 text-card">
              Our Kits
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Curated collections for gifting or treating yourself. Each kit is thoughtfully assembled and beautifully packaged.
            </p>
          </div>

          {/* Tabs */}
          <div className="w-full">
            <div className="inline-flex items-center rounded-md text-muted-foreground w-full justify-start mb-8 bg-card/50 backdrop-blur-sm flex-wrap h-auto gap-1 p-1">
              <button
                onClick={() => setActiveTab('soap')}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all flex-1 min-w-[100px] ${
                  activeTab === 'soap'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'hover:bg-primary/10'
                }`}
              >
                Soap Kits
              </button>
              <button
                onClick={() => setActiveTab('custom')}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all flex-1 min-w-[100px] ${
                  activeTab === 'custom'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'hover:bg-primary/10'
                }`}
              >
                Custom Kit
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'soap' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {kits.map((kit) => (
                  <div
                    key={kit.id}
                    className="bg-secondary-foreground/60 rounded-xl border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                  >
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <Gift className="w-5 h-5 text-primary" />
                        <span className="text-xs font-medium text-primary-foreground/50 uppercase tracking-wider">
                          Soap Kit
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-2">
                        {kit.name}
                      </h3>
                      <p className="text-primary-foreground/60 mb-4">{kit.description}</p>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-primary-foreground mb-2">Includes:</p>
                        <ul className="text-sm text-primary-foreground/60 space-y-1">
                          {kit.includes.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-medium text-xl text-primary">
                            ${kit.price.toFixed(2)}
                          </span>
                          <span className="text-xs px-2 py-1 rounded-full bg-secondary/30 text-secondary-foreground">
                            Save {kit.savings}
                          </span>
                        </div>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'custom' && (
              <div className="text-center py-12 text-muted-foreground">
                Custom Kit content coming soon.
              </div>
            )}
          </div>

          {/* Browse All Products */}
          <div className="mt-16 text-center">
            <p className="text-primary-foreground/60  mb-4">Looking for individual products?</p>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input text-primary-foreground/60 bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}