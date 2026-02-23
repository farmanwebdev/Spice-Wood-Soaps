import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function KitCard({ kit }) {
  const { addToCart } = useCart();
  const { id, name, description, includes, price, originalPrice, savings } = kit;

  return (
    <div className="bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border/40 p-6">
      <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{name}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold text-sm uppercase tracking-wide mb-2">Includes:</h4>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          {includes.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          <span className="text-2xl font-bold text-primary">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="ml-2 text-sm line-through text-muted-foreground">${originalPrice.toFixed(2)}</span>
          )}
          {savings && (
            <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Save {savings}</span>
          )}
        </div>
        <button
          onClick={() => addToCart({ ...kit, price, quantity: 1, type: 'kit' })}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}