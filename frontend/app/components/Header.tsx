'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuDropdown from "./MenuDropdown";

const navLinks = [
  { href: "/#about", label: "ABOUT" },
  { href: "/#event", label: "CATEGORIES" },
  { href: "/#register", label: "REGISTER" },
  { href: "/#schedule", label: "SCHEDULE" },
  { href: "/#scholarship", label: "SCHOLARSHIP" },
  { href: "/#guideline", label: "GUIDELINES" },
  { href: "/#contact", label: "CONTACT" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-sm border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            alt="KDT Logo"
            className="h-12 w-12 object-contain"
            height={48}
            src="/logo.png"
            width={48}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/60 hover:text-[#c9a96e] text-[10px] tracking-[0.25em] uppercase font-light transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <MenuDropdown handleToggleMenu={() => {}} />
        </div>
      </div>
    </header>
  );
};

export default Header;
