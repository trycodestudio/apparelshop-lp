import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { STORE_CONFIG } from '../data/storeConfig';
import { generateConciergeWhatsAppUrl } from '../utils/whatsapp';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Tanya Jawab
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-slate-600 text-sm">
            Informasi seputar cara pesan, custom bordir/sablon, minimal order, dan garansi.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {STORE_CONFIG.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-blue-600"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WA consultation callout */}
        <div className="mt-8 p-5 bg-blue-50 rounded-xl border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Masih ada pertanyaan lain seputar pesanan Anda?</h4>
            <p className="text-xs text-slate-600">Admin kami siap menjawab dan membantu pemilihan bahan.</p>
          </div>
          <a
            href={generateConciergeWhatsAppUrl("Pertanyaan Lain seputar Pemesanan")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors whitespace-nowrap shadow-sm"
          >
            <MessageCircle size={15} />
            <span>Tanya Langsung ke CS</span>
          </a>
        </div>

      </div>
    </section>
  );
}
