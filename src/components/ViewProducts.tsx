import React from 'react';
import { products, ProductCard } from './ProductCard';

interface ViewProductsProps {
  onInquire: (product: string) => void;
}

export function ViewProducts({ onInquire }: ViewProductsProps) {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Products</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Explore our range of high-quality calcium carbonate and calcite products designed for diverse industrial applications.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onInquire={onInquire} 
              detailed={true} 
            />
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Formulation?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We can customize particle size, whiteness, and packaging to meet your specific manufacturing requirements.
          </p>
          <button 
            onClick={() => onInquire('Custom Formulation')}
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-sm uppercase tracking-wide hover:bg-blue-50 transition-colors"
          >
            Contact Sales Team
          </button>
        </div>
      </div>
    </div>
  );
}
