import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
    return (
        <div className="pt-0 bg-white">
            {/* Header */}
            <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=2000"
                    alt="Contact Support"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        We're here to help. Reach out to our team for any inquiries or support.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Vertical Info List */}
                    <div className="lg:w-1/3 flex flex-col gap-8">
                        <div className="text-left">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Let's Connect</h2>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                Reach out directly or visit our headquarters. We are available 24/7 for our global partners.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">

                            {/* WhatsApp Chat Button - Top Priority */}
                            <a
                                href="https://wa.me/911234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex gap-4 p-6 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 shadow-md hover:shadow-lg hover:border-green-500/30 transition-all cursor-pointer transform hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shrink-0 shadow-sm group-hover:bg-green-600 transition-colors">
                                    <MessageCircle size={24} className="fill-current" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1 text-lg group-hover:text-green-700 transition-colors">Chat on WhatsApp</h4>
                                    <p className="text-slate-600 text-sm font-medium">Instant Support</p>
                                    <p className="text-green-600 text-xs mt-1 font-bold tracking-wide">CLICK TO START</p>
                                </div>
                            </a>

                            {/* Item 1 */}
                            <div className="group flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <MapPin size={24} className="text-primary group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                                    <p className="text-slate-600 text-sm">Nashik, Maharashtra, India</p>
                                    <p className="text-slate-500 text-xs mt-1">Global Trade Hub</p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="group flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Phone size={24} className="text-primary group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                                    <p className="text-slate-600 text-sm">+91 123 456 7890</p>
                                    <p className="text-slate-500 text-xs mt-1">Mon-Fri 9am - 6pm</p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="group flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Mail size={24} className="text-primary group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                                    <p className="text-slate-600 text-sm">info@globaltrade.in</p>
                                    <p className="text-slate-500 text-xs mt-1">Response within 24h</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Real Google Map - Nashik */}
                    <div className="lg:w-2/3 h-auto min-h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.26415065445!2d73.71454504106673!3d19.9911053428383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xcb07845d9d28215c!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717584123456!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map Nashik"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
}
