import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Mountain, Settings, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function Home() {
  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1767294274634-613a3545e36d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwaW50ZXJpb3IlMjBjbGVhbiUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzY5NjIxMTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Modern Industrial Factory" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/70 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-1 w-12 bg-emerald-500"></div>
              <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm">Industrial Manufacturing</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-stone-50 mb-8 leading-tight">
              Premium Calcium <br />
              <span className="text-emerald-500">Carbonate & Calcite.</span>
            </h1>
            <p className="text-lg text-stone-300 mb-10 leading-relaxed max-w-3xl">
              Welcome to Visuka Minerals, your trusted partner in high-purity Calcium Carbonate sourcing and supply. We deliver top-grade mineral solutions tailored to the needs of diverse industries around the world. With expertise in advanced processing, quality assurance, and flexible manufacturing, we provide products that enhance performance, consistency, and cost-efficiency for our customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products"
                className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-200 shadow-xl flex items-center justify-center"
              >
                View Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/contact"
                className="bg-transparent border border-stone-400 text-stone-200 hover:bg-stone-800 hover:border-stone-800 hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-200 flex items-center justify-center"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Precision Manufacturing, Consistent Quality</h2>
            <p className="text-stone-600 text-lg">
              Our state-of-the-art processing facility ensures that every batch of Calcite and Calcium Carbonate meets rigorous industrial standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: ShieldCheck,
                title: "Quality Assurance",
                text: "Strict laboratory testing for whiteness, purity, and particle size distribution."
              },
              {
                icon: Settings,
                title: "Advanced Processing",
                text: "High-capacity ball mills and micronizing units for ultra-fine powder production."
              },
              {
                icon: Layers,
                title: "Diverse Applications",
                text: "Specialized grades for PVC, masterbatches, paints, rubber, and construction."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-start p-8 bg-stone-50 rounded-2xl hover:bg-emerald-50/50 transition-colors border border-transparent hover:border-emerald-100">
                <div className="bg-emerald-100 p-3 rounded-xl mb-6">
                  <item.icon className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-24 bg-stone-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-700">
                <img 
                  src="https://images.unsplash.com/photo-1737098140591-f0988ae7e15a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNhbGNpdW0lMjBjYXJib25hdGUlMjBwb3dkZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc2OTYyMTE0Nnww&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Calcium Carbonate Powder" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-stone-900/80 backdrop-blur-md p-6 border-t border-stone-700">
                  <p className="text-emerald-400 font-bold mb-1">Star Product</p>
                  <p className="text-white text-xl font-semibold">Micronized Calcium Carbonate Powder</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="w-5 h-5 text-emerald-500" />
                <span className="text-stone-400 uppercase tracking-widest text-sm font-semibold">Material Spotlight</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">The Backbone of<br />Industrial Production.</h2>
              <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                Our Calcium Carbonate Powder is derived from high-purity limestone deposits. It serves as a critical filler and extender, enhancing the properties of finished products while reducing overall formulation costs.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center text-stone-300">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-4"></div>
                  <span>High Whiteness & Brightness</span>
                </div>
                <div className="flex items-center text-stone-300">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-4"></div>
                  <span>Consistent Particle Size Distribution</span>
                </div>
                <div className="flex items-center text-stone-300">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-4"></div>
                  <span>Available in Coated & Uncoated Grades</span>
                </div>
              </div>

              <Link 
                to="/products"
                className="inline-flex text-emerald-400 font-bold hover:text-emerald-300 items-center text-lg"
              >
                View Technical Specs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-800 py-24 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-emerald-700/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-stone-900/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to optimize your supply chain?</h2>
          <p className="text-emerald-100 text-xl mb-12 max-w-2xl mx-auto">
            Contact us today for samples, technical data sheets, and competitive bulk pricing for your mineral requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-white text-emerald-900 hover:bg-stone-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all"
            >
              Get a Quote
            </Link>
            <Link 
              to="/products"
              className="bg-emerald-900/50 hover:bg-emerald-900 text-white border border-emerald-700 px-10 py-4 rounded-full font-bold text-lg transition-all"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
