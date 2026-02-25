import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';

// Initial cart data (matches the HTML example)
const initialCartItems = [
  {
    id: 1,
    name: 'Cinnamon Citrus',
    category: 'Citrus',
    price: 10.00,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1530631339105-4394c2a4d30b?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 5.00 : 0;
  const total = subtotal + shipping;

  return (
    <>
      <Helmet>
        <title>Your Cart | Spice Wood Soaps</title>
        <meta name="description" content="Review your items and proceed to checkout." />
      </Helmet>

      <div className="bg-secondary-foreground/70 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white font-serif text-4xl font-bold mb-10 text-center">Your Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items Column */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12 bg-secondary-foreground/40 border border-border/50 rounded-xl">
                  <p className="text-muted-foreground text-lg">Your cart is empty.</p>
                  <Link
                    to="/shop"
                    className="inline-block mt-4 text-primary hover:underline"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-secondary-foreground border border-border/50 rounded-xl shadow-sm"
                    >
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-grow">
                        <h3 className="font-serif text-lg font-bold text-white">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                        <div className="mt-2 text-white/50 font-medium">
                          ${item.price.toFixed(2)}
                        </div>
                      </div>

                      {/* Quantity Controls & Remove */}
                      <div className="flex items-center gap-4 mt-4 sm:mt-0">
                        <div className="flex items-center border border-border rounded-full bg-secondary-foreground/60 text-white">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:text-primary transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:text-primary transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-white hover:text-destructive transition-colors"
                          title="Remove item"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Clear Cart Button */}
                  <div className="flex justify-end pt-4">
                    <button
                      onClick={clearCart}
                      className="text-sm text-white/50 hover:text-destructive underline decoration-1 underline-offset-4"
                    >
                      Clear Cart
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Order Summary Column */}
            {cartItems.length > 0 && (
              <div className="lg:col-span-1">
                <div className="bg-secondary-foreground/40 p-8 rounded-2xl shadow-lg border border-border/50 sticky top-24">
                  <h3 className="text-white font-serif text-xl font-bold mb-6">Order Summary</h3>

                  <div className="space-y-4 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between text-white/50">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-white/50">
                      <span>Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-white/50">
                      <span>Taxes</span>
                      <span>Calculated at checkout</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-xl font-bold mb-8 text-white">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <Link
                    to="/checkout"
                    state={{ cartItems }} // Pass current cart items
                  >
                    <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-8 w-full rounded-full h-12 text-base shadow-lg shadow-primary/20">
                      Proceed to Checkout
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </Link>

                  <div className="mt-6 text-xs text-center text-white/50">
                    <p>Secure checkout powered by Stripe (Mock)</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}