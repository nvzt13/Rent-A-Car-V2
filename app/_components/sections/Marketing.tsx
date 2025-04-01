import React from "react";
import Link from "next/link";

const Marketing = () => {
  return (
    <section className="relative h-screen">
      {/* Arka Plan Görseli */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y3VzdG9tZXJ8ZW58MHx8MHx8fDA%3D')",
        }}
      >
        {/* Karanlık Kaplama */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* İçerik */}
      <div className="relative h-full container mx-auto px-4">
        <div className="flex flex-col justify-center h-full max-w-3xl">
          {/* Alt Başlık */}
          <span className="text-[#C4A484] uppercase tracking-wider mb-4 font-medium">
            SADECE EN İYİSİ
          </span>

          {/* Ana Başlık */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Kiralamanızı Yapın & Bir Model Seçin
          </h1>

          {/* CTA Butonu */}
          <div>
            <Link
              href="#cars"
              className="inline-block px-8 py-4 bg-[#C4A484] text-white rounded hover:bg-[#B08968] transition-colors duration-300 uppercase tracking-wide font-medium"
            >
              DAHA FAZLA OKUYUN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;
