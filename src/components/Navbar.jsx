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
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                padding: scrolled ? '1rem 2rem' : '2rem 3rem',
                background: scrolled ? (isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)') : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? (isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)') : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.4s ease'
            }}
        >
            <div style={{ flex: 1 }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '2px', color: scrolled ? 'var(--color-text)' : '#ffffff' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        LUSSO<span className="text-primary">.</span>
                    </Link>
                </div>
            </div>

            {/* Centered Desktop Menu */}
            <motion.div
                className="hidden md:flex"
                style={{ flex: 2, justifyContent: 'center', gap: '2.5rem', display: 'flex', alignItems: 'center' }}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.5
                        }
                    }
                }}
            >
                {navLinks.map((link) => (
                    <motion.div key={link.name} variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                        <Link
                            to={link.path}
                            className="nav-link"
                            style={{
                                color: scrolled ? 'var(--color-text)' : '#ffffff',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                opacity: scrolled ? 0.8 : 1,
                                transition: 'all 0.3s',
                                borderBottom: isLinkActive(link) ? '2px solid var(--color-primary)' : 'none'
                            }}
                        >
                            {link.name}
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {/* Actions Area */}
            <motion.div
                className="hidden md:flex"
                style={{ flex: 1, justifyContent: 'flex-end', gap: '1.2rem', display: 'flex', alignItems: 'center' }}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.8
                        }
                    }
                }}
            >
                {/* Language Selector */}
                <motion.div
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                    style={{
                        display: 'flex',
                        gap: '0.5rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: scrolled ? 'var(--color-primary)' : '#ffffff',
                        background: 'rgba(255,255,255,0.05)',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}
                >
                    {['PT', 'EN', 'FR'].map(lang => (
                        <span
                            key={lang}
                            onClick={() => setLanguage(lang.toLowerCase())}
                            style={{
                                cursor: 'pointer',
                                opacity: language === lang.toLowerCase() ? 1 : 0.4,
                                transition: 'opacity 0.3s'
                            }}
                        >
                            {lang}
                        </span>
                    ))}
                </motion.div>

                {/* Theme Toggle Button */}
                <motion.button
                    variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                    onClick={toggleTheme}
                    style={{
                        background: 'transparent',
                        border: scrolled ? '2px solid var(--color-primary)' : '2px solid #ffffff',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        color: scrolled ? 'var(--color-primary)' : '#ffffff'
                    }}
                    aria-label="Toggle theme"
                >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </motion.button>

                <motion.button
                    variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                    onClick={() => openBooking()}
                    className="btn-primary"
                    style={{ padding: '0.5rem 1.2rem', fontSize: '0.75rem', display: 'inline-block' }}
                >
                    {t('nav.book')}
                </motion.button>
            </motion.div>

            {/* Simple Mobile Menu Trigger */}
            <div style={{ cursor: 'pointer', color: scrolled ? 'var(--color-text)' : '#ffffff' }} className="md:hidden">
                <Menu />
            </div>

        </motion.nav>
    );
};

export default Navbar;
