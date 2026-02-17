import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export function Footer({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-3">
                <span className="font-bold text-white">M</span>
              </div>
              <span className="font-bold text-xl text-white uppercase tracking-tight">MineralPro</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Leading manufacturer and supplier of premium quality Calcium Carbonate and industrial minerals. 
              Serving industries worldwide with consistency and excellence since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Products', 'Quality', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onNavigate(item.toLowerCase().split(' ')[0])}
                    className="flex items-center text-sm hover:text-blue-500 transition-colors group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Our Products</h3>
            <ul className="space-y-3">
              {['Calcium Carbonate Powder', 'Calcite Lumps', 'Calcite Powder', 'Uncoated Calcium Carbonate', 'Industrial Minerals'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onNavigate('products')}
                    className="text-sm hover:text-blue-500 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-blue-500 mt-0.5 shrink-0" />
                <span className="text-sm">
                  123 Industrial Zone A,<br />
                  Mineral District, TX 75001,<br />
                  United States
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-blue-500 shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-blue-500 shrink-0" />
                <span className="text-sm">sales@mineralpro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; 2024 MineralPro Industries. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
