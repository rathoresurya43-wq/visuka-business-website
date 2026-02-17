import React from 'react';
import { motion } from 'motion/react';
import { Users, Globe, Target, Factory, Check } from 'lucide-react';

export function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-stone-900 py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1750363947051-0a2c5310c428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9sb2dpc3QlMjBleGFtaW5pbmclMjByb2NrJTIwb3V0ZG9vcnN8ZW58MXx8fHwxNzY5NzA3ODQ4fDA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Expertise in Every Particle.</h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Visuka Minerals & Powders is a leading manufacturer of high-quality industrial minerals, serving the global manufacturing sector with precision and reliability.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-emerald-700 font-bold uppercase tracking-widest text-sm">About Us</span>
                <div className="h-px flex-grow bg-emerald-100"></div>
              </div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6">Manufacturing Excellence</h2>
              <div className="prose prose-lg text-stone-600">
                <p>
                  Established with a vision to provide superior raw materials to the industry, Visuka Minerals & Powders has grown into a trusted name in calcium carbonate and calcite processing. Our facility is equipped with advanced technology to grind, micronize, and classify minerals to exact specifications.
                </p>
                <p>
                  We control the entire supply chain—from sourcing high-grade limestone from our own quarries to final packaging. This vertical integration allows us to guarantee consistency in whiteness, purity, and particle size for every bag that leaves our plant.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
               <div className="space-y-6 mt-12">
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                    <h3 className="text-4xl font-bold text-emerald-700 mb-2">20+</h3>
                    <p className="text-stone-600 font-medium">Years Experience</p>
                  </div>
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                    <h3 className="text-4xl font-bold text-emerald-700 mb-2">50k</h3>
                    <p className="text-stone-600 font-medium">Tons Annual Capacity</p>
                  </div>
               </div>
               <div className="space-y-6">
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                    <h3 className="text-4xl font-bold text-emerald-700 mb-2">99%</h3>
                    <p className="text-stone-600 font-medium">Purity Guarantee</p>
                  </div>
                  <div className="bg-emerald-800 p-6 rounded-2xl text-white">
                    <h3 className="text-4xl font-bold mb-2">ISO</h3>
                    <p className="text-emerald-200 font-medium">9001 Certified</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Values */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900">Why Choose Visuka?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">Consistent Quality</h3>
              <p className="text-stone-600 leading-relaxed">
                Our in-house laboratory conducts rigorous testing on every batch for brightness, oil absorption, and mesh size accuracy.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8">
                <Factory className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">Advanced Infrastructure</h3>
              <p className="text-stone-600 leading-relaxed">
                We utilize modern ball mills and classifiers to produce ultra-fine powders ranging from 300 to 2500 mesh.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8">
                <Users className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">Customer Support</h3>
              <p className="text-stone-600 leading-relaxed">
                Our technical sales team works closely with you to identify the right grade of material for your specific application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-emerald-700 font-bold uppercase tracking-widest text-sm">Manufacturing</span>
              <h2 className="text-3xl font-bold text-stone-900 mt-2">Our Process</h2>
            </div>
          </div>

          <div className="space-y-8">
            {[
              { title: "01. Sourcing", desc: "Extracting high-purity calcite from our premium mines." },
              { title: "02. Washing & Sorting", desc: "Removing impurities to ensure high whiteness raw material." },
              { title: "03. Grinding & Micronizing", desc: "Processing into fine powder using state-of-the-art machinery." },
              { title: "04. Quality Control", desc: "Final testing and automated packaging for dispatch." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-start md:items-center border-b border-stone-200 pb-8 last:border-0">
                <span className="text-2xl md:text-3xl font-bold text-stone-300 mr-8 shrink-0">{step.title.split('.')[0]}</span>
                <div>
                   <h3 className="text-xl font-bold text-stone-900 mb-2">{step.title.split('. ')[1]}</h3>
                   <p className="text-stone-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
