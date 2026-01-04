import React from 'react';
import CategorySection from '../components/CategorySection';

export default function Products() {
    return (
        <div className="pt-0 bg-white">
            {/* New Attractive Hero for Products */}
            <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
                <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
                    alt="Global Trade Products"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/70"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">Our Premium Catalog</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-light">
                        Explore a diverse range of high-quality products sourced directly from manufacturers for the global market.
                    </p>
                </div>
            </div>

            <CategorySection />
        </div>
    );
}
