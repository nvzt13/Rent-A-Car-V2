"use client";
import { useState, useEffect } from "react";

const Entrance = () => {
  const backgroundImages = [
    'url("https://images.wallpaperscraft.com/image/single/bmw_i8_front_view_111629_1280x720.jpg")',
    'url("https://images.wallpaperscraft.com/image/single/bmw_headlights_lights_137326_1920x1080.jpg")',
    'url("https://images.wallpaperscraft.com/image/single/bmw_z4_bmw_car_348221_1280x720.jpg")',
    'url("https://images.wallpaperscraft.com/image/single/audi_car_white_209193_1280x720.jpg")',
  ];

  const animationClasses = ["animate-fade"];

  const [currentBackground, setCurrentBackground] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
      setCurrentAnimation((prev) => (prev + 1) % animationClasses.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length, animationClasses.length]);

  return (
    <>
      <div
        className={`w-full h-108 sm:h-140 md:h-172 lg:h-screen bg-cover bg-no-repeat absolute bg-center transition-all duration-1000 ${animationClasses[currentAnimation]}`}
        style={{
          backgroundImage: backgroundImages[currentBackground],
          backgroundPosition: "center",
          zIndex: 0,
        }}
      ></div>
      <div className="relative z-10 flex justify-center items-center w-full h-screen">
      <form className="bg-transparent w-full max-w-lg p-8 rounded-lg flex flex-wrap gap-4 shadow-none justify-center mx-auto">
  {/* Araç Seçimi */}
  <div className="mb-4 w-full">
    <label className="block text-sm font-bold mb-2 text-white" htmlFor="car">
      Araç Seçimi
    </label>
    <input
      id="car"
      type="text"
      className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-transparent text-white placeholder-white"
      placeholder="Araç seçin"
    />
  </div>

  {/* Teslim Alma Tarihi */}
  <div className="mb-4 w-full">
    <label className="block text-sm font-bold mb-2 text-white" htmlFor="pickupDate">
      Teslim Alma Tarihi
    </label>
    <input
      id="pickupDate"
      type="date"
      className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-transparent text-white"
    />
  </div>

  {/* Telefon No */}
  <div className="mb-4 w-full">
    <label className="block text-sm font-bold mb-2 text-white" htmlFor="phone">
      Telefon Numarası
    </label>
    <input
      id="phone"
      type="tel"
      className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-transparent text-white placeholder-white"
      placeholder="Telefon numaranızı girin"
    />
  </div>

  {/* Teslim Tarihi */}
  <div className="mb-4 w-full">
    <label className="block text-sm font-bold mb-2 text-white" htmlFor="returnDate">
      Teslim Tarihi
    </label>
    <input
      id="returnDate"
      type="date"
      className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-transparent text-white"
    />
  </div>

  {/* Button */}
  <div className="w-full">
    <button
      type="submit"
      className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md focus:outline-none"
    >
      Araç Bul
    </button>
  </div>
</form>

      </div>
    </>
  );
};

export default Entrance;
