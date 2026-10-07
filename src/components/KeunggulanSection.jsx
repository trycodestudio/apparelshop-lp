import React from 'react';
import { Wind, Scissors, Users, Palette, CheckCircle, Award } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';

export default function KeunggulanSection() {
  const points = [
    {
      icon: <Wind size={24} className="text-blue-600" />,
      title: "Bahan Adem & Anti-Gerah",
      desc: "Menggunakan bahan Dryfit berpori untuk jersey olahraga dan katun Ripstop/American Drill yang adem untuk kemeja lapangan."
    },
    {
      icon: <Scissors size={24} className="text-blue-600" />,
      title: "Jahitan Kuat Standar Garmen",
      desc: "Jahitan rantai ganda dan bartek di titik rawan beban (saku dan ketiak) agar awet dipakai aktivitas berat dan outdoor."
    },
    {
      icon: <Users size={24} className="text-blue-600" />,
      title: "Bisa Pesan Satuan & Partai",
      desc: "Tidak ada minimum order wajib untuk barang ready stock. Untuk seragam tim / kantor, tersedia harga grosir spesial."
    },
    {
      icon: <Palette size={24} className="text-blue-600" />,
      title: "Bisa Sablon & Bordir Komputer",
      desc: "Layanan penambahan logo instansi, nama punggung, dan sponsor dengan sablon DTF anti-pecah atau bordir komputer rapi."
    }
  ];

  return (
    <section id="keunggulan" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Kelebihan Produk Kami
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Kenapa Banyak Tim & Pekerja Lapangan Memilih Kami?
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Kami fokus pada kenyamanan dan daya tahan pakaian untuk Anda yang aktif bergerak di lapangan maupun saat berolahraga.
          </p>
        </div>

        {/* Grid 4 Keunggulan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:shadow-md hover:border-blue-300 transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                {p.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
