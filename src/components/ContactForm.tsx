import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../supabaseClient';

interface ContactFormProps {
  preselectedProduct?: string;
}

export function ContactForm({ preselectedProduct }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: preselectedProduct || '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const { error } = await supabase
        .from('inquiries')
        .insert([
          {
            name: formData.name,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            product_interest: formData.product,
            message: formData.message,
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) throw error;
      
      setStatus('success');
      setFormData({ name: '', company: '', email: '', phone: '', product: '', message: '' });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Failed to submit inquiry. Please try again later.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Inquiry Sent Successfully</h3>
        <p className="text-green-700 mb-6">Thank you for your interest. Our sales team will contact you within 24 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-green-800 font-semibold underline hover:text-green-900"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h3>
      
      {status === 'error' && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-start">
          <AlertCircle size={20} className="mr-2 mt-0.5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-slate-50"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-slate-50"
            placeholder="Industrial Co."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-slate-50"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-slate-50"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="product" className="block text-sm font-semibold text-slate-700 mb-2">Product of Interest</label>
        <select
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-slate-50"
        >
          <option value="">Select a product...</option>
          <option value="Calcium Carbonate Powder">Calcium Carbonate Powder</option>
          <option value="Calcite Lumps">Calcite Lumps</option>
          <option value="Calcite Powder">Calcite Powder</option>
          <option value="Uncoated Calcium Carbonate">Uncoated Calcium Carbonate</option>
          <option value="Other">Other / General Inquiry</option>
        </select>
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message / Requirements</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-slate-50 resize-y"
          placeholder="Please describe your requirements, volume, and application..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`w-full bg-blue-600 text-white font-bold py-4 rounded-sm uppercase tracking-wide transition-all ${
          status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
        } flex justify-center items-center`}
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Inquiry <Send size={18} className="ml-2" />
          </>
        )}
      </button>
    </form>
  );
}
