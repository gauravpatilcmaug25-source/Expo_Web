import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Quote() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // In a real app, send data here
    };

    if (submitted) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50 px-4">
                <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Request Received!</h2>
                    <p className="text-slate-600 mb-8">
                        Thank you for your interest. Our sales team will review your requirements and get back to you within 24 hours.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="text-primary font-semibold hover:underline"
                    >
                        Submit another request
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-0 bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000"
                    alt="Get a Quote"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Request a Quote</h1>
                    <p className="text-xl text-slate-200">
                        Competitive pricing tailored to your specific logistical needs.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 sm:p-10">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Full Name</label>
                            <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Company Name</label>
                            <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Global Corp Ltd" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Email Address</label>
                            <input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                            <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+1 (555) 000-0000" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-semibold text-slate-700">Product Interest</label>
                            <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                                <option>Select a category...</option>
                                <option>Construction</option>
                                <option>Agriculture</option>
                                <option>Medical</option>
                                <option>Chemicals</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-semibold text-slate-700">Message / Requirements</label>
                            <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Please describe your shipping requirements, volume, and destination..."></textarea>
                        </div>
                        <div className="md:col-span-2 pt-4">
                            <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-2">
                                Send Request
                                <Send size={20} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
