import React from 'react';
import { ShieldCheck, Truck, Beaker, Users } from 'lucide-react';

export function ViewAbout() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">About MineralPro</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Setting the standard in industrial mineral manufacturing with over 30 years of excellence, innovation, and quality assurance.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Legacy & Mission</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Founded in 1995, MineralPro Industries has grown from a small processing unit to a state-of-the-art manufacturing complex. We specialize in the mining, processing, and distribution of high-purity Calcium Carbonate and Calcite products.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our mission is to provide industries—ranging from plastics and polymers to paints and pharmaceuticals—with raw materials that enhance their product quality and performance.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We operate our own mines ensuring a consistent supply of high-grade raw material, which is then processed using advanced micronization technology.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1678984240142-28438aec347e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwbWFjaGluZXJ5fGVufDF8fHx8MTc2OTUyOTgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Factory Interior" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats/Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Beaker size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Quality Lab</h3>
            <p className="text-sm text-slate-600">In-house laboratory for rigorous testing of whiteness, particle size, and purity.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Certified</h3>
            <p className="text-sm text-slate-600">ISO 9001:2015 certified manufacturing processes ensuring consistency.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Logistics</h3>
            <p className="text-sm text-slate-600">Efficient global shipping network handling tons of material daily.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Team</h3>
            <p className="text-sm text-slate-600">Geologists and engineers dedicated to mineral excellence.</p>
          </div>
        </div>

        {/* Laboratory Section */}
        <div className="bg-slate-900 rounded-2xl overflow-hidden text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Infrastructure & Technology</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Our plant is equipped with modern ball mills and classifier systems that allow us to achieve ultra-fine particle sizes (up to 2 microns) while maintaining a steep particle size distribution curve.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-slate-300">Advanced Wet & Dry Grinding Technology</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-slate-300">Automated Packaging Systems (25kg to 1 Ton Jumbo Bags)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-slate-300">Large Warehousing Capacity</span>
                </li>
              </ul>
            </div>
            <div className="h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1618053448748-b7251851d014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwc2NpZW50aXN0JTIwcXVhbGl0eSUyMGNvbnRyb2x8ZW58MXx8fHwxNzY5NjIwNzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Laboratory" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
