import React from "react";
import { Menu, X } from "lucide-react";
import dsapplogo from "../assets/kelvinfiles/dsapplogo.png";

export default function Header({
  navigateToPage,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const menuItems = [
    { label: "HOME", path: "/home" },
    { label: "BIO", path: "/bio" },
    { label: "TOURS", path: "/tour" },
    { label: "MY PERFORMANCES", path: "/myperformances" },
    { label: "CONTACT US", path: "/contact" },
  ];

  return (
    <header className="bg-black text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src={dsapplogo}
              alt="Logo"
              width="120"
              height="auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigateToPage(item.path)}
                className={`hover:text-red-500 transition-colors`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-black border-t border-gray-700 py-4">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigateToPage(item.path)}
                className="block w-full text-left px-4 py-2 hover:text-red-500 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
