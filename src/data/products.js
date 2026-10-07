/**
 * Produk Pilihan: Baju Olahraga & Baju Lapangan (UMKM Apparel)
 */

export const CATEGORIES = [
  { id: "all", label: "Semua Produk" },
  { id: "olahraga", label: "Baju Olahraga & Jersey" },
  { id: "lapangan", label: "Kemeja PDL & Lapangan" },
  { id: "jaket", label: "Jaket & Rompi Lapangan" },
  { id: "celana", label: "Celana Training & Cargo" }
];

export const PRODUCTS = [
  {
    id: "app-01",
    name: "Jersey Olahraga Dryfit Milano Sublim",
    category: "olahraga",
    subtitle: "Cocok untuk Futsal, Sepakbola, Badminton & Running",
    price: 85000,
    originalPrice: 110000,
    badge: "Terlaris",
    stock: "Ready Satuan & Lusinan",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Navy Biru", hex: "#1e3a8a" },
      { name: "Hitam Solid", hex: "#0f172a" },
      { name: "Merah Sport", hex: "#dc2626" }
    ],
    material: "Dryfit Milano Premium (Poripori Zigzag, Lembut & Cepat Kering)",
    features: "Anti-bau keringat, jahitan overdeck kuat, tidak gerah saat lari / olahraga berat",
    description: "Jersey olahraga bahan Dryfit Milano dengan sirkulasi udara maksimal. Nyaman dipakai seharian untuk olahraga intens, latihan tim, atau seragam komunitas. Bisa custom sablon nama & nomor punggung.",
    sizeChart: "S: LD 96 cm | M: LD 100 cm | L: LD 104 cm | XL: LD 108 cm | XXL: LD 114 cm"
  },
  {
    id: "app-02",
    name: "Kemeja PDL Tactical Outdoor Quickdry",
    category: "lapangan",
    subtitle: "Kemeja Kerja Proyek, Surveyor & Komunitas Lapangan",
    price: 135000,
    originalPrice: 165000,
    badge: "Favorit Lapangan",
    stock: "Ready Stock",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["M", "L", "XL", "XXL", "3XL"],
    colors: [
      { name: "Hijau Army", hex: "#3f4e3c" },
      { name: "Krem Khaki", hex: "#c2b280" },
      { name: "Hitam Lapangan", hex: "#1a1a1a" }
    ],
    material: "Ripstop Tornado Katun Tebal & Tahan Robek",
    features: "Ventilasi jaring punggung (air flow), 4 kantong saku fungsional, lengan bisa dilipat berkancing",
    description: "Kemeja lapangan standar dinas dan ekspedisi. Dilengkapi sirkulasi udara jaring di punggung belakang agar tidak panas saat bekerja di bawah terik matahari. Kain serat ripstop terbukti awet dan tidak mudah sobek.",
    sizeChart: "M: LD 104 cm | L: LD 108 cm | XL: LD 112 cm | XXL: LD 118 cm"
  },
  {
    id: "app-03",
    name: "Kaos Polo Lapangan Lacoste Pique",
    category: "olahraga",
    subtitle: "Seragam Semi-Formal Komunitas, Panitia & Coach Olahraga",
    price: 75000,
    originalPrice: 90000,
    badge: "Best Value",
    stock: "Ready Stock",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Navy Donker", hex: "#1e293b" },
      { name: "Abu Misty", hex: "#94a3b8" },
      { name: "Putih Bersih", hex: "#ffffff" }
    ],
    material: "Lacoste Pique CVC 24s (Kain Rajut Adem & Nyerap Keringat)",
    features: "Kerah rajut tebal anti-melipat, kancing 2 baris rapi, jahitan samping rapi",
    description: "Kaos polo wangki dengan bahan Lacoste tebal berpori. Tampilan rapi untuk pelatih olahraga, panitia turnamen, staf lapangan, maupun seragam kerja kasual. Siap bordir logo perusahaan.",
    sizeChart: "S: LD 94 cm | M: LD 98 cm | L: LD 104 cm | XL: LD 110 cm | XXL: LD 116 cm"
  },
  {
    id: "app-04",
    name: "Jaket Parasut Windbreaker Outdoor Lapangan",
    category: "jaket",
    subtitle: "Tahan Angin & Gerimis Ringan untuk Motoris & Tim Luar Ruang",
    price: 125000,
    originalPrice: 155000,
    badge: "Water Repellent",
    stock: "Ready Stock",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "Hitam Doff", hex: "#111827" },
      { name: "Navy Gelap", hex: "#1e3a8a" },
      { name: "Hijau Botol", hex: "#14532d" }
    ],
    material: "Taslan Mikro Latex Waterproof + Furing Jaring Breathable",
    features: "Kantong saku samping beritsleting, penutup kepala (hoodie) serut, pergelangan karet elastis",
    description: "Jaket pelindung angin dan gerimis ringan yang praktis dan ringan dibawa. Bagian dalam berlapis jaring sehingga tidak lengket saat berkeringat.",
    sizeChart: "M: LD 106 cm | L: LD 110 cm | XL: LD 116 cm | XXL: LD 122 cm"
  },
  {
    id: "app-05",
    name: "Rompi Lapangan Safety Multi-Saku",
    category: "jaket",
    subtitle: "Rompi Pengawas Proyek, Lapangan, Jurnalis & Event",
    price: 95000,
    originalPrice: 120000,
    badge: "Banyak Saku",
    stock: "Ready Stock",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "Hitam", hex: "#18181b" },
      { name: "Krem Khaki", hex: "#d4a373" },
      { name: "Navy", hex: "#1e3a8a" }
    ],
    material: "American Drill Grade A (Tebal, Kokoh & Awet Bertahun-tahun)",
    features: "6 kantong fungsional dengan perekat velcro & resleting, slot pulpen & kartu ID",
    description: "Rompi serbaguna untuk kebutuhan staf lapangan, teknisi, fotografer, pengawas proyek, dan kegiatan outdoor. Jahitan bartek di setiap sudut saku agar tidak gampang jebol.",
    sizeChart: "M: LD 104 cm | L: LD 110 cm | XL: LD 116 cm | XXL: LD 122 cm"
  },
  {
    id: "app-06",
    name: "Celana Training Jogger Olahraga Dryfit",
    category: "celana",
    subtitle: "Latihan Lari, Gym, Senam & Celana Santai Komunitas",
    price: 80000,
    originalPrice: 95000,
    badge: "Elastis",
    stock: "Ready Stock",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "Hitam Garis Putih", hex: "#18181b" },
      { name: "Abu Tua", hex: "#374151" }
    ],
    material: "Lotto Tebal Elastis + Sablon Strip Rapi",
    features: "Pinggang karet serut fleksibel, 2 saku samping beritsleting aman untuk HP",
    description: "Celana training jogger yang nyaman untuk aktivitas senam, jogging pagi, atau seragam olahraga instansi. Bahan lentur dan tidak panas.",
    sizeChart: "M: Pinggang 68-88 cm | L: 72-94 cm | XL: 78-100 cm | XXL: 84-108 cm"
  },
  {
    id: "app-07",
    name: "Kemeja Seragam Lapangan American Drill",
    category: "lapangan",
    subtitle: "Kemeja Lengan Pendek / Panjang Staf Lapangan & Bengkel",
    price: 110000,
    originalPrice: 130000,
    badge: "Bisa Bordir",
    stock: "Ready Stock",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Biru Benhur", hex: "#2563eb" },
      { name: "Abu-Abu", hex: "#6b7280" },
      { name: "Hitam", hex: "#111827" }
    ],
    material: "American Drill 1919 Asli (Warna Tahan Cuci & Tebal Pas)",
    features: "2 saku dada berkancing tutup, jahitan rantai ganda, tempat pulpen di lengan",
    description: "Kemeja kerja seragam standar industri dan UMKM. Bahan tidak luntur walau sering dicuci dan mudah disetrika.",
    sizeChart: "S: LD 98 cm | M: LD 102 cm | L: LD 106 cm | XL: LD 112 cm | XXL: LD 118 cm"
  },
  {
    id: "app-08",
    name: "Kaos Olahraga Polos Dryfit Breathable",
    category: "olahraga",
    subtitle: "Kaos Latihan, Sepeda, Badminton & Running Harian",
    price: 49000,
    originalPrice: 65000,
    badge: "Ekonomis",
    stock: "Ready Ribuan Pcs",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Hitam", hex: "#111827" },
      { name: "Merah", hex: "#dc2626" },
      { name: "Biru", hex: "#2563eb" },
      { name: "Putih", hex: "#f8fafc" }
    ],
    material: "Dryfit Bintik Microfiber Anti-Bakteri",
    features: "Sangat ringan (130 GSM), mudah kering dalam 30 menit jemur",
    description: "Kaos polos olahraga serbaguna dengan harga ramah kantong. Pilihan tepat untuk seragam jalan sehat, turnamen massal, atau kaos ganti harian.",
    sizeChart: "S: LD 94 cm | M: LD 98 cm | L: LD 102 cm | XL: LD 108 cm | XXL: LD 114 cm"
  }
];
