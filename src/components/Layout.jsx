import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useCart } from '../context/CartContext';

export default function Layout() {
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen font-sans text-foreground bg-background">
      <Header cartCount={cartCount} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}