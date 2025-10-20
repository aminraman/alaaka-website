"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animatePulse, setAnimatePulse] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Stop pulse animation after it plays once
    const timer = setTimeout(() => setAnimatePulse(false), 1500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const navItems = ["Home", "About", "Programs", "Events", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/10 backdrop-blur-md shadow-md"
          : "bg-white shadow"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* ✅ Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-green-700 group transition"
        >
          <div
            className={`transition-transform duration-700 ${
              animatePulse ? "animate-pulse-once" : ""
            } group-hover:scale-110`}
          >
            <Image
              src="/images/logo1.png"
              alt="Alaaka Association Logo"
              width={40}
              height={40}
              className="rounded-full shadow-md"
              priority
            />
          </div>
          
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-800 font-bold hover:text-green-700 transition-all group "
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-green-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-green-800 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`overflow-hidden transition-all duration-700 md:hidden ${
          menuOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
        }`}
      >
        <nav
          className={`flex flex-col items-center space-y-4 backdrop-blur-md bg-white/30 shadow-lg rounded-b-2xl pb-6 transition-all duration-500 ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3"
          }`}
        >
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="relative text-gray-800 font-semibold text-lg w-fit"
              style={{
                animation: menuOpen
                  ? `slideIn 0.5s ease ${idx * 0.15}s forwards`
                  : "none",
              }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-green-700 transition-all duration-500 hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-once {
          0% {
            transform: scale(1);
            filter: drop-shadow(0 0 0px rgba(34, 197, 94, 0));
          }
          50% {
            transform: scale(1.15);
            filter: drop-shadow(0 0 10px rgba(34, 197, 94, 0.5));
          }
          100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0px rgba(34, 197, 94, 0));
          }
        }

        .animate-pulse-once {
          animation: pulse-once 1.5s ease-in-out forwards;
        }
      `}</style>
    </header>
  );
}
