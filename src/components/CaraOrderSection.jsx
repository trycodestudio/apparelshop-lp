import React from 'react';
import { MessageCircle, ShoppingBag, Send, Truck, ShieldCheck, Clock } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';
import { generateConciergeWhatsAppUrl } from '../utils/whatsapp';

export default function CaraOrderSection() {
  const steps = [
    {
      num: "1",
      title: "Pilih Produk & Ukuran",
      desc: "Lihat katalog kami dan tentukan ukuran Anda (S sampai 3XL) menggunakan panduan size chart."
    },
    {
      num: "2",
      title: "Klik Pesan via WhatsApp",
      desc: "Format nama barang, ukuran, dan jumlah akan otomatis tersusun rapi di aplikasi WhatsApp Anda."
    },
    {
      num: "3",
      title: "Konfirmasi & Pengiriman",
      desc: "Admin kami menghitung ongkos kirim termurah, mengirimkan rekening, dan paket segera dikirim setelah transfer."
    }
  ];

  return (
    <section id="cara-order" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
            Mudah & Tanpa Ribet
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Cara Order Cepat Lewat WhatsApp
          </h2>
          <p className="text-slate-600 text-sm">
            Tidak perlu daftar akun atau isi formulir panjang. Transaksi langsung terhubung dengan admin kami.
          </p>
        </div>

        {/* 3 Langkah */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative space-y-3"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center text-lg">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Banner Admin WA */}
        <div className="bg-emerald-700 text-white p-6 sm:p-8 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-200 text-xs font-bold uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse"></span>
              <span>Admin Online & Siap Melayani</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Butuh Info Stok Cepat atau Pertanyaan Khusus?
            </h3>
            <p className="text-xs text-emerald-100 max-w-lg">
              Hubungi WhatsApp kami di <strong>{STORE_CONFIG.whatsappDisplayNumber}</strong>. Jam operasional: Senin - Sabtu (08.00 - 21.00 WIB).
            </p>
          </div>

          <a
            href={generateConciergeWhatsAppUrl("Tanya Admin Langsung")}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap bg-white hover:bg-slate-100 text-emerald-800 px-6 py-3.5 rounded-lg text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 transition-colors shadow"
          >
            <MessageCircle size={17} />
            <span>Chat Admin WhatsApp Sekarang</span>
          </a>
        </div>

      </div>
    </section>
  );
}
