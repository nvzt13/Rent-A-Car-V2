"use client";
import { useState, useEffect } from "react";

const Entrance = () => {
  const backgroundImages = [
    'url("https://images.wallpaperscraft.com/image/single/bmw_i8_front_view_111629_1280x720.jpg")',
    'url("https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    'url("https://images.wallpaperscraft.com/image/single/bmw_headlights_lights_137326_1920x1080.jpg")',
  ];

  const animationClasses = ["animate-fade"];

  const [currentBackground, setCurrentBackground] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
      setCurrentAnimation((prev) => (prev + 1) % animationClasses.length);
    }, 8000); // Arka plan değişim süresi biraz daha uzun yapıldı

    return () => clearInterval(interval);
  }, [backgroundImages.length, animationClasses.length]);

  return (
    <>
      <div
        className={`w-full h-128 sm:h-140 md:h-172 lg:h-screen bg-cover bg-no-repeat bg-center transition-all duration-1000 flex flex-col items-center justify-center ${animationClasses[currentAnimation]}`}
        style={{
          backgroundImage: backgroundImages[currentBackground],
          backgroundPosition: "center",
          zIndex: 0,
        }}
      >
        {/* Karanlık Overlay Ekleyerek Arka Planı Yumuşatıyoruz */}
        <div className="absolute inset-0 bg-black/60 z-0 h-128 sm:h-140 md:h-172 lg:h-screen " />

        <div className="relative w-full flex flex-col items-center justify-center text-white z-10">
          {/* Alt Başlık */}
          <div className="hidden md:flex flex-col items-center text-white text-center mb-8">
            <h1 className="text-5xl font-bold drop-shadow-lg">
              Arabaya mı ihtiyacınız var?
            </h1>
            <h4 className="text-2xl font-light drop-shadow-md">
              İhtiyacınıza uygun arabayı hemen kiralayın
            </h4>
          </div>

          {/* Form */}
          <div className="form w-full">
            <form className="bg-transparent mt-12 w-full max-w-7xl p-8 gap-4 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-between shadow-none justify-center items-center mx-auto">
              {/* Araç Seçimi */}
              <div className="mb-4 w-full">
                <input
                  id="car"
                  type="text"
                  className="w-full p-4 border-b-2 border-gray-400
                  focus:outline-none focus:ring-0 bg-transparent text-white
                  placeholder-gray-400"
                  placeholder="Araç seçin"
                />
              </div>

              {/* Teslim Alma Tarihi */}
              <div className="mb-4 w-full">
                <input
                  id="pickupDate"
                  type="date"
                  className="w-full p-4 border-b-2 border-gray-400 focus:outline-none focus:ring-0 bg-transparent text-white"
                />
              </div>

              {/* Telefon No */}
              <div className="mb-4 w-full">
                <input
                  id="phone"
                  type="tel"
                  className="w-full p-4 border-b-2 border-gray-400 focus:outline-none focus:ring-0 bg-transparent text-white placeholder-gray-400"
                  placeholder="Telefon numaranızı girin"
                />
              </div>

              {/* Teslim Tarihi */}
              <div className="mb-4 w-full">
                <input
                  id="returnDate"
                  type="date"
                  className="w-full p-4 border-b-2 border-gray-400 focus:outline-none focus:ring-0 bg-transparent text-white"
                />
              </div>

              {/* Button */}
              <div className="w-full col-span-1 md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="w-full md:w-1/2 lg:w-full p-4 bg-transparent border border-yellow-400 hover:bg-[#B08968] text-white font-bold rounded-md focus:outline-none"
                >
                  Araç Bul
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Entrance;
