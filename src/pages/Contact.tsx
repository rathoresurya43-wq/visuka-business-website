import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    Forminit: any;
  }
}

export function Contact() {
  const location = useLocation();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [productValue, setProductValue] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const productParam = searchParams.get('product');
    if (productParam) {
      setProductValue(productParam);
    }
  }, [location]);

  // Generate random phone placeholder
  const generateRandomPhone = () => {
    const digits = [];
    for (let i = 0; i < 10; i++) {
      digits.push(Math.floor(Math.random() * 10));
    }
    return digits.join('');
  };

  const [phonePlaceholder] = useState(generateRandomPhone());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const countryCode = (form.querySelector('#country-code') as HTMLSelectElement)?.value || '+91';
    const phoneNumber = (form.querySelector('#phone-input') as HTMLInputElement)?.value.replace(/\D/g, '') || '';

    // Combine country code with phone
    formData.set('fi-sender-phone', countryCode + phoneNumber);

    try {
      if (window.Forminit) {
        const forminit = new window.Forminit();
        const { error } = await forminit.submit('x378q8g10wp', formData);

        if (error) {
          throw new Error(error.message);
        }
      } else {
        // Fallback if SDK not loaded
        const response = await fetch('https://forminit.com/f/x378q8g10wp', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          throw new Error('Form submission failed');
        }
      }

      toast.success("Inquiry received! We'll get back to you with a quote shortly.");
      form.reset();
      setProductValue('');
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit inquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}
      <div className="bg-stone-900 py-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Request a Quote</h1>
        <p className="text-xl text-stone-400 max-w-xl mx-auto">
          Get in touch with our sales team for samples and pricing details.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Info Side */}
          <div className="lg:w-1/3 bg-emerald-900 p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">Factory Contact</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-emerald-800 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-emerald-100" />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-100 text-sm uppercase tracking-wider mb-1">Manufacturing Plant</p>
                    <p className="text-white leading-relaxed">
                      F248, Makrana,<br />
                      Rajasthan 341502,<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-800 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-emerald-100" />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-100 text-sm uppercase tracking-wider mb-1">Sales Hotline</p>
                    <p className="text-white text-lg">+91-8375072152</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-800 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-emerald-100" />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-100 text-sm uppercase tracking-wider mb-1">Sales Email</p>
                    <p className="text-white">sales@visukaminerals.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute bottom-0 right-0 -mb-20 -mr-20 w-64 h-64 bg-emerald-800 rounded-full opacity-50"></div>
            <div className="absolute top-0 left-0 -mt-10 -ml-10 w-32 h-32 bg-emerald-800 rounded-full opacity-50"></div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 p-12">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-stone-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="fi-sender-fullName"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-stone-700 mb-2">
                    Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="company"
                    name="fi-text-company"
                    type="text"
                    required
                    placeholder="Company Ltd."
                    className="w-full px-5 py-4 bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-stone-700 mb-2">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="fi-sender-email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="w-full px-5 py-4 bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-stone-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <select
                      id="country-code"
                      className="px-3 py-4 bg-stone-50 rounded-l-xl border border-r-0 border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+966">🇸🇦 +966</option>
                      <option value="+65">🇸🇬 +65</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+86">🇨🇳 +86</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+39">🇮🇹 +39</option>
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+7">🇷🇺 +7</option>
                      <option value="+55">🇧🇷 +55</option>
                      <option value="+27">🇿🇦 +27</option>
                      <option value="+20">🇪🇬 +20</option>
                      <option value="+90">🇹🇷 +90</option>
                      <option value="+82">🇰🇷 +82</option>
                      <option value="+62">🇮🇩 +62</option>
                      <option value="+92">🇵🇰 +92</option>
                      <option value="+880">🇧🇩 +880</option>
                      <option value="+94">🇱🇰 +94</option>
                      <option value="+977">🇳🇵 +977</option>
                      <option value="+95">🇲🇲 +95</option>
                      <option value="+84">🇻🇳 +84</option>
                      <option value="+66">🇹🇭 +66</option>
                      <option value="+63">🇵🇭 +63</option>
                      <option value="+60">🇲🇾 +60</option>
                      <option value="+98">🇮🇷 +98</option>
                    </select>
                    <input
                      id="phone-input"
                      type="tel"
                      required
                      placeholder={phonePlaceholder}
                      className="flex-1 px-5 py-4 bg-stone-50 rounded-r-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-bold text-stone-700 mb-2">
                  Product Interest
                </label>
                <div className="relative">
                  <select
                    id="product"
                    name="fi-text-product"
                    value={productValue}
                    onChange={(e) => setProductValue(e.target.value)}
                    className="w-full px-5 py-4 bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
                  >
                    <option value="">Select a product...</option>
                    <option value="Calcium Carbonate Powder">Calcium Carbonate Powder</option>
                    <option value="Calcite Lumps">Calcite Lumps</option>
                    <option value="Calcite Powder">Calcite Powder</option>
                    <option value="Uncoated Calcium Carbonate">Uncoated Calcium Carbonate</option>
                    <option value="Other">Other / Custom Request</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-stone-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-stone-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="fi-text-message"
                  rows={4}
                  required
                  placeholder="Please specify quantity, mesh size, and application..."
                  className="w-full px-5 py-4 bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-stone-900 hover:bg-emerald-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-98"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
