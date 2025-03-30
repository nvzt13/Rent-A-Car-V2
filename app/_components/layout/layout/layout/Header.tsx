"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Hamburger menü durumu

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 ${
        scrolling ? "bg-black bg-opacity-90" : "bg-transparent"
      } z-10 border-b border-white transition-all duration-300 ease-in-out`}
    >
      <div className="mx-auto lg:h-24 sm:h-12 px-4 flex justify-between items-center">
        {/* Logo ve Navbar Link'leri */}
        <div className="flex items-center space-x-6">
          <div className="text-white lg:text-2xl sm:text-xl font-bold">
            <Link href="/" className="tracking-widest font-serif">
              Rent-A-Car
            </Link>
          </div>

          {/* Navbar linkleri - Büyük ekranlar için */}
          <div className="hidden lg:flex space-x-6 mx-4">
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

        {/* Hamburger Menü Butonu - Küçük ekranlarda gösterilir */}
        <div className="flex lg:hidden ml-auto"> {/* Sağ tarafa hizaladık */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Hamburger ikon */}
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Telefon ve Adres Bilgileri - Büyük ekranlar için */}
        <div className="hidden lg:flex space-x-6 text-white text-sm">
          <div>
            <Link href="tel:+11586987258" className="hover:text-gray-300">
              (+1) 158 6987 258
            </Link>
          </div>
          <div>
            <Link
              href="https://www.google.com/maps?q=22+uar+Carmund+Car+15+main+Cavier"
              className="hover:text-gray-300"
              target="_blank"
            >
              22 uar Carmund Car 15 Main Cavier
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden py-4 bg-black bg-opacity-90 text-white">
          <Link href="/" className="block hover:text-gray-300" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="block hover:text-gray-300" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/services" className="block hover:text-gray-300" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/contact" className="block hover:text-gray-300" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
