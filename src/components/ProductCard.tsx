import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  applications: string[];
}

export const products: Product[] = [
  {
    id: 'calcium-carbonate-powder',
    name: 'Calcium Carbonate Powder',
    description: 'High whiteness and purity micronized powder ideal for paints, plastics, and paper industries.',
    image: 'https://images.unsplash.com/photo-1745192621767-0393e7161f11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHBvd2RlciUyMHBpbGUlMjB0ZXh0dXJlJTIwbWluZXJhbHxlbnwxfHx8fDE3Njk2MjA3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    applications: ['Paints & Coatings', 'PVC Pipes', 'Paper']
  },
  {
    id: 'calcite-lumps',
    name: 'Calcite Lumps',
    description: 'Raw high-grade calcite lumps directly from our mines, suitable for further processing and industrial use.',
    image: 'https://images.unsplash.com/photo-1724918082801-0b51b2f6e879?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGxpbWVzdG9uZSUyMHJvY2tzJTIwbWluZXJhbHxlbnwxfHx8fDE3Njk2MjA3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    applications: ['Ceramics', 'Glass', 'Construction']
  },
  {
    id: 'calcite-powder',
    name: 'Calcite Powder',
    description: 'Natural Ground Calcium Carbonate (GCC) with excellent dispersion properties and chemical purity.',
    image: 'https://images.unsplash.com/photo-1595181285272-38662a5b6754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHBvd2RlciUyMHRleHR1cmV8ZW58MXx8fHwxNzY5NjIwNzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', // Substitute image
    applications: ['Rubber', 'Adhesives', 'Animal Feed']
  },
  {
    id: 'uncoated-calcium-carbonate',
    name: 'Uncoated Calcium Carbonate',
    description: 'Versatile uncoated filler for cost-effective formulations in various polymer applications.',
    image: 'https://images.unsplash.com/photo-1628036232338-34860b00c3c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5lcmFsJTIwcG93ZGVyfGVufDF8fHx8MTc2OTYyMDcxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', // Substitute image
    applications: ['Plastics', 'Construction Chemicals', 'Sealants']
  }
];

interface ProductCardProps {
  product: Product;
  onInquire: (productName: string) => void;
  detailed?: boolean;
}

export function ProductCard({ product, onInquire, detailed = false }: ProductCardProps) {
  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200 flex ${detailed ? 'flex-col md:flex-row' : 'flex-col'}`}>
      <div className={`${detailed ? 'md:w-1/3 h-64 md:h-auto' : 'h-64'} bg-slate-100 overflow-hidden relative group`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
      </div>
      
      <div className={`p-6 flex flex-col ${detailed ? 'md:w-2/3 justify-center' : ''}`}>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
        <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-grow">
          {product.description}
        </p>
        
        <div className="mb-6">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Applications</span>
          <div className="flex flex-wrap gap-2">
            {product.applications.map(app => (
              <span key={app} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                {app}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <button 
            onClick={() => onInquire(product.name)}
            className="text-blue-600 font-bold text-sm uppercase tracking-wide flex items-center hover:text-blue-800 transition-colors group"
          >
            Send Inquiry
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
