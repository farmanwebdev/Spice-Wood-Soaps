import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Lock } from 'lucide-react';
import { useLocation, Navigate } from 'react-router-dom'; // added

export default function Checkout() {
  const location = useLocation();
  const cartItems = location.state?.cartItems; // get cart items from navigation state

  // If no cart items (e.g., direct access), redirect to cart
  if (!cartItems || cartItems.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  // Form state (unchanged)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment processing... (demo)');
  };

  // Calculate totals from the passed cartItems
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 5.00 : 0;
  const total = subtotal + shipping;

  return (
    <>
      <Helmet>
        <title>Checkout | Spice Wood Soaps</title>
        <meta name="description" content="Complete your purchase securely." />
      </Helmet>

      <div className="bg-secondary-foreground/70 min-h-screen py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold mb-8 text-center text-white">Checkout</h1>

          <div className="text-white bg-secondary-foreground/40 p-8 rounded-2xl shadow-lg border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information - unchanged */}
              <div className="space-y-4">
                <h2 className="font-serif text-xl font-semibold">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      data-testid="input-first-name"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="Jane"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      data-testid="input-last-name"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      data-testid="input-email"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="jane@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      data-testid="input-phone"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="(904) 555-1234"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address - unchanged */}
              <div className="space-y-4">
                <h2 className="font-serif text-xl font-semibold">Shipping Address</h2>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Street Address</label>
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    data-testid="input-address"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="123 Main St, Apt 4B"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-2 col-span-2 md:col-span-2">
                    <label className="text-sm font-medium">City</label>
                    <input
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      data-testid="input-city"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="Saint Augustine"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">State</label>
                    <input
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      data-testid="input-state"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="FL"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Zip Code</label>
                    <input
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      data-testid="input-zip-code"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="32084"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Order Summary - now uses passed cartItems */}
              <div className="bg-secondary/10 p-6 rounded-xl space-y-3">
                <h3 className="font-medium">Order Summary</h3>
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between text-sm text-muted-foreground">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="flex justify-between text-sm text-muted-foreground border-t border-border/30 pt-2">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-border/50 pt-3">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                data-testid="button-checkout"
                className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 px-8 w-full rounded-full h-12 text-base"
              >
                <Lock className="mr-2 h-4 w-4" />
                Proceed to Payment - ${total.toFixed(2)}
              </button>

              <p className="text-xs text-center text-muted-foreground">
                You will be redirected to Stripe for secure payment processing.
              </p>
            </form>
          </div>

          {/* Return to Cart Link */}
          <div className="text-center mt-6">
            <a href="/cart" className="text-sm text-primary hover:underline">
              ← Return to Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}