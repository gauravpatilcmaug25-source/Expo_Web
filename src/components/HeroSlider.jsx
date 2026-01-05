import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        image: "/hero-ship.webp",
        title: "Premium Indian Agriculture",
        subtitle: "Exporting nature's finest from India's heartlands to the world.",
        cta: "Explore Products"
    },
    {
        id: 2,
        image: "/slider1.webp",
        title: "Global Logistics Network",
        subtitle: "Seamless import-export solutions connecting continents.",
        cta: "Our Services"
    },
    {
        id: 3,
        image: "/image.webp", // Container Ship
        title: "Reliable Freight Forwarding",
        subtitle: "Secure, timely, and compliant delivery of your goods.",
        cta: "Get a Quote"
    }
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative w-full h-[600px] lg:h-[85vh] overflow-hidden bg-slate-900 group">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

                    <img
                        src={slide.image}
                        alt={slide.title}
                        fetchpriority="high"
                        decoding="async"
                        className="w-full h-full object-cover transform scale-105 transition-transform duration-[10s]"
                    />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center z-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className={`max-w-3xl transition-all duration-1000 transform ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}>
                                <div className="inline-block px-4 py-1 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
                                    Global Trade & Logistics
                                </div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl font-light">
                                    {slide.subtitle}
                                </p>
                                <div className="flex gap-4">
                                    <Link to="/products">
                                        <button className="bg-primary hover:bg-white hover:text-primary text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-blue-900/50 flex items-center gap-2">
                                            {slide.cta} <ArrowRight size={20} />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-primary transition-all md:opacity-0 group-hover:opacity-100 border border-white/20"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-primary transition-all md:opacity-0 group-hover:opacity-100 border border-white/20"
            >
                <ChevronRight size={32} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === current ? 'bg-primary w-10' : 'bg-white/40 w-2 hover:bg-white'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
