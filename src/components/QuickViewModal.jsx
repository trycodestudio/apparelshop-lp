import React, { useState, useEffect } from 'react';
import { X, MessageCircle, ShoppingBag, Check, ShieldCheck, Ruler, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatIDR } from '../utils/formatters';
import { generateProductWhatsAppUrl } from '../utils/whatsapp';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  
  const product = quickViewProduct;
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showSizeTable, setShowSizeTable] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedImage(0);
      setSelectedSize(product.sizes[1] || product.sizes[0] || 'L');
      setSelectedColor(product.colors[0]?.name || 'Standar');
      setQuantity(1);
      setShowSizeTable(false);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setQuickViewProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setQuickViewProduct]);

  if (!product) return null;

  const currentImageUrl = (product.gallery && product.gallery[selectedImage]) || product.image;
  const totalPrice = product.price * quantity;

  const handleOrderWhatsApp = () => {
    const url = generateProductWhatsAppUrl(product, selectedSize, selectedColor, quantity);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      
      {/* Modal Dialog Card */}
      <div
        className="relative bg-white w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl shadow-2xl border border-slate-200 my-auto text-slate-900"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors"
          aria-label="Tutup"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          
          {/* Left: Product Image */}
          <div className="space-y-3">
            <div className="relative aspect-[4/3] rounded-xl bg-slate-100 overflow-hidden border border-slate-200">
              <img
                src={currentImageUrl}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {product.badge && (
                <div className="absolute top-3 left-3">
                  <span className="bg-amber-500 text-slate-900 text-xs font-black uppercase px-2.5 py-1 rounded shadow">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails if any */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex gap-2">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-16 rounded-lg border overflow-hidden transition-all ${
                      selectedImage === idx ? 'border-blue-600 ring-2 ring-blue-600/30' : 'border-slate-200 opacity-70'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Guarantees Under Image */}
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-[11px] text-slate-600 space-y-1">
              <p className="flex items-center gap-1.5 font-medium text-slate-800">
                <ShieldCheck size={14} className="text-emerald-600" />
                Garansi retur jika jahitan cacat atau ukuran salah kirim
              </p>
              <p className="flex items-center gap-1.5 font-medium text-slate-800">
                <Truck size={14} className="text-blue-600" />
                Bisa kirim ke seluruh kota dan kabupaten di Indonesia
              </p>
            </div>
          </div>

          {/* Right: Specifications & Ordering */}
          <div className="flex flex-col justify-between space-y-5">
            
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                  {product.category === 'olahraga' ? 'Apparel Olahraga' : 'Apparel Lapangan / Kerja'}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mt-0.5">
                  {product.name}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  {product.subtitle}
                </p>
              </div>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 pb-3 border-b border-slate-200">
                <span className="text-2xl font-black text-slate-900">
                  {formatIDR(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-400 line-through">
                    {formatIDR(product.originalPrice)}
                  </span>
                )}
                <span className="ml-auto text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {product.stock}
                </span>
              </div>

              {/* Material Detail */}
              <div className="text-xs space-y-1.5 text-slate-700">
                <p><strong>Bahan:</strong> {product.material}</p>
                <p><strong>Fitur:</strong> {product.features}</p>
              </div>

              {/* Size Selector */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">Pilih Ukuran:</span>
                  <button
                    type="button"
                    onClick={() => setShowSizeTable(!showSizeTable)}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-[11px] font-semibold"
                  >
                    <Ruler size={13} />
                    <span>Lihat Panduan Ukuran</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-10 py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all border ${
                        selectedSize === size
                          ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-300 hover:border-blue-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Size Table Popup */}
                {showSizeTable && (
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-[11px] text-blue-900 space-y-1 mt-2">
                    <p className="font-bold">Panduan Ukuran (Standar Lokal):</p>
                    <p className="font-mono">{product.sizeChart}</p>
                    <p className="text-[10px] text-blue-700 italic pt-1">
                      *Toleransi jahitan konveksi &plusmn; 1-2 cm. Butuh ukuran jumbo (3XL ke atas)? Tanyakan ke CS.
                    </p>
                  </div>
                )}
              </div>

              {/* Color Selector */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <div className="text-xs font-bold text-slate-800">
                    Pilihan Warna: <span className="font-normal text-slate-600">{selectedColor}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map(col => (
                      <button
                        key={col.name}
                        type="button"
                        onClick={() => setSelectedColor(col.name)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs border transition-all ${
                          selectedColor === col.name
                            ? 'border-blue-600 bg-blue-50 font-bold text-blue-900'
                            : 'border-slate-300 hover:border-slate-400 text-slate-700'
                        }`}
                      >
                        <span
                          className="w-3 h-3 rounded-full border border-black/20"
                          style={{ backgroundColor: col.hex }}
                        />
                        <span>{col.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Stepper */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-bold text-slate-800 block">Jumlah:</span>
                <div className="inline-flex items-center border border-slate-300 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-sm font-bold text-slate-700"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-xs font-bold text-slate-800">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-sm font-bold text-slate-700"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-3 border-t border-slate-200">
              
              {/* WhatsApp Direct Order Button */}
              <button
                type="button"
                onClick={handleOrderWhatsApp}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle size={18} />
                <span>Pesan Sekarang via WhatsApp ({formatIDR(totalPrice)})</span>
              </button>

              {/* Add to Cart */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingBag size={15} />
                <span>Tambah ke Tas Belanja</span>
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
