import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from "sonner@2.0.3";

export function InquiryForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // This state will eventually be used to send data to Supabase
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      toast.success("Inquiry sent successfully!");
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: 'General Inquiry',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Request a Quote</h3>
      <p className="text-slate-600 mb-6">Fill out the form below and our sales team will get back to you within 24 hours.</p>
      
      {success ? (
        <div className="bg-green-50 border border-green-200 rounded-md p-6 flex flex-col items-center justify-center text-center">
          <CheckCircle className="text-green-600 w-12 h-12 mb-3" />
          <h4 className="text-green-800 font-semibold text-lg">Inquiry Sent!</h4>
          <p className="text-green-700 mt-1">Thank you for your interest. We will contact you shortly.</p>
          <button 
            onClick={() => setSuccess(false)}
            className="mt-4 text-green-700 font-medium hover:text-green-800 underline"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Industrial Corp Ltd."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">Product of Interest *</label>
            <select
              id="product"
              name="product"
              required
              value={formData.product}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Calcium Carbonate Powder">Calcium Carbonate Powder</option>
              <option value="Calcite Lumps">Calcite Lumps</option>
              <option value="Calcite Powder">Calcite Powder</option>
              <option value="Uncoated Calcium Carbonate">Uncoated Calcium Carbonate</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
              placeholder="Tell us about your requirements..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-sm transition-colors flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? (
              <>Processing...</>
            ) : (
              <>Send Inquiry <Send size={18} /></>
            )}
          </button>
          
          <p className="text-xs text-slate-500 mt-4 text-center">
            By submitting this form, you agree to our privacy policy. Your information is secure.
          </p>
        </form>
      )}
    </div>
  );
}
