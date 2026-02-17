import React, { useState } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', value: 'home' },
    { name: 'About Us', value: 'about' },
    { name: 'Products', value: 'products' },
    { name: 'Contact', value: 'contact' },
  ];

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center mr-3">
              <span className="font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight uppercase">MineralPro</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest">Industries</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => onNavigate(link.value)}
                className={`text-sm font-medium transition-colors duration-200 uppercase tracking-wide hover:text-blue-400 ${
                  currentPage === link.value ? 'text-blue-500' : 'text-slate-300'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => onNavigate('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-sm text-sm font-semibold uppercase tracking-wide transition-colors"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => {
                  onNavigate(link.value);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                  currentPage === link.value
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
