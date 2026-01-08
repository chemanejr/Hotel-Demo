import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { triggerBooking } from '../utils/bookingEvent';
import { useLanguage } from '../contexts/LanguageContext';

import hotelHero from '../assets/hotel-hero.png';

const Hero = () => {
    const navigate = useNavigate();
    // Event-based trigger
    const openBooking = () => triggerBooking();
    const { t } = useLanguage();
    const ref = useRef(null);

    return (
        <div className="hero-container" ref={ref} id="hero" style={{
            position: 'relative',
            backgroundImage: `url(${hotelHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            {/* Dark Gradient Overlay for text contrast */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.7) 100%)',
                zIndex: 1
            }} />

            <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.3
                            }
                        }
                    }}
                >
                    <motion.span
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="hero-subtitle"
                        style={{ color: '#06b6d4', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                    >
                        {t('hero.welcome')}
                    </motion.span>
                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        className="hero-title"
                        style={{ color: '#ffffff', textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}
                    >
                        {t('hero.title')}
                    </motion.h1>
                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.8, y: 0 } }}
                        className="hero-subtitle"
                        style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)', color: '#f8fafc', fontWeight: 500 }}
                    >
                        {t('hero.subtitle')}
                    </motion.p>

                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="hero-cta-group"
                    >
                        <button onClick={openBooking} className="btn-primary">{t('hero.cta_book')}</button>
                        <button onClick={() => navigate('/rooms')} className="btn-secondary" style={{ color: '#ffffff', borderColor: '#ffffff' }}>{t('hero.cta_rooms')}</button>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ position: 'relative', zIndex: 2 }}
            >
                <span style={{ fontSize: '0.8rem', opacity: 0.9, display: 'block', marginBottom: '0.5rem', color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Scroll</span>
                <ChevronDown size={32} color="#06b6d4" />
            </motion.div>
        </div>
    );
};

export default Hero;
