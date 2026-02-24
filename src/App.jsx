import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Kits from './pages/Kits';
import OurStory from './pages/OurStory';
import MyCreations from './pages/MyCreations';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Success from './pages/Success';

function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="kits" element={<Kits />} />
              <Route path="about" element={<OurStory />} />
              <Route path="gallery" element={<MyCreations />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
              <Route path="success" element={<Success />} />
            </Route>
          </Routes>
        </HashRouter>
      </CartProvider>
    </HelmetProvider>
  );
}

export default App;