# PRATAMA APPAREL — Landing Page Baju Olahraga & Lapangan (UMKM)

Landing page toko apparel & konveksi yang simpel, bersih (*clean*), ramah pengguna (*user-friendly*), dan dirancang khusus untuk segmen **UMKM Baju Olahraga & Baju Lapangan (Jersey, Kemeja PDL, Polo, Jaket Outdoor, Celana Training)**.

Seluruh transaksi dan pemesanan (satuan maupun lusinan/custom) terintegrasi langsung ke **WhatsApp** dengan format pesan otomatis yang rapi dan siap diproses oleh admin.

---

## ⚡ Fitur Utama & Kelebihan

1. **Desain Simpel, Bersih & Profesional (Fokus Konversi)**
   - Tidak ribet dan tidak terlalu berbelit-belit. Pengunjung langsung melihat produk, bahan, ukuran, dan harga.
   - Tipografi modern dan sangat jelas terbaca (*Plus Jakarta Sans*).
   - Skema warna maskulin, sporty & lapangan (*Navy, Slate, Royal Blue, White, Emerald WhatsApp*).

2. **Pemesanan Fleksibel via WhatsApp (Tanpa Form Rumit)**
   - **Order Satuan Langsung**: Pembeli tinggal klik tombol "Order WA" di setiap produk untuk langsung mengirim rincian produk, ukuran, dan warna ke chat WhatsApp.
   - **Quick View Modal + Size Chart**: Pembeli dapat melihat foto produk, spesifikasi bahan (Dryfit, Ripstop, Drill), panduan ukuran (S sampai 3XL), dan pilihan warna sebelum order.
   - **Tas Belanja (Multi-Item Checkout)**: Pembeli bisa memilih beberapa produk sekaligus (misal: jersey + celana + kemeja lapangan) dan mengirim seluruh daftar belanja ke WhatsApp dalam 1 pesan rapi.
   - **Layanan Custom Seragam / Lusinan**: Banner konsultasi pembuatan jersey tim olahraga dan kemeja bordir komunitas dengan harga grosir.
   - **Tombol Melayang WhatsApp**: Tombol chat cepat di pojok kanan bawah yang memudahkan pengunjung bertanya kapan saja.

3. **Struktur Kode Rapi & Mudah Dikustomisasi**
   - **Single Source of Truth**: Nomor WhatsApp, nama toko, FAQ, dan promo berada di [`src/data/storeConfig.js`](src/data/storeConfig.js). Cukup ubah nomor WhatsApp di 1 file ini, semua tombol di seluruh web otomatis ikut berubah.
   - **Katalog Produk Terstruktur**: Data produk (nama, harga, kategori, foto, bahan) ada di [`src/data/products.js`](src/data/products.js).
   - **Ringan & Cepat**: Menggunakan React 18, Tailwind CSS, dan Vite.

---

## 📁 Struktur Direktori

```text
apparelshop-lp/
├── index.html                   # Entry point HTML & font Plus Jakarta Sans
├── package.json                 # Dependensi React, Vite, Tailwind CSS, Lucide
├── tailwind.config.js           # Konfigurasi warna sporty & clean
├── vite.config.js               # Konfigurasi bundler Vite
└── src/
    ├── main.jsx                 # Mount React
    ├── App.jsx                  # Layout utama
    ├── index.css                # Base Tailwind styles
    ├── context/
    │   └── CartContext.jsx      # Keranjang belanja & modal preview
    ├── data/
    │   ├── storeConfig.js       # [PENTING] Ganti nomor WhatsApp & info toko di sini
    │   └── products.js          # [PENTING] Tambah/ubah produk di sini
    ├── utils/
    │   ├── formatters.js        # Format Rupiah (IDR)
    │   └── whatsapp.js          # Generator pesan order otomatis ke WhatsApp
    └── components/
        ├── Navbar.jsx           # Navigasi, promo banner & trigger tas belanja
        ├── Hero.jsx             # Headline jelas & CTA beli cepat
        ├── KeunggulanSection.jsx# 4 keunggulan (bahan adem, jahitan kuat, satuan/partai, custom logo)
        ├── CollectionGrid.jsx   # Katalog produk & filter kategori (Olahraga / Lapangan)
        ├── CustomSeragamBanner.jsx # Info pembuatan seragam tim & grosir lusinan
        ├── CaraOrderSection.jsx # Alur 3 langkah pesan via WhatsApp
        ├── FAQSection.jsx       # Tanya jawab seputar ukuran & garansi
        ├── Footer.jsx           # Alamat toko, kurir pengiriman & kontak
        ├── QuickViewModal.jsx   # Pop-up detail bahan, size chart & warna
        ├── CartDrawer.jsx       # Tas belanja geser untuk checkout multi-item
        ├── FloatingWhatsApp.jsx # Tombol chat WhatsApp mengambang
        └── Toast.jsx            # Notifikasi barang masuk keranjang
```

---

## 🚀 Cara Menjalankan

### 1. Menjalankan di Komputer Lokal
```bash
npm run dev
```
Buka browser pada alamat: `http://localhost:3000`.

### 2. Membangun untuk Production (Deploy)
```bash
npm run build
```
Hasil siap upload ada di folder `dist/`.

---

## 📞 Cara Mengganti Nomor WhatsApp

Buka file [`src/data/storeConfig.js`](src/data/storeConfig.js) dan ubah bagian ini:

```javascript
export const STORE_CONFIG = {
  brandName: "PRATAMA APPAREL",
  whatsappNumber: "6281234567890", // Ganti nomor Anda (diawali 62 tanpa spasi atau +)
  whatsappDisplayNumber: "0812-3456-7890",
  ...
};
```
Nomor baru akan otomatis terhubung ke seluruh tombol WhatsApp di halaman web.
