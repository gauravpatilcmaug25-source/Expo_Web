import React from 'react';

const posts = [
    {
        id: 1,
        title: "The Future of Sustainable Packaging in Global Trade",
        date: "March 15, 2026",
        category: "Sustainability",
        image: "https://images.unsplash.com/photo-1605633416481-e283253b9347?auto=format&fit=crop&q=80&w=800",
        excerpt: "As environmental regulations tighten, businesses are adopting eco-friendly packaging solutions to reduce carbon footprints."
    },
    {
        id: 2,
        title: "Navigating Customs Protocols in 2026",
        date: "February 28, 2026",
        category: "Compliance",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
        excerpt: "A guide to the latest changes in international customs procedures and how to ensure smooth clearance for your goods."
    },
    {
        id: 3,
        title: "Top 5 Emerging Markets for Indian Exports",
        date: "January 10, 2026",
        category: "Market Analysis",
        image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=800",
        excerpt: "Discover the high-growth regions that are demanding Indian agricultural and industrial products this year."
    }
];

export default function Blog() {
    return (
        <div className="pt-0 bg-gray-50 min-h-screen">
            {/* Visual Hero Header */}
            <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden mb-16">
                <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000"
                    alt="Industry Insights"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Industry Insights</h1>
                    <p className="text-xl text-slate-200">
                        Latest news, trends, and perspectives from the world of logistics.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full group">
                            <div className="h-56 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-3">
                                    <span className="text-primary uppercase tracking-wider bg-blue-50 px-2 py-1 rounded-md">{post.category}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                </div>
                                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors cursor-pointer leading-tight">
                                    {post.title}
                                </h2>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                                    {post.excerpt}
                                </p>
                                <button className="text-primary font-bold text-sm hover:underline self-start mt-auto">
                                    Read Full Article &rarr;
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
