"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 ${scrolling ? "bg-black bg-opacity-90" : "bg-transparent"} z-10 border-b border-white transition-all duration-300 ease-in-out`}
    >
      <div className="mx-auto px-12 p-6 flex justify-between items-center">
        {/* Logo ve Navbar Link'leri */}
        <div className="flex items-center space-x-6">
          <div className="text-white text-2xl font-bold">
            <Link href="/">Rent-A-Car</Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-gray-300">
              Services
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>

        {/* Telefon ve Adres Bilgileri */}
        <div className="hidden md:flex space-x-6 text-white text-sm">
          <div>
            <Link href="tel:+11586987258" className="hover:text-gray-300">
              (+1) 158 6987 258
            </Link>
          </div>
          <div>
            <Link href="https://www.google.com/maps?q=22+uar+Carmund+Car+15+main+Cavier" className="hover:text-gray-300" target="_blank">
              22 uar Carmund Car 15 Main Cavier
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
