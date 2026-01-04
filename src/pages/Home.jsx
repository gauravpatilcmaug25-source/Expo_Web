import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ProductSlider from '../components/ProductSlider';
import ClientsSlider from '../components/ClientsSlider';
import { ArrowRight, Globe, TrendingUp, ShieldCheck, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <HeroSlider />

            {/* Introduction */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3 animate-fade-in-up">Who We Are</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 animate-fade-in-up">Connecting Markets, Delivering Value</h3>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-16 animate-fade-in-up">
                        We specialize in bridging the gap between Indian agriculture and global demand. With state-of-the-art logistics and a commitment to quality, we ensure your products reach the world stage securely and on time.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Globe className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-900">Global Network</h3>
                            <p className="text-slate-600">Access to markets across 4 continents ensuring wide reach.</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <ShieldCheck className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-900">Quality Assured</h3>
                            <p className="text-slate-600">Strict ISO standardized quality controls on every shipment.</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <TrendingUp className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-900">Market Growth</h3>
                            <p className="text-slate-600">Helping your business scale internationally with data insights.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Slider */}
            <section className="bg-white">
                <ProductSlider />
            </section>

            {/* Clients Slider */}
            <ClientsSlider />

            {/* Join Us / CTA Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
                        alt="Global Connection"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Expand Your Business?</h2>
                    <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Join hundreds of satisfied partners trading globally with us. Start your journey today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                        <Link to="/quote">
                            <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl active:scale-95 flex items-center gap-2">
                                Get Started <ArrowRight size={20} />
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
                                Contact Sales
                            </button>
                        </Link>
                    </div>

                    <div className="flex justify-center gap-8 text-white/70">
                        <a href="#" className="hover:text-white hover:scale-110 transition-all"><Linkedin size={32} /></a>
                        <a href="#" className="hover:text-white hover:scale-110 transition-all"><Facebook size={32} /></a>
                        <a href="#" className="hover:text-white hover:scale-110 transition-all"><Instagram size={32} /></a>
                        <a href="#" className="hover:text-white hover:scale-110 transition-all"><Youtube size={32} /></a>
                    </div>
                    <p className="mt-4 text-sm text-blue-200">Connect with us on social media</p>
                </div>
            </section>
        </>
    );
}
