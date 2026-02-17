import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, Factory, Truck, Check } from 'lucide-react';

export const Home = ({ setPage }: { setPage: (p: 'home' | 'about' | 'products' | 'contact') => void }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1761519609252-3b868e540398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
            alt="Industrial Factory Interior" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-3 py-1 bg-amber-600 text-white text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
              ISO 9001:2015 Certified
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              High Purity <span className="text-amber-500">Industrial Minerals</span> & Powders
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Leading manufacturer of premium Calcium Carbonate and Calcite products. 
              We deliver consistency, purity, and quality for your industrial applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setPage('products')}
                className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-sm transition-all flex items-center justify-center group"
              >
                View Products
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setPage('contact')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold rounded-sm transition-all flex items-center justify-center"
              >
                Request Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Credentials Bar */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-slate-900 mb-1">25+</h3>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Years Experience</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-slate-900 mb-1">50K+</h3>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Tons Produced/Year</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-slate-900 mb-1">99%</h3>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Product Purity</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-slate-900 mb-1">Global</h3>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Export Network</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Teaser */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">World-Class Manufacturing Infrastructure</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                At MineraTech, we leverage state-of-the-art grinding and micronizing technology to produce ultrafine minerals. Our fully automated facility ensures consistent particle size distribution and high whiteness for various industrial applications including plastics, paints, rubber, and paper.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Advanced micronizing technology',
                  'In-house Quality Control Laboratory',
                  'Environmentally compliant processes',
                  'Customized packaging solutions'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <Check className="w-5 h-5 text-amber-600 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setPage('about')}
                className="text-amber-600 font-bold hover:text-amber-700 flex items-center"
              >
                Learn more about our company <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576669802218-d535933f897c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Lab Quality Control" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-slate-900 p-6 rounded-lg shadow-lg hidden md:block max-w-xs">
                <p className="text-white text-sm italic">"Quality is not an act, it is a habit. We test every batch to ensure perfection."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Products</h2>
            <p className="text-slate-600">
              We specialize in processing high-grade natural Calcium Carbonate into various forms to meet diverse industrial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Calcium Carbonate Powder',
                desc: 'Micronized powder with high brightness and low oil absorption.',
                img: 'https://images.unsplash.com/photo-1737098140591-f0988ae7e15a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
              },
              {
                title: 'Calcite Lumps',
                desc: 'High purity raw calcite lumps sourced from premium mines.',
                img: 'https://images.unsplash.com/photo-1674831311475-bafedda32036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
              },
              {
                title: 'Uncoated Calcium Carbonate',
                desc: 'Versatile filler material for paint, PVC, and construction industries.',
                img: 'https://images.unsplash.com/photo-1761519609252-3b868e540398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
              }
            ].map((product, i) => (
              <div key={i} className="group cursor-pointer" onClick={() => setPage('products')}>
                <div className="relative overflow-hidden rounded-lg mb-4 h-64">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                  <img 
                    src={product.img} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">{product.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{product.desc}</p>
                <span className="text-amber-600 font-bold text-sm flex items-center uppercase tracking-wide">
                  View Specs <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => setPage('products')}
              className="px-8 py-3 bg-slate-900 text-white font-bold rounded-sm hover:bg-slate-800 transition-colors inline-flex items-center"
            >
              View Full Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6 border border-slate-700 rounded-lg hover:border-amber-600 transition-colors">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-500">
                <Factory size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Modern Infrastructure</h3>
              <p className="text-slate-400">Equipped with the latest grinding mills and classifiers to ensure precise particle size control.</p>
            </div>
            <div className="text-center p-6 border border-slate-700 rounded-lg hover:border-amber-600 transition-colors">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-500">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-slate-400">Strict quality checks at every stage of production from raw material to final packaging.</p>
            </div>
            <div className="text-center p-6 border border-slate-700 rounded-lg hover:border-amber-600 transition-colors">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-500">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Timely Delivery</h3>
              <p className="text-slate-400">Robust logistics network ensuring on-time delivery for both domestic and international orders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to optimize your production with premium minerals?</h2>
          <p className="text-amber-100 text-lg mb-10">Get a competitive quote or request a free sample for your laboratory testing.</p>
          <button 
            onClick={() => setPage('contact')}
            className="px-10 py-4 bg-white text-amber-600 font-bold text-lg rounded-sm shadow-lg hover:bg-slate-50 transition-colors"
          >
            Contact Sales Team
          </button>
        </div>
      </section>
    </div>
  );
};
