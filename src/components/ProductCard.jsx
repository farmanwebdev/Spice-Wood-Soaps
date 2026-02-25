import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { id, category, name, description, price, stock } = product;

  return (
    <div className="group relative bg-background/60  text-primary-foreground/60 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-border/40 overflow-hidden">
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
  {category.toUpperCase()}
</div>
        <Link to={`/product/${id}`} className="block">
          <h3 className="font-serif text-xl font-bold  text-primary-foreground mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <p className=" text-primary-foreground/60 text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="font-medium text-lg  text-primary-foreground">${price.toFixed(2)}</span>
            <span className="text-xs px-2 py-1 rounded-full bg-secondary/30  text-primary-foreground">
              {stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
            disabled={stock === 0}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}