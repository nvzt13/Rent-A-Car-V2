"use client";
import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-[#1a1d24] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hakkımızda Bölümü */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-[#C4A484]">Hakkımızda</h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Rent-A-Car olarak, siz değerli müşterilerimize en iyi araç kiralama
            deneyimini sunmak için buradayız. Geniş araç filomuz, uygun
            fiyatlarımız ve esnek kiralama seçeneklerimizle güvenli ve konforlu
            bir yolculuk sağlıyoruz.
          </p>
        </div>

        {/* İki Sütunlu Bölüm */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Sol Sütun - Vizyon & Misyon */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#C4A484] mb-4">
                Vizyonumuz
              </h2>
              <p className="text-gray-400">
                Teknolojiyi kullanarak araç kiralamayı daha hızlı, kolay ve
                erişilebilir hale getirmek.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-[#C4A484] mb-4">
                Misyonumuz
              </h2>
              <p className="text-gray-400">
                Müşterilerimize güvenilir, ekonomik ve çevre dostu ulaşım
                seçenekleri sunarak kaliteli hizmet vermek.
              </p>
            </div>
          </div>

          {/* Sağ Sütun - İletişim Bilgileri */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#C4A484] mb-4">
              İletişim Bilgileri
            </h2>
            <div className="text-gray-400">
              <p>198 Batı 21. Cadde, Ofis</p>
              <p>New York, NY 10010</p>
              <p>
                <a href="mailto:info@into.com" className="hover:text-[#C4A484]">
                  info@into.com
                </a>
              </p>
              <p>
                <a href="tel:+880101000000" className="hover:text-[#C4A484]">
                  +88 (0) 101 0000 000
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Harita Bölümü */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48168.53359066671!2d42.1075!3d38.4031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca12e9b9a9419f%3A0x4e2f6fa5de2aaddf!2sBitlis!5e0!3m2!1sen!2str!4v1709561245148!5m2!1sen!2str
"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* CTA Bölümü */}
        <div className="text-center mt-16">
          <p className="text-lg font-semibold text-[#C4A484]">
            Daha fazla bilgi için{" "}
            <a href="/contact" className="underline hover:text-[#B08968]">
              bizimle iletişime geçin
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
