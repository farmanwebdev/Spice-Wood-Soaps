import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Helmet } from 'react-helmet-async';

export default function Success() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <>
      <Helmet><title>Order Successful | Spice Wood Soaps</title></Helmet>
      <div className="bg-background py-12">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h1 className="font-serif text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your order has been placed successfully. You will receive a confirmation email shortly.
          </p>
          <Link
            to="/shop"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
}