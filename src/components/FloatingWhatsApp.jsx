import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';
import { generateConciergeWhatsAppUrl } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="bg-white text-slate-800 border border-slate-200 shadow-lg px-3.5 py-2 rounded-xl text-xs max-w-xs flex items-center gap-2 animate-fade-in">
          <div>
            <span className="font-bold text-slate-900 block text-[11px]">Butuh Bantuan Ukuran / Pesan?</span>
            <span className="text-[11px] text-slate-500">Klik untuk chat langsung dengan CS via WA</span>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-700 p-0.5"
            aria-label="Tutup"
          >
            <X size={13} />
          </button>
        </div>
      )}

      {/* Main WA Floating Pill */}
      <a
        href={generateConciergeWhatsAppUrl("Tanya Produk via Tombol Melayang")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105"
        title="Chat WhatsApp Sekarang"
      >
        <MessageCircle size={22} className="text-white" />
        <span className="text-xs font-bold tracking-wide pr-1">
          Chat WhatsApp
        </span>
      </a>

    </div>
  );
}
