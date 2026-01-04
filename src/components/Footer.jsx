import React from 'react';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-white">
                            <Globe className="w-8 h-8 text-secondary" />
                            <span className="text-2xl font-bold">GlobalTrade</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Your trusted partner in international trade and logistics.
                            Connecting markets, delivering value, and ensuring reliability across the globe.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                                <a key={idx} href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-secondary hover:text-white transition-colors">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            {['About Us', 'Services', 'Product Catalog', 'Sustainability', 'Careers', 'News & Perspectives'].map(item => (
                                <li key={item}>
                                    <a href="#" className="hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-200">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
                        <ul className="space-y-4 text-sm">
                            {['Ocean Freight', 'Air Logistics', 'Customs Brokerage', 'Warehousing', 'Supply Chain Consulting', 'Project Cargo'].map(item => (
                                <li key={item}>
                                    <a href="#" className="hover:text-secondary transition-colors inline-block hover:translate-x-1 duration-200">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-6 text-sm">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                <span>
                                    123 Trade Center Blvd, Suite 800<br />
                                    Logistics City, NY 10001,<br />USA
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <span className="break-all">contact@globaltrade.example.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} GlobalTrade Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
