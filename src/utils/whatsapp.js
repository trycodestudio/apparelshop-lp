import { STORE_CONFIG } from '../data/storeConfig';
import { formatIDR } from './formatters';

/**
 * Membentuk URL WhatsApp langsung dengan pesan otomatis rapi
 */
export function buildWhatsAppLink(message) {
  const cleanPhone = STORE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Format pesan WhatsApp untuk 1 Produk
 */
export function generateProductWhatsAppUrl(product, size = "L", color = null, quantity = 1) {
  const selectedColor = color || (product.colors && product.colors[0]?.name) || "Standar";
  const total = product.price * quantity;

  const lines = [
    `Halo Admin ${STORE_CONFIG.brandName},`,
    `Saya ingin memesan produk berikut:`,
    ``,
    `*${product.name}*`,
    `• Ukuran : ${size}`,
    `• Warna : ${selectedColor}`,
    `• Jumlah : ${quantity} pcs`,
    `• Harga Satuan : ${formatIDR(product.price)}`,
    `• Total : ${formatIDR(total)}`,
    ``,
    `*Data Pemesan:*`,
    `Nama: `,
    `Kota/Kecamatan Pengiriman: `,
    `Catatan Tambahan (Misal: request sablon/bordir nama): `,
    ``,
    `Apakah stok dan ukuran ini tersedia? Mohon info ongkir dan nomor rekening ya. Terima kasih!`
  ];

  return buildWhatsAppLink(lines.join('\n'));
}

/**
 * Format pesan WhatsApp untuk Tas Belanja (Multi-item)
 */
export function generateCartWhatsAppUrl(cartItems, totalPrice) {
  const lines = [
    `Halo Admin ${STORE_CONFIG.brandName},`,
    `Saya ingin memesan beberapa produk dari katalog web:`,
    ``,
    `📋 *RINCIAN PESANAN:*`
  ];

  cartItems.forEach((item, index) => {
    lines.push(
      `${index + 1}. *${item.name}*`,
      `   Ukuran: ${item.size} | Warna: ${item.color || 'Standar'}`,
      `   Jumlah: ${item.quantity} pcs x ${formatIDR(item.price)} = ${formatIDR(item.price * item.quantity)}`
    );
  });

  lines.push(
    ``,
    `*TOTAL PESANAN : ${formatIDR(totalPrice)}*`,
    ``,
    `*Data Pengiriman:*`,
    `Nama Penerima: `,
    `Nomor HP: `,
    `Alamat Lengkap / Kota: `,
    ``,
    `Mohon info ketersediaan stok dan total pembayaran beserta ongkirnya. Terima kasih!`
  );

  return buildWhatsAppLink(lines.join('\n'));
}

/**
 * Format pesan WhatsApp untuk Konsultasi Custom Seragam / Lusinan
 */
export function generateConciergeWhatsAppUrl(topic = "Tanya Stok & Custom Seragam") {
  const lines = [
    `Halo Admin ${STORE_CONFIG.brandName},`,
    `Saya ingin konsultasi mengenai: *${topic}*.`,
    ``,
    `Saya ingin menanyakan tentang pembuatan baju olahraga / seragam lapangan (harga grosir, minimal order, dan contoh bahan). Mohon infonya ya, terima kasih!`
  ];

  return buildWhatsAppLink(lines.join('\n'));
}
