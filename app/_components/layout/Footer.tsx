import React from "react";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { title: "Hakkımızda", href: "/about" },
    { title: "SSS", href: "/faqs" },
    { title: "Blog", href: "/blog" },
    { title: "Tarihçe", href: "/history" },
    { title: "İletişim", href: "/contact" },
  ];

  return (
    <footer className="bg-[#1a1d24] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Bülten Bölümü */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Bültenimize Katıl</h3>
            <p className="text-gray-400 mb-6">
              Güncellemelerden ve özel fırsatlardan haberdar olmak için e-posta bültenimize abone olun.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:border-[#C4A484]"
              />
              <button className="w-full py-3 bg-[#C4A484] hover:bg-[#B08968] transition duration-300 rounded uppercase font-medium">
                Abone Ol
              </button>
            </div>
          </div>

          {/* İletişim Bölümü */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">İletişim</h3>
            <div className="space-y-3 text-gray-400">
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

          {/* Hızlı Bağlantılar Bölümü */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#C4A484] transition duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Telif Hakkı Bölümü */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 - Tüm Hakları Saklıdır | Nevzat Atalay tarafından geliştirildi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
