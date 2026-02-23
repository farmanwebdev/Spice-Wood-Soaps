import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import { Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';

// Mock product data (extend as needed)
const allProducts = [
  { id: 1, category: 'Woody', name: 'Spiced Sandalwood', description: 'A warm, woody blend of sandalwood and exotic spices.', price: 12.0, stock: 5, type: 'soaps' },
  { id: 2, category: 'Earthy', name: 'Cedarwood & Sage', description: 'Fresh and earthy, capturing the essence of a forest walk.', price: 11.5, stock: 3, type: 'soaps' },
  { id: 3, category: 'Citrus', name: 'Cinnamon Citrus', description: 'Invigorating orange and lemon zest mixed with a spicy kick of cinnamon.', price: 10.0, stock: 8, type: 'soaps' },
  { id: 4, category: 'Floral', name: 'Lavender Mist', description: 'Calming lavender essential oils blended with moisturizing shea butter.', price: 13.0, stock: 4, type: 'soaps' },
  { id: 5, category: 'Citrus', name: 'Lemon Poppyseed', description: 'A bright, zesty bar with organic lemon zest and poppy seeds.', price: 12.0, stock: 2, type: 'soaps' },
  // Add more for other tabs if needed
];

const tabs = [
  { value: 'soaps', label: 'Soaps' },
  { value: 'balms', label: 'Body Balm' },
  { value: 'lipbalm', label: 'Lip Balm' },
  { value: 'beard', label: 'Beard Care' },
  { value: 'dishes', label: 'Soap Dishes' },
  { value: 'scrubs', label: 'Sugar Scrubs' },
];

export default function Shop() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('soaps');

  const filteredProducts = allProducts.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (activeTab === 'soaps' ? p.type === 'soaps' : true) // simplistic filter
  );

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-serif text-5xl font-bold mb-4 text-foreground">The Collection</h1>
          <p className="text-muted-foreground text-lg">
            Explore our range of handcrafted natural products, each with a unique personality and skin-loving benefits.
          </p>
        </div>

        <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
          <Tabs.List className="inline-flex h-10 items-center rounded-md p-1 text-muted-foreground w-full max-w-md mx-auto justify-center bg-card/50 backdrop-blur-sm">
            {tabs.map(tab => (
              <Tabs.Trigger
                key={tab.value}
                value={tab.value}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>

        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search soaps..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white dark:bg-card"
              aria-label="Search products"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-muted-foreground py-12">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}