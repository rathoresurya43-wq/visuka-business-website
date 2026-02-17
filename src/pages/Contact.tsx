import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '../supabaseClient';

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}

export function Contact() {
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm<ContactFormData>();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const productParam = searchParams.get('product');
    if (productParam) {
      setValue('product', productParam);
    }
  }, [location, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    try {
      const { error } = await supabase
        .from('inquiries')
        .insert([
          {
            name: data.name,
            company: data.company,
            email: data.email,
            phone: data.phone,
            product_interest: data.product,
            message: data.message,
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) throw error;
      
      toast.success("Inquiry received! We'll get back to you with a quote shortly.");
      reset();
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit inquiry. Please try again later.');
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
                      123 Industrial Park,<br />
                      Mining Zone B,<br />
                      State, Country 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-800 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-emerald-100" />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-100 text-sm uppercase tracking-wider mb-1">Sales Hotline</p>
                    <p className="text-white text-lg">+1 (888) VISUKA-01</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-800 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-emerald-100" />
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-100 text-sm uppercase tracking-wider mb-1">Sales Email</p>
                    <p className="text-white">sales@visuka.com</p>
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-5 py-4 bg-stone-50 rounded-xl border ${errors.name ? 'border-red-500' : 'border-stone-200'} focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all`}
                    placeholder="John Doe"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500 font-medium">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-stone-700 mb-2">Company</label>
                  <input
                    id="company"
                    type="text"
                    className={`w-full px-5 py-4 bg-stone-50 rounded-xl border ${errors.company ? 'border-red-500' : 'border-stone-200'} focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all`}
                    placeholder="Company Ltd."
                    {...register("company", { required: "Company is required" })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-stone-700 mb-2">Work Email</label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-5 py-4 bg-stone-50 rounded-xl border ${errors.email ? 'border-red-500' : 'border-stone-200'} focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all`}
                    placeholder="john@company.com"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email"
                      }
                    })}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500 font-medium">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-stone-700 mb-2">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    className={`w-full px-5 py-4 bg-stone-50 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-stone-200'} focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all`}
                    placeholder="+1 (555) 000-0000"
                    {...register("phone", { required: "Phone is required" })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-bold text-stone-700 mb-2">Product Interest</label>
                <div className="relative">
                   <select
                    id="product"
                    className="w-full px-5 py-4 bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
                    {...register("product")}
                  >
                    <option value="">Select a product...</option>
                    <option value="Calcium Carbonate Powder">Calcium Carbonate Powder</option>
                    <option value="Calcite Lumps">Calcite Lumps</option>
                    <option value="Calcite Powder">Calcite Powder</option>
                    <option value="Uncoated Calcium Carbonate">Uncoated Calcium Carbonate</option>
                    <option value="Other">Other / Custom Request</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-stone-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-stone-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full px-5 py-4 bg-stone-50 rounded-xl border ${errors.message ? 'border-red-500' : 'border-stone-200'} focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all`}
                  placeholder="Please specify quantity, mesh size, and application..."
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && <p className="mt-1 text-xs text-red-500 font-medium">{errors.message.message}</p>}
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
