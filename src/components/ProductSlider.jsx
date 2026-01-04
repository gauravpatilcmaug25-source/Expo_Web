import React, { useState, useEffect, useRef } from 'react';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductSlider() {
    const scrollRef = useRef(null);

    // Auto-scroll logic
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const speed = 1; // Pixels per frame
        let animationId;

        const animateScroll = () => {
            if (scrollContainer) {
                scrollContainer.scrollLeft += speed;
                // Reset to start if reached end (infinite loop illusion w/ duplicates effectively requires complex logic, 
                // strictly for "auto scroll" we can just scroll back and forth or reset)
                // For simple auto-scroll:
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                    scrollContainer.scrollLeft = 0;
                }
            }
            animationId = requestAnimationFrame(animateScroll);
        };

        // Pause on hover
        const startScroll = () => {
            animationId = requestAnimationFrame(animateScroll);
        };

        const stopScroll = () => {
            cancelAnimationFrame(animationId);
        };

        startScroll();

        scrollContainer.addEventListener('mouseenter', stopScroll);
        scrollContainer.addEventListener('mouseleave', startScroll);

        return () => {
            cancelAnimationFrame(animationId);
            if (scrollContainer) {
                scrollContainer.removeEventListener('mouseenter', stopScroll);
                scrollContainer.removeEventListener('mouseleave', startScroll);
            }
        };
    }, []);

    return (
        <div className="relative py-16 bg-slate-50">
            <div className="text-center mb-10 px-4">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Products</h2>
                <p className="text-slate-500">Discover our premium range of export-quality goods.</p>
            </div>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 px-4 pb-8 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {/* Render products twice to create a longer scrollable area/loop feel */}
                {[...products, ...products].map((product, index) => (
                    <div
                        key={`${product.id}-${index}`}
                        className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer"
                    >
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                            <p className="text-slate-500 text-sm line-clamp-2 mb-4">{product.description}</p>
                            <Link to="/products" className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                View Details <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
