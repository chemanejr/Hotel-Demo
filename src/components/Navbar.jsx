import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { triggerBooking } from '../utils/bookingEvent';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
    // Event-based trigger (Safe)
    const openBooking = () => triggerBooking();
    const { language, setLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { isDark, toggleTheme } = useTheme();

    const navLinks = [
        { name: t('nav.home'), path: '/#hero', section: 'hero' },
        { name: t('nav.about'), path: '/#about', section: 'about' },
        { name: t('nav.rooms'), path: '/#rooms', section: 'rooms' },
        { name: t('nav.experiences'), path: '/#services', section: 'services' },
        { name: t('nav.contact'), path: '/#contact', section: 'contact' },
    ];

    const [activeSection, setActiveSection] = useState('hero');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section based on scroll position
            const sections = ['hero', 'about', 'rooms', 'services', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to determine if link is active
    const isLinkActive = (link) => {
        // For /rooms route
        if (link.path === '/rooms') {
            return location.pathname === '/rooms';
        }
        // For home sections with hash
        if (link.path.startsWith('/#')) {
            return location.pathname === '/' && activeSection === link.section;
        }
        // For home
        return location.pathname === '/' && link.path === '/' && activeSection === 'hero';
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-400 flex justify-between items-center
                    ${scrolled ? (isDark ? 'bg-slate-900/80' : 'bg-white/80') : 'bg-transparent'}
                    ${scrolled ? 'py-4 px-6 md:px-12' : 'py-6 px-8 md:px-16'}
                    ${scrolled ? 'backdrop-blur-xl border-b border-white/5 shadow-lg' : ''}`}
            >
                {/* Logo */}
                <div className="flex-1">
                    <Link
                        to="/"
                        className={`text-2xl font-bold tracking-widest no-underline transition-colors duration-300
                            ${scrolled ? 'text-text' : 'text-white'}`}
                    >
                        LUSSO<span className="text-primary">.</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex flex-[2] justify-center items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link text-sm font-medium transition-all duration-300 relative
                                ${scrolled ? 'text-text opacity-70 hover:opacity-100' : 'text-white'}
                                ${isLinkActive(link) ? 'after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Actions & Mobile Trigger */}
                <div className="flex-1 flex justify-end items-center gap-4">
                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-6">
                        {/* Language Selector */}
                        <div className={`flex gap-3 text-[10px] font-bold py-1 px-3 rounded-full border border-white/10 bg-white/5
                            ${scrolled ? 'text-primary' : 'text-white'}`}>
                            {['PT', 'EN', 'FR'].map(lang => (
                                <span
                                    key={lang}
                                    onClick={() => setLanguage(lang.toLowerCase())}
                                    className={`cursor-pointer transition-opacity duration-300 ${language === lang.toLowerCase() ? 'opacity-100' : 'opacity-30'}`}
                                >
                                    {lang}
                                </span>
                            ))}
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300
                                ${scrolled ? 'border-primary text-primary' : 'border-white text-white'} hover:scale-110`}
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <button onClick={openBooking} className="btn-primary py-2 px-6 text-xs uppercase tracking-wider font-bold">
                            {t('nav.book')}
                        </button>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        className={`lg:hidden w-10 h-10 flex items-center justify-center transition-colors
                            ${scrolled ? 'text-text' : 'text-white'}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.nav>

            {/* Full-screen Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className={`fixed inset-0 z-[999] p-8 pt-24 lg:hidden flex flex-col h-screen
                            ${isDark ? 'bg-slate-900' : 'bg-white'}`}
                    >
                        {/* Mobile Links */}
                        <div className="flex flex-col gap-6 mb-12">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`text-3xl font-bold tracking-tighter no-underline
                                            ${isLinkActive(link) ? 'text-primary' : 'text-text'}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Actions Footer */}
                        <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-8">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-4">
                                    {['PT', 'EN', 'FR'].map(lang => (
                                        <button
                                            key={lang}
                                            onClick={() => setLanguage(lang.toLowerCase())}
                                            className={`text-lg font-bold pb-1 border-b-2 transition-all
                                                ${language === lang.toLowerCase() ? 'text-primary border-primary' : 'text-text opacity-40 border-transparent'}`}
                                        >
                                            {lang}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={toggleTheme}
                                    className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center"
                                >
                                    {isDark ? <Sun size={24} /> : <Moon size={24} />}
                                </button>
                            </div>

                            <button
                                onClick={() => { setIsMenuOpen(false); openBooking(); }}
                                className="btn-primary w-full py-5 text-lg font-bold uppercase tracking-widest rounded-xl shadow-2xl shadow-primary/20"
                            >
                                {t('nav.book')}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
