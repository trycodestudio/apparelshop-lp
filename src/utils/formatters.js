/**
 * Formatting utilities for currency and text
 */

export function formatIDR(amount) {
  if (typeof amount !== 'number') return 'Rp 0';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount).replace('IDR', 'Rp');
}

export function truncateText(text, length = 120) {
  if (!text || text.length <= length) return text;
  return text.substring(0, length) + '...';
}
