import React from 'react';
import { Target, Users, Award, TrendingUp, Linkedin, Twitter } from 'lucide-react';

const team = [
    { name: "Rajesh Kumar", role: "Managing Director", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Priya Sharma", role: "Director of Operations", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Amit Patel", role: "Head of Import & Export", img: "https://randomuser.me/api/portraits/men/22.jpg" },
    { name: "Sarah Jenkins", role: "Global Sales Lead", img: "https://randomuser.me/api/portraits/women/68.jpg" },
];

export default function About() {
    return (
        <div className="pt-0 bg-white">
            {/* Full Width Hero Image */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5afa?auto=format&fit=crop&q=80&w=2000"
                    alt="Global Connection"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-5xl font-bold mb-4">About GlobalTrade</h1>
                        <p className="text-xl max-w-2xl mx-auto text-slate-200">
                            Bridging markets, empowering businesses, and delivering excellence in global logistics since 2010.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1595839050963-c7104cf4c7b6?auto=format&fit=crop&q=80&w=800"
                            alt="Farmer"
                            className="rounded-2xl shadow-lg w-full h-64 object-cover -translate-y-8"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1560662102-aa1e400490b4?auto=format&fit=crop&q=80&w=800"
                            alt="Business Meeting"
                            className="rounded-2xl shadow-lg w-full h-64 object-cover translate-y-8"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Our Foundation</h2>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Mission & Vision</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            We believe that global trade should be seamless, transparent, and accessible. Our mission is to simplify the complex supply chain for businesses of all sizes, ensuring that goods move efficiently across borders.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <Users className="w-8 h-8 text-primary mb-3" />
                                <h4 className="font-bold text-slate-900">Expert Team</h4>
                                <p className="text-sm text-slate-500">Industry veterans with decades of experience.</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <Target className="w-8 h-8 text-primary mb-3" />
                                <h4 className="font-bold text-slate-900">Global Reach</h4>
                                <p className="text-sm text-slate-500">Network spanning 100+ countries.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leadership Team */}
            <div className="bg-slate-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Leaders</h2>
                    <p className="text-slate-600">The visionaries driving our global success.</p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center group">
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-100 group-hover:border-primary transition-colors">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                            <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                            <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-blue-100 hover:text-primary transition-colors"><Linkedin size={18} /></a>
                                <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-blue-100 hover:text-primary transition-colors"><Twitter size={18} /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications */}
            <div className="py-16 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h3 className="text-slate-400 font-bold uppercase tracking-widest mb-8">Certified Excellence</h3>
                    <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-700">
                            <Award className="w-10 h-10 text-yellow-500" /> ISO 9001
                        </div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-700">
                            <Award className="w-10 h-10 text-blue-500" /> FIATA
                        </div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-700">
                            <Award className="w-10 h-10 text-green-500" /> GMP Certified
                        </div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-700">
                            <Award className="w-10 h-10 text-purple-500" /> IATA
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
