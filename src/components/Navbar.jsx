import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Updated logic: Always dark text on white background if scrolled or NOT home.
    // If Home AND top: White text with text-shadow for readability.
    const isTransparent = isHome && !scrolled;

    const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${isTransparent
        ? 'bg-gradient-to-b from-black/60 to-transparent py-6'
        : 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3'
        }`;

    const linkClasses = (path) => `px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 tracking-wide ${isTransparent
        ? isActive(path) ? 'bg-white text-primary' : 'text-white hover:bg-white/20'
        : isActive(path) ? 'bg-blue-50 text-primary' : 'text-gray-700 hover:text-primary hover:bg-gray-50'
        }`;

    const isActive = (path) => location.pathname === path;

    // Logo colors
    const logoTextMain = isTransparent ? 'text-white' : 'text-primary';
    const logoTextSub = isTransparent ? 'text-blue-300' : 'text-secondary';
    const logoBg = isTransparent ? 'bg-white/10 backdrop-blur-sm' : 'bg-primary';
    const logoIcon = isTransparent ? 'text-white' : 'text-white';
    const buttonClass = isTransparent
        ? 'bg-white text-primary hover:bg-blue-50'
        : 'bg-primary text-white hover:bg-blue-800 shadow-blue-900/20';

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={navbarClasses}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className={`p-2 rounded-xl transition-colors ${logoBg}`}>
                            <Globe className={`w-6 h-6 ${logoIcon}`} />
                        </div>
                        <span className={`text-2xl font-extrabold tracking-tight ${logoTextMain} drop-shadow-sm`}>
                            Global<span className={logoTextSub}>Trade</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <div className="flex gap-1">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={linkClasses(item.path)}
                                    style={isTransparent ? { textShadow: '0 2px 4px rgba(0,0,0,0.3)' } : {}}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <Link to="/quote">
                            <button className={`px-6 py-2.5 rounded-full font-bold transition-all shadow-lg active:scale-95 ${buttonClass}`}>
                                Get a Quote
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`lg:hidden p-2 transition-colors focus:outline-none ${isTransparent ? 'text-white' : 'text-gray-600'}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
            />

            <div
                className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-xl font-bold text-primary">Menu</span>
                        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-red-500" aria-label="Close menu">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-2">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-lg font-medium text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="my-4 border-t border-gray-100" />
                        <Link to="/quote" onClick={() => setIsOpen(false)}>
                            <button className="w-full bg-primary text-white py-3 rounded-xl font-bold shadow-md active:scale-95">
                                Get a Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
