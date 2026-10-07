import React, { useState } from 'react';
import { Eye, MessageCircle, ShoppingBag, CheckCircle } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { formatIDR } from '../utils/formatters';
import { generateProductWhatsAppUrl } from '../utils/whatsapp';
import { useCart } from '../context/CartContext';

export default function CollectionGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { setQuickViewProduct, addToCart } = useCart();

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="katalog" className="py-14 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Katalog Siap Order
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Pilihan Baju Olahraga & Lapangan
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md">
            Pilih model yang Anda butuhkan. Klik <strong>Pesan via WhatsApp</strong> untuk memesan langsung atau klik <strong>Detail</strong> untuk melihat panduan ukuran.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all border ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {cat.label}
              {cat.id === 'all' ? ` (${PRODUCTS.length})` : ''}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Badge Tag */}
                {product.badge && (
                  <div className="absolute top-2 left-2">
                    <span className="bg-amber-500 text-slate-900 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-sm">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Quick Detail Eye Button */}
                <button
                  type="button"
                  onClick={() => setQuickViewProduct(product)}
                  className="absolute bottom-2 right-2 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-lg shadow text-xs font-semibold flex items-center gap-1 transition-colors"
                  title="Lihat Detail & Ukuran"
                >
                  <Eye size={14} />
                  <span>Detail</span>
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                
                <div>
                  <h3
                    onClick={() => setQuickViewProduct(product)}
                    className="font-bold text-slate-900 text-base leading-snug hover:text-blue-600 cursor-pointer line-clamp-1"
                  >
                    {product.name}
                  </h3>
                  
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                    {product.subtitle}
                  </p>

                  {/* Material highlight */}
                  <div className="mt-2 text-[11px] text-slate-600 bg-slate-100 px-2 py-1 rounded inline-block">
                    Bahan: <span className="font-semibold text-slate-800">{product.material.split('(')[0]}</span>
                  </div>
                </div>

                {/* Price and Action */}
                <div className="pt-2 border-t border-slate-100 space-y-3">
                  
                  {/* Price */}
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-lg font-black text-slate-900">
                        {formatIDR(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-slate-400 line-through ml-2">
                          {formatIDR(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 font-bold px-2 py-0.5 rounded border border-emerald-200">
                      {product.stock}
                    </span>
                  </div>

                  {/* Buttons Action */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={generateProductWhatsAppUrl(product, product.sizes[1] || 'L')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-2 rounded-lg transition-colors shadow-sm"
                      title="Pesan langsung lewat WhatsApp"
                    >
                      <MessageCircle size={15} />
                      <span>Order WA</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => addToCart(product, product.sizes[1] || 'L', product.colors[0]?.name, 1)}
                      className="inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2 px-2 rounded-lg transition-colors border border-slate-300"
                      title="Masukkan ke daftar pesanan"
                    >
                      <ShoppingBag size={14} />
                      <span>+ Ke Tas</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
