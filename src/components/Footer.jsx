import React from 'react';
import { STORE_CONFIG } from '../data/storeConfig';
import { generateConciergeWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, MapPin, Truck, ShieldCheck, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-extrabold text-lg">
                P
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {STORE_CONFIG.brandName}
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Produsen dan konveksi spesialis baju olahraga, jersey printing sublimasi, dan kemeja seragam lapangan PDL berkualitas. Melayani pengiriman ke seluruh wilayah Indonesia.
            </p>

            <div className="pt-1 text-xs text-slate-400 flex items-center gap-2">
              <MapPin size={14} className="text-blue-400 flex-shrink-0" />
              <span>{STORE_CONFIG.city}</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Menu Cepat
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#katalog" className="hover:text-white transition-colors">Katalog Baju Olahraga & Lapangan</a></li>
              <li><a href="#keunggulan" className="hover:text-white transition-colors">Keunggulan Bahan & Jahitan</a></li>
              <li><a href="#custom" className="hover:text-white transition-colors">Layanan Custom Seragam / Lusinan</a></li>
              <li><a href="#cara-order" className="hover:text-white transition-colors">Cara Pemesanan via WhatsApp</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Pertanyaan Umum (FAQ)</a></li>
            </ul>
          </div>

          {/* Contact & WA */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Kontak Layanan
            </h4>
            <p className="text-xs text-slate-400">
              Pemesanan dan konsultasi dilayani langsung oleh tim Admin Pratama Apparel melalui WhatsApp:
            </p>
            <a
              href={generateConciergeWhatsAppUrl("Inquiry dari Website")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg text-xs font-bold transition-colors"
            >
              <MessageCircle size={16} />
              <span>WhatsApp: {STORE_CONFIG.whatsappDisplayNumber}</span>
            </a>
            <div className="text-[11px] text-slate-500 pt-1">
              Pengiriman via: JNE, J&T, SiCepat, Lion Parcel, Dakota Kargo, Indah Cargo.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            &copy; {new Date().getFullYear()} {STORE_CONFIG.brandName}. Hak Cipta Dilindungi.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} className="text-emerald-500" />
              Transaksi Aman Langsung ke WhatsApp
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
