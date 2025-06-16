'use client';
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';

export default function Navbar({ activeLink }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "home", path: "/" },
    { name: "about", path: "#about" },
    { name: "projects", path: "#projects" },
    { name: "technology", path: "#technology" },
    { name: "services", path: "#services" },
    { name: "contact", path: "#contact" },
  ];

  return (
    <>
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950 px-6 py-2 h-12">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link className="uppercase" href="/">
              <span className="text-blue-600 text-[12px] sm:text-xl font-bold">&lt;</span>
              <span className="text-[12px] sm:text-xl font-bold">Port</span>
              <span className="text-green-600 text-[12px] sm:text-xl font-bold">folio</span>
              <span className="text-blue-600 text-[12px] sm:text-xl font-bold">/&gt;</span>
            </Link>
          </div>
          <div className="hidden sm:flex gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`capitalize hover:font-semibold transition-all duration-150 ${
                  activeLink === link.name ? "text-yellow-500" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="text-2xl sm:hidden hover:cursor-pointer"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 z-50 sm:hidden flex flex-col items-center pt-20 gap-5 transition-all duration-300"
        >
        <Image  
  src="/profile.jpg"
  alt="Profile"
  width={80}
  height={80}
  className="object-cover rounded-full"
/>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`capitalize hover:font-semibold transition-all duration-150 ${
                activeLink === link.name ? "text-yellow-500" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-10 text-2xl text-white"
          >
            <GiCancel />
          </button>
        </div>
      )}
    </>
  );
}
