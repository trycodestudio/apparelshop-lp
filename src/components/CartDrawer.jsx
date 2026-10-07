import React, { useEffect } from 'react';
import { X, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatIDR } from '../utils/formatters';
import { generateCartWhatsAppUrl } from '../utils/whatsapp';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    clearCart
  } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const handleCheckoutWhatsApp = () => {
    const url = generateCartWhatsAppUrl(cartItems, totalPrice);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col text-slate-900">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-blue-600" />
              <h2 className="font-bold text-lg text-slate-900">
                Daftar Pesanan ({totalItems} item)
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition-colors"
              aria-label="Tutup"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <div className="w-14 h-14 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                  <ShoppingBag size={24} />
                </div>
                <p className="font-bold text-slate-800">Daftar pesanan masih kosong</p>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Silakan pilih produk baju olahraga atau kemeja lapangan di katalog untuk dipesan.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Pilih Produk
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.size}-${item.color}`}
                  className="flex gap-3 pb-4 border-b border-slate-100 last:border-b-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg border border-slate-200 bg-slate-100 flex-shrink-0"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-sm text-slate-900 line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id, item.size, item.color)}
                          className="text-slate-400 hover:text-red-600 transition-colors p-1"
                          title="Hapus"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      <div className="text-xs text-slate-500 mt-0.5">
                        Ukuran: <strong className="text-slate-800">{item.size}</strong> | Warna: <strong className="text-slate-800">{item.color}</strong>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="inline-flex items-center border border-slate-300 rounded text-xs">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                          className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700"
                        >
                          -
                        </button>
                        <span className="px-3 py-0.5 font-bold text-slate-800">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                          className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-sm font-black text-slate-900">
                        {formatIDR(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Jumlah Barang</span>
                  <span>{totalItems} pcs</span>
                </div>
                <div className="flex justify-between text-base font-bold text-slate-900 pt-1 border-t border-slate-200">
                  <span>Total Estimasi</span>
                  <span className="text-lg font-black text-blue-600">{formatIDR(totalPrice)}</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  *Ongkos kirim akan dihitung oleh admin saat konfirmasi alamat di WhatsApp.
                </p>
              </div>

              {/* WhatsApp Checkout Button */}
              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle size={18} />
                <span>Kirim Pesanan ke WhatsApp</span>
              </button>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <button
                  type="button"
                  onClick={clearCart}
                  className="hover:text-red-600 underline"
                >
                  Kosongkan Tas
                </button>
                <span>Respon cepat dari Admin</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
