import React, { useState } from 'react';
import { Truck, Anchor, Plane, ShieldCheck, Box, BookOpen, UserCheck, Plus, Minus, CheckCircle } from 'lucide-react';

const services = [
    {
        icon: Anchor,
        title: "Ocean Freight",
        desc: "Reliable and cost-effective ocean shipping solutions for full container loads (FCL) and less than container loads (LCL)."
    },
    {
        icon: Plane,
        title: "Air Freight",
        desc: "Expedited air cargo services for time-critical shipments to direct destinations globally."
    },
    {
        icon: Truck,
        title: "Land Transportation",
        desc: "Comprehensive trucking networks ensuring seamless door-to-door delivery across continents."
    },
    {
        icon: UserCheck,
        title: "Consultancy",
        desc: "Expert guidance on market entry, trade regulations, and supply chain optimization strategies."
    },
    {
        icon: BookOpen,
        title: "Export-Import Training",
        desc: "Practical training modules designed to equip your team with essential global trade operational skills."
    },
    {
        icon: Box,
        title: "Warehousing & Distribution",
        desc: "Secure storage solutions with inventory management and distribution services."
    },
];

const faqs = [
    {
        q: "What makes your consultancy service unique?",
        a: "Our consultancy services are customized to your specific business needs, ensuring that the strategies we develop are perfectly aligned with your goals. We don't offer one-size-fits-all solutions; we dive deep into your operational challenges."
    },
    {
        q: "Who can benefit from your export-import training?",
        a: "Our training is ideal for businesses new to global trade, logistics managers looking to upskill, and entrepreneurs wanting to understand the intricacies of international shipping and compliance."
    },
    {
        q: "How do you ensure timely delivery in your freight forwarding services?",
        a: "We leverage a vast network of reliable carriers and advanced tracking technology to monitor shipments in real-time. Our proactive team anticipates potential delays and implements contingency plans immediately."
    },
    {
        q: "What industries do your global trade services cover?",
        a: "We serve a wide range of industries including Agriculture, Construction, Pharmaceuticals, Textiles, Automotive, and Electronics."
    },
];

const features = [
    { title: "Tailored Solutions", desc: "We customize our services to meet the specific needs of your business." },
    { title: "Expertise", desc: "Benefit from the knowledge and experience of seasoned professionals." },
    { title: "Efficiency", desc: "Streamlined processes that save you time and money." },
    { title: "Compliance", desc: "Stay on top of international regulations with our compliance support." },
    { title: "Support", desc: "Ongoing assistance to ensure your global trade operations run smoothly." },
    { title: "Reliable Logistics", desc: "Trustworthy freight forwarding and logistics services." },
    { title: "Global Reach", desc: "We operate on a worldwide scale, making your international trade seamless." },
    { title: "Strategic Insights", desc: "Data-driven consultancy to guide your business decisions." },
    { title: "Customer Satisfaction", desc: "We prioritize your success in every service we offer." },
];

export default function Services() {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (idx) => {
        setOpenFaq(openFaq === idx ? null : idx);
    };

    return (
        <div className="pt-0 bg-white">
            {/* Hero */}
            <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1566576912902-1d5345735163?auto=format&fit=crop&q=80&w=2000"
                    alt="Logistics Services"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">World-Class Services</h1>
                    <p className="text-xl text-slate-200">
                        End-to-end logistics, consultancy, and training solutions designed to keep your business moving forwarded.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Solutions</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-transparent hover:border-primary transition-all duration-300 hover:-translate-y-2 group">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-primary/5 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-16 text-center text-slate-900">Why Partner With Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feat, idx) => (
                            <div key={idx} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                                <CheckCircle className="text-green-500 shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-lg font-bold mb-2 text-slate-900">{feat.title}</h3>
                                    <p className="text-slate-600 text-sm">{feat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQs */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                            <button
                                onClick={() => toggleFaq(idx)}
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-bold text-slate-800 text-lg pr-8">{faq.q}</span>
                                {openFaq === idx ? <Minus className="text-primary shrink-0" /> : <Plus className="text-slate-400 shrink-0" />}
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
