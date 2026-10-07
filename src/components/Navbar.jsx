import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, PhoneCall } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';
import { useCart } from '../context/CartContext';
import { generateConciergeWhatsAppUrl } from '../utils/whatsapp';

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Katalog Produk', href: '#katalog' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Custom Seragam', href: '#custom' },
    { label: 'Cara Order', href: '#cara-order' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Banner Promo */}
      <div className="bg-slate-900 text-slate-100 text-xs py-2 px-4 text-center font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{STORE_CONFIG.announcement}</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Mobile Hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 -ml-2 text-slate-700 hover:text-blue-600 transition-colors"
                aria-label="Menu Navigasi"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Brand Logo */}
            <div className="flex items-center gap-3">
              <a href="#" className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-extrabold text-xl shadow-sm">
                  P
                </div>
                <div>
                  <span className="block font-bold text-lg sm:text-xl text-slate-900 tracking-tight leading-none">
                    {STORE_CONFIG.brandName}
                  </span>
                  <span className="block text-[11px] font-medium text-slate-500 mt-0.5">
                    Apparel Olahraga & Lapangan
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions: WA Button & Cart */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              
              {/* WhatsApp Fast Button */}
              <a
                href={generateConciergeWhatsAppUrl("Tanya Produk Langsung")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-lg text-xs font-bold transition-colors shadow-sm"
              >
                <MessageCircle size={15} />
                <span>Chat WhatsApp</span>
              </a>

              {/* Shopping Bag Trigger */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-slate-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-100"
                aria-label="Buka Keranjang Belanja"
                title="Buka Daftar Pesanan"
              >
                <ShoppingBag size={22} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white animate-bounce">
                    {totalItems}
                  </span>
                )}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-5 py-4 space-y-3 animate-fade-in shadow-lg">
            <nav className="flex flex-col space-y-2">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-slate-800 hover:text-blue-600 py-1.5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-100">
              <a
                href={generateConciergeWhatsAppUrl("Hubungi CS via Menu HP")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 rounded-lg text-xs font-bold"
              >
                <MessageCircle size={16} />
                <span>Chat Admin WhatsApp ({STORE_CONFIG.whatsappDisplayNumber})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
