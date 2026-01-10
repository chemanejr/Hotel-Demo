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
                className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500
                    ${scrolled ? (isDark ? 'bg-slate-950/80' : 'bg-white/80') : 'bg-transparent'}
                    ${scrolled ? 'h-[80px]' : 'h-[110px]'}
                    ${scrolled ? 'backdrop-blur-xl border-b border-white/5 shadow-2xl' : ''}`}
            >
                <div className="max-w-screen-2xl mx-auto w-full h-full px-6 md:px-14 lg:px-20 flex justify-between lg:grid lg:grid-cols-[1fr_2fr_1fr] items-center">
                    {/* Logo Section (Left) */}
                    <div className="flex justify-start">
                        <Link
                            to="/"
                            className={`relative lg:left-[56px] mobile-logo-shift text-2xl md:text-3xl font-bold tracking-[0.2em] no-underline transition-colors duration-300
                                ${scrolled ? 'text-text' : 'text-white'}`}
                        >
                            LUSSO<span className="text-[#00f2ff]">.</span>
                        </Link>
                    </div>

                    {/* Navigation Links (Center) */}
                    <div className="hidden lg:flex justify-center items-center gap-12 relative -left-[56px]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`nav-link text-[14px] font-bold transition-all duration-300 relative uppercase tracking-[0.15em] whitespace-nowrap
                                    ${scrolled
                                        ? (isDark ? 'text-white/70 hover:text-white' : 'text-text opacity-70 hover:opacity-100')
                                        : 'text-white/70 hover:text-white'}
                                    ${isLinkActive(link)
                                        ? (scrolled && !isDark ? 'text-text opacity-100' : 'text-white opacity-100') + ' after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[3px] after:bg-[#00f2ff]'
                                        : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Actions Section (Right) */}
                    <div className="flex justify-end items-center gap-8">
                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center gap-10">
                            {/* Language Selector (Shifted 1cm left) */}
                            <div className={`relative -left-[38px] flex gap-6 text-[12px] font-black py-3.5 px-8 rounded-full border border-white/10 bg-white/5
                                ${scrolled ? 'text-primary' : 'text-white'}`}>
                                {['PT', 'EN', 'FR'].map(lang => (
                                    <span
                                        key={lang}
                                        onClick={() => setLanguage(lang.toLowerCase())}
                                        className={`cursor-pointer transition-opacity duration-300 ${language === lang.toLowerCase() ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
                                    >
                                        {lang}
                                    </span>
                                ))}
                            </div>

                            {/* Theme Toggle (Moved 1cm left net) */}
                            <button
                                onClick={toggleTheme}
                                className={`relative -left-[38px] w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300
                                    ${scrolled ? 'border-primary text-primary' : 'border-white/20 text-white'} hover:bg-white/10`}
                                aria-label="Toggle theme"
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                            <button
                                onClick={openBooking}
                                className="relative -left-[37px] bg-transparent text-[#00f2ff] border-2 border-[#00f2ff] py-6.5 px-24 text-[18px] font-black uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#00f2ff] hover:text-black active:scale-95 whitespace-nowrap"
                                style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 75%, 88% 100%, 0 100%, 0 25%)' }}
                            >
                                {t('nav.book')}
                            </button>
                        </div>

                        {/* Mobile Hamburger Button */}
                        <button
                            className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 active:scale-90 shadow-2xl mobile-menu-shift
                                ${scrolled
                                    ? (isDark ? 'bg-white text-slate-950 shadow-white/10' : 'bg-slate-950 text-white shadow-black/10')
                                    : (isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black')} backdrop-blur-md border ${isDark ? 'border-white/20' : 'border-black/5'}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Side Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-slate-950/40 backdrop-blur-[2px] z-[998]"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className={`fixed right-0 top-0 h-full w-[75%] max-w-[320px] z-[999] p-8 flex flex-col items-end shadow-[-10px_0_30px_rgba(0,0,0,0.2)] transition-all duration-500
                                ${isDark ? 'bg-slate-900/95 border-l border-white/5' : 'bg-white/95 border-l border-black/5'} backdrop-blur-xl`}
                            style={{
                                paddingTop: scrolled ? '76px' : '116px',
                                paddingRight: '23px'
                            }}
                        >
                            {/* Mobile Links */}
                            <div className="flex flex-col gap-5 mb-10 text-right w-full">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`text-xl font-bold tracking-tight no-underline transition-all duration-300 block
                                                ${isLinkActive(link) ? 'text-primary' : (isDark ? 'text-white' : 'text-slate-900')}`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Mobile Actions Footer */}
                            <div className="mt-auto w-full pt-8 border-t border-primary/10 flex flex-col gap-6 items-end translate-y-[19px]">
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex gap-4 translate-y-[19px]">
                                        {['PT', 'EN', 'FR'].map(lang => (
                                            <button
                                                key={lang}
                                                onClick={() => setLanguage(lang.toLowerCase())}
                                                className={`text-sm font-bold pb-1 border-b-2 transition-all
                                                    ${language === lang.toLowerCase() ? 'text-primary border-primary' : (isDark ? 'text-white/40' : 'text-slate-400') + ' border-transparent'}`}
                                            >
                                                {lang}
                                            </button>
                                        ))}
                                    </div>
                                    <button
                                        onClick={toggleTheme}
                                        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all active:scale-95 translate-y-[19px]
                                            ${isDark ? 'border-primary/50 text-primary bg-primary/10' : 'border-slate-200 text-slate-600 bg-slate-50'}`}
                                    >
                                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                                    </button>
                                </div>

                                <button
                                    onClick={() => { setIsMenuOpen(false); openBooking(); }}
                                    className="btn-primary w-full py-3.5 text-xs font-bold uppercase tracking-widest rounded-lg shadow-lg shadow-primary/10 transition-all active:scale-95 translate-y-[38px] max-w-[200px]"
                                >
                                    {t('nav.book')}
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
