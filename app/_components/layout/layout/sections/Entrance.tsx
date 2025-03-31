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
        className={`w-full h-128 sm:h-140 md:h-172 lg:h-screen bg-cover bg-no-repeat absolute bg-center transition-all duration-1000 flex flex-col items-center justify-center ${animationClasses[currentAnimation]}`}
        style={{
          backgroundImage: backgroundImages[currentBackground],
          backgroundPosition: "center",
          zIndex: 0,
        }}
      >
        <div className="w-full hidden md:flex flex-col items-center text-white text-center mb-8">
          <h1 className="text-5xl font-bold drop-shadow-lg">
            Arabaya mı ihtiyacınız var?
          </h1>
          <h4 className="text-2xl font-light drop-shadow-md">
            İhtiyacınıza uygun arabayı hemen kiralayın
          </h4>
        </div>
        <div className="form w-full">
          <form className="bg-transparent mt-12 w-full max-w-7xl  p-8 gap-4 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-between shadow-none justify-center items-center mx-auto">
            {/* Araç Seçimi */}
            <div className="mb-4 w-full">
              <input
                id="car"
                type="text"
                className="w-full p-4 border-b-2 border-white focus:outline-none focus:ring-0 bg-transparent text-white placeholder-white"
                placeholder="Araç seçin"
              />
            </div>

            {/* Teslim Alma Tarihi */}
            <div className="mb-4 w-full">
              <input
                id="pickupDate"
                type="date"
                className="w-full p-4 border-b-2 border-white focus:outline-none focus:ring-0 bg-transparent text-white"
              />
            </div>

            {/* Telefon No */}
            <div className="mb-4 w-full">
              <input
                id="phone"
                type="tel"
                className="w-full p-4 border-b-2 border-white focus:outline-none focus:ring-0 bg-transparent text-white placeholder-white"
                placeholder="Telefon numaranızı girin"
              />
            </div>

            {/* Teslim Tarihi */}
            <div className="mb-4 w-full">
              <input
                id="returnDate"
                type="date"
                className="w-full p-4 border-b-2 border-white focus:outline-none focus:ring-0 bg-transparent text-white"
              />
            </div>

            {/* Button */}
            <div className="w-full col-span-1 md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="w-full md:w-1/2 lg:w-full p-4 bg-transparent border border-yellow-400 hover:bg-yellow-700 text-white font-bold rounded-md focus:outline-none"
              >
                Araç Bul
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Entrance;
