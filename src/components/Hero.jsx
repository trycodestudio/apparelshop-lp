import React from 'react';
import { MessageCircle, ShieldCheck, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';
import { generateConciergeWhatsAppUrl } from '../utils/whatsapp';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 py-12 sm:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold rounded-full">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>Konveksi & Apparel Terpercaya untuk Tim & Lapangan</span>
            </div>

            {/* Direct Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Baju Olahraga & Kemeja Lapangan <span className="text-blue-600">Kuat, Adem, & Siap Pakai.</span>
            </h1>

            {/* Subhead */}
            <p className="text-slate-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Solusi apparel untuk tim olahraga, instansi, komunitas outdoor, dan pekerja lapangan. Dibuat dengan bahan berpori anti-gerah dan jahitan rantai kokoh. Bisa beli satuan atau custom seragam lusinan.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#katalog"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <span>Lihat Katalog Produk</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={generateConciergeWhatsAppUrl("Konsultasi Seragam Tim / Lapangan")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle size={18} />
                <span>Order Cepat via WhatsApp</span>
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-medium border-t border-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                <span>Bisa Pesan Satuan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                <span>Bisa Sablon & Bordir</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Truck size={16} className="text-blue-600 flex-shrink-0" />
                <span>Kirim Se-Indonesia</span>
              </div>
            </div>

          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              
              <img
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=80"
                alt="Apparel Olahraga & Seragam Lapangan"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-slate-200 shadow-md flex items-center justify-between">
                <div>
                  <span className="block text-[11px] font-bold text-blue-600 uppercase tracking-wider">Spesialis Apparel</span>
                  <span className="block font-bold text-slate-900 text-sm">Jersey Olahraga & PDL Tactical</span>
                </div>
                <a
                  href="#katalog"
                  className="bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors"
                >
                  Pilih Produk
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
