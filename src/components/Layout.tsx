import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import visukaLogo from 'figma:asset/f40a132e643116ba8b19a52dcb729c597091b3c1.png';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans text-stone-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src={visukaLogo} 
                alt="Visuka Minerals & Powders" 
                className="h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-semibold tracking-wide transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-emerald-800 underline decoration-2 decoration-emerald-500 underline-offset-4'
                      : 'text-stone-600 hover:text-emerald-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                to="/contact"
                className="bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg shadow-emerald-900/10 hover:shadow-emerald-900/20 flex items-center"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-stone-600 hover:text-emerald-800 p-2"
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-stone-100 bg-white overflow-hidden"
            >
              <div className="px-6 py-8 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-lg font-medium ${
                      isActive(item.href)
                        ? 'text-emerald-800 pl-2 border-l-4 border-emerald-500'
                        : 'text-stone-600 hover:text-emerald-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6 mt-6 border-t border-stone-100">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center bg-emerald-800 text-white px-4 py-4 rounded-xl font-bold"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <img 
                  src={visukaLogo} 
                  alt="Visuka Minerals" 
                  className="h-16 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-sm leading-relaxed text-stone-400">
                A leading manufacturer of industrial minerals, committed to quality, consistency, and sustainable mining practices.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-stone-800 flex items-center justify-center rounded-full hover:bg-emerald-800 hover:text-white transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-stone-800 flex items-center justify-center rounded-full hover:bg-emerald-800 hover:text-white transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-stone-800 flex items-center justify-center rounded-full hover:bg-emerald-800 hover:text-white transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-stone-100 font-bold uppercase tracking-wider text-xs mb-6">Company</h3>
              <ul className="space-y-4 text-sm">
                <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Our Products</Link></li>
                <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-stone-100 font-bold uppercase tracking-wider text-xs mb-6">Products</h3>
              <ul className="space-y-4 text-sm">
                <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Calcium Carbonate Powder</Link></li>
                <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Calcite Lumps</Link></li>
                <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Calcite Powder</Link></li>
                <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Uncoated Calcium Carbonate</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-stone-100 font-bold uppercase tracking-wider text-xs mb-6">Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-emerald-600 shrink-0" />
                  <span>123 Industrial Park,<br/>State, Country 12345</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-emerald-600 shrink-0" />
                  <span>+1 (888) VISUKA-01</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-emerald-600 shrink-0" />
                  <span>sales@visuka.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>© 2024 Visuka Minerals & Powders. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-stone-200">Privacy Policy</a>
              <a href="#" className="hover:text-stone-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
