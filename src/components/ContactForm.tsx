import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

declare global {
  interface Window {
    Forminit: any;
  }
}

interface ContactFormProps {
  preselectedProduct?: string;
}

export function ContactForm({ preselectedProduct }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [productValue, setProductValue] = useState(preselectedProduct || '');
  const [phonePlaceholder, setPhonePlaceholder] = useState('');

  // Generate random phone placeholder on mount
  useEffect(() => {
    const generateRandomPhone = () => {
      const digits = [];
      for (let i = 0; i < 10; i++) {
        digits.push(Math.floor(Math.random() * 10));
      }
      return digits.join('');
    };
    setPhonePlaceholder(generateRandomPhone());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

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

      setStatus('success');
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
    <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h3>
      
      {status === 'error' && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-start">
          <AlertCircle size={20} className="mr-2 mt-0.5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="fi-sender-fullName"
            required
            className="w-full px-4 py-3 rounded border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-slate-50"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="fi-text-company"
            required
            className="w-full px-4 py-3 rounded border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-slate-50"
            placeholder="Industrial Co."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="fi-sender-email"
            required
            className="w-full px-4 py-3 rounded border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-slate-50"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <select
              id="country-code"
              className="px-3 py-3 bg-slate-50 rounded-l border border-r-0 border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm"
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
              className="flex-1 px-4 py-3 rounded-r border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-slate-50"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="product" className="block text-sm font-semibold text-slate-700 mb-2">
          Product of Interest
        </label>
        <select
          id="product"
          name="fi-text-product"
          value={productValue}
          onChange={(e) => setProductValue(e.target.value)}
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
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
          Message / Requirements <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="fi-text-message"
          rows={4}
          required
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
            <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
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
