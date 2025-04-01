import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CarCardProps {
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  features: string[];
}

const CarCard = (car: CarCardProps) => {
  const { name, category, description, price, image, features } = car;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      {/* Araba Resmi */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain transform transition-transform duration-300 group-hover:translate-y-2"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Araba Detayları */}
      <div className="p-6">
        {/* Kategori */}
        <div className="uppercase text-sm text-[#C4A484] font-medium tracking-wide mb-2">
          {category}
        </div>

        {/* Araba İsmi */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>

        {/* Açıklama */}
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Özellikler */}
        <div className="flex items-center gap-4 text-gray-600 mb-6">
          {features.map((feature, index) => (
            <span key={index} className="text-sm">
              {feature}
            </span>
          ))}
        </div>

        {/* Fiyat ve Buton */}
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">
            ${price} <span className="text-sm font-normal">/ Gün</span>
          </div>
          <Link
            href="/booking"
            className="inline-block px-6 py-2 bg-[#1a1d24] text-white rounded hover:bg-[#2a2d34] transition-colors duration-300 uppercase text-sm font-medium"
          >
            Rezervasyon Yap
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
