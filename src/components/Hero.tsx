import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="relative bg-slate-900 text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1640494958956-f3b8c57a48ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMG1hbnVmYWN0dXJpbmclMjBwbGFudHxlbnwxfHx8fDE3Njk1NDE2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Industrial Factory" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
            ISO 9001:2015 Certified Manufacturer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Premium Industrial <br />
            <span className="text-blue-500">Minerals & Powders</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Leading manufacturer of high-grade Calcium Carbonate and Calcite products. 
            Engineered for excellence in plastic, paint, paper, and rubber industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('products')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-sm font-bold uppercase tracking-wide transition-all flex items-center justify-center"
            >
              View Products
              <ArrowRight size={20} className="ml-2" />
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white rounded-sm font-bold uppercase tracking-wide transition-all"
            >
              Request Sample
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm font-medium text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-blue-500" />
              <span>High Purity</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-blue-500" />
              <span>Consistent Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-blue-500" />
              <span>Global Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
