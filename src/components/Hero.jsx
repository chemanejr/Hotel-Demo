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
        <div className="hero-container relative min-h-screen w-full overflow-hidden flex items-center justify-center" ref={ref} id="hero" style={{
            backgroundImage: `url(${hotelHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            {/* Dark Gradient Overlay for text contrast */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

            <div className="hero-content relative z-[2] w-full max-w-7xl px-6 md:px-12 lg:px-20 text-center md:text-left">
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
                        className="block text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4"
                        style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                    >
                        {t('hero.welcome')}
                    </motion.span>

                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tighter"
                        style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                    >
                        {t('hero.title')}
                    </motion.h1>

                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.8, y: 0 } }}
                        className="text-lg md:text-xl lg:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto md:mx-0 font-medium"
                        style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
                    >
                        {t('hero.subtitle')}
                    </motion.p>

                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                    >
                        <button
                            onClick={openBooking}
                            className="btn-primary w-full sm:w-auto py-4 px-10 text-sm font-bold uppercase tracking-widest"
                        >
                            {t('hero.cta_book')}
                        </button>
                        <button
                            onClick={() => navigate('/rooms')}
                            className="btn-secondary w-full sm:w-auto py-4 px-10 text-sm font-bold uppercase tracking-widest border-white text-white hover:bg-white hover:text-black transition-all bg-white/5 backdrop-blur-sm"
                        >
                            {t('hero.cta_rooms')}
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-60 text-white mb-2">Scroll</span>
                <ChevronDown size={28} className="text-primary" />
            </motion.div>
        </div>
    );
};

export default Hero;
