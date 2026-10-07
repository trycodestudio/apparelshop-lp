import React from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeunggulanSection from './components/KeunggulanSection';
import CollectionGrid from './components/CollectionGrid';
import CustomSeragamBanner from './components/CustomSeragamBanner';
import CaraOrderSection from './components/CaraOrderSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import QuickViewModal from './components/QuickViewModal';
import CartDrawer from './components/CartDrawer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Toast from './components/Toast';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          <Hero />
          <KeunggulanSection />
          <CollectionGrid />
          <CustomSeragamBanner />
          <CaraOrderSection />
          <FAQSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Modals & Overlays */}
        <QuickViewModal />
        <CartDrawer />
        <FloatingWhatsApp />
        <Toast />
      </div>
    </CartProvider>
  );
}
