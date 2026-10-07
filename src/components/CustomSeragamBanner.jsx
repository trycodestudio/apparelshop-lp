import React from 'react';
import { MessageCircle, CheckCircle, Palette, Tag, ShieldCheck } from 'lucide-react';
import { generateConciergeWhatsAppUrl } from '../utils/whatsapp';

export default function CustomSeragamBanner() {
  return (
    <section id="custom" className="py-14 sm:py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-blue-950/60 p-8 sm:p-12 rounded-2xl border border-blue-800 shadow-xl">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Layanan Konveksi & Custom Seragam
            </span>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
              Butuh Jersey Tim Olahraga atau Kemeja Seragam Lapangan Custom?
            </h2>

            <p className="text-blue-100 text-sm leading-relaxed max-w-2xl">
              Kami melayani pembuatan seragam olahraga (futsal, badminton, running, voli) dan kemeja lapangan/PDL untuk komunitas, instansi dinas, sekolah, atau perusahaan dengan spesifikasi custom:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-emerald-400" />
                <span>Bebas custom kombinasi warna bahan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-emerald-400" />
                <span>Bordir komputer & sablon digital awet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-emerald-400" />
                <span>Harga grosir khusus pesanan &ge; 12 pcs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-emerald-400" />
                <span>Bantuan simulasi desain mockup gratis</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end justify-center space-y-3">
            <a
              href={generateConciergeWhatsAppUrl("Custom Pembuatan Seragam Tim / Lapangan")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-7 py-4 rounded-xl text-sm font-bold shadow-lg transition-colors text-center"
            >
              <MessageCircle size={18} />
              <span>Tanya Harga Grosir Custom</span>
            </a>
            <span className="text-xs text-blue-300 text-center lg:text-right">
              Konsultasi desain & bahan gratis via WhatsApp
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
