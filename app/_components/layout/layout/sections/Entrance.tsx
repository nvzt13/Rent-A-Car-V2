"use client";
import { useState, useEffect } from "react";

const Entrance = () => {
  const backgroundImages = [
    'url("https://images.wallpaperscraft.com/image/single/bmw_i8_front_view_111629_1280x720.jpg")',
    'url("https://images.wallpaperscraft.com/image/single/bmw_headlights_lights_137326_1920x1080.jpg")',
    'url("https://images.wallpaperscraft.com/image/single/bmw_z4_bmw_car_348221_1280x720.jpg")',
    'url("https://images.wallpaperscraft.com/image/single/audi_car_white_209193_1280x720.jpg")',
  ];

  const animationClasses = [
    "animate-fade"
  ];

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
    <div
      className={`w-full lg:h-screen h-48 sm:h-64 md:h-96 bg-cover bg-no-repeat bg-center transition-all duration-1000 ${animationClasses[currentAnimation]}`}
      style={{
        backgroundImage: backgroundImages[currentBackground],
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Entrance;
