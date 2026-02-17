import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Beaker, CheckCircle } from 'lucide-react';

const products = [
  {
    id: 'calcium-carbonate-powder',
    name: 'Calcium Carbonate Powder',
    tagline: 'High Purity Micronized Powder',
    description: 'Our flagship Calcium Carbonate Powder is precision-engineered for the plastic, paint, and rubber industries. Characterized by high brightness, low oil absorption, and consistent particle size distribution.',
    specs: ['Whiteness: 96% - 98%', 'CaCO3 Content: > 98.5%', 'Mesh Size: 300 to 2500 Mesh'],
    applications: ['PVC Pipes & Profiles', 'Paints & Coatings', 'Rubber Compounds'],
    image: 'https://images.unsplash.com/photo-1737098140591-f0988ae7e15a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNhbGNpdW0lMjBjYXJib25hdGUlMjBwb3dkZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc2OTYyMTE0Nnww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'calcite-lumps',
    name: 'Calcite Lumps',
    tagline: 'Premium Raw Mineral',
    description: 'Sourced directly from our high-grade mines, our Calcite Lumps feature exceptional chemical purity and crystalline structure. The perfect raw material for downstream processing and ceramic applications.',
    specs: ['CaO: > 54%', 'Silica: < 0.5%', 'Brightness: Excellent'],
    applications: ['Ceramic Industry', 'Glass Manufacturing', 'Construction Chemicals'],
    image: 'https://images.unsplash.com/photo-1714138171612-b5810048cf8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW1lc3RvbmUlMjBxdWFycnklMjBtaW5pbmclMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzY5NjIxMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'calcite-powder',
    name: 'Calcite Powder',
    tagline: 'Natural Ground Calcium Carbonate',
    description: 'A versatile and cost-effective filler material. Our Calcite Powder improves mechanical properties in polymer composites while significantly reducing production costs for our clients.',
    specs: ['Whiteness: 95% Min', 'Moisture: < 0.2%', 'Flowability: Moderate'],
    applications: ['Thermoplastics', 'Adhesives & Sealants', 'Wall Putty'],
    image: 'https://images.unsplash.com/photo-1580281845022-233f93de0671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbGFib3JhdG9yeSUyMHNjaWVudGlzdCUyMHF1YWxpdHklMjBjb250cm9sfGVufDF8fHx8MTc2OTYyMTE0N3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'uncoated-calcium-carbonate',
    name: 'Uncoated Calcium Carbonate',
    tagline: 'Standard Industrial Grade',
    description: 'High-quality Ground Calcium Carbonate (GCC) without surface treatment. An economical solution for applications where stearic acid coating is not required, offering great dispersion.',
    specs: ['Purity: High', 'Brightness: Good', 'Oil Absorption: Low'],
    applications: ['Paper Industry', 'Carpet Backing', 'Construction Materials'],
    image: 'https://images.unsplash.com/photo-1629450758083-32a79d61cbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFwJTIwb2YlMjB3aGl0ZSUyMGNhbGNpdW0lMjBwb3dkZXJ8ZW58MXx8fHwxNzY5NzA3ODUyfDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function Products() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}
      <div className="bg-stone-900 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">Our Catalog</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Industrial Minerals</h1>
          <p className="text-xl text-stone-400 max-w-2xl mx-auto">
            Premium quality Calcium Carbonate and Calcite products for diverse industrial applications.
          </p>
        </div>
      </div>

      {/* Product Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {products.map((product, index) => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 flex flex-col lg:flex-row group hover:shadow-lg transition-shadow duration-300">
                <div className="lg:w-2/5 relative h-72 lg:h-auto overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors" />
                </div>
                
                <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {product.tagline}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-stone-900 mb-4">{product.name}</h2>
                  <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                      <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4 flex items-center">
                        <Beaker className="w-4 h-4 mr-2 text-emerald-600" />
                        Key Specifications
                      </h3>
                      <ul className="space-y-2">
                        {product.specs.map((spec, i) => (
                          <li key={i} className="text-sm text-stone-600 font-medium flex items-start">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 mr-2 shrink-0"></span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                      <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />
                        Applications
                      </h3>
                      <ul className="space-y-2">
                        {product.applications.map((app, i) => (
                          <li key={i} className="text-sm text-stone-600 font-medium">
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <Link
                      to={`/contact?product=${encodeURIComponent(product.name)}`}
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-stone-900 hover:bg-emerald-800 transition-colors"
                    >
                      Request Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                    <button className="inline-flex items-center justify-center px-6 py-3 border border-stone-200 text-base font-bold rounded-xl text-stone-600 hover:bg-stone-50 transition-colors">
                      <Download className="ml-2 w-5 h-5 mr-2" />
                      Download TDS
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Formulations */}
      <section className="bg-emerald-900 py-20">
         <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Need Custom Specifications?</h2>
           <p className="text-emerald-100 mb-8 text-lg">
             We can process calcium carbonate and calcite to your exact mesh size and whiteness requirements.
           </p>
           <Link to="/contact" className="text-white border-b-2 border-emerald-400 pb-1 hover:text-emerald-300 hover:border-emerald-300 font-bold text-lg transition-colors">
             Contact Technical Sales &rarr;
           </Link>
         </div>
      </section>
    </div>
  );
}
