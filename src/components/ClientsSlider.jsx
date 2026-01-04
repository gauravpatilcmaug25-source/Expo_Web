import React from 'react';

const clients = [
    "Global Logistics Co.", "AgroImpex Ltd.", "TechTrade Solutions", "OceanBound Shipping",
    "Prime Exports", "Vertex Supply Chain", "Horizon Traders", "Pacific Cargo",
    "Atlas Freight", "Meridian Global"
];

export default function ClientsSlider() {
    return (
        <div className="py-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
            <div className="text-center mb-8">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Trusted by Industry Leaders</h3>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                    {clients.concat(clients).map((client, index) => (
                        <div key={index} className="text-2xl font-bold text-slate-300 mx-4 uppercase whitespace-nowrap hover:text-primary transition-colors cursor-default select-none">
                            {client}
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 items-center">
                    {clients.concat(clients).map((client, index) => (
                        <div key={`dup-${index}`} className="text-2xl font-bold text-slate-300 mx-4 uppercase whitespace-nowrap hover:text-primary transition-colors cursor-default select-none">
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
