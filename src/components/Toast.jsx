import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

export default function Toast() {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-up">
      <div className="bg-slate-900 text-white px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-2.5 text-xs font-medium border border-slate-700">
        <ShoppingBag size={15} className="text-blue-400" />
        <span>{toast.message}</span>
      </div>
    </div>
  );
}
