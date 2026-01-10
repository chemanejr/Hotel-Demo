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

            <div className="hero-content relative z-[2] w-full max-w-screen-2xl px-6 md:px-12 lg:px-20 text-center">
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
                    className="flex flex-col items-center gap-12"
                >
                    <motion.span
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.8, y: 0 } }}
                        className="block text-white/70 font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs"
                        style={{ marginTop: '57px' }}
                    >
                        BEM-VINDO AO FUTURO
                    </motion.span>

                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        className="text-5xl md:text-7xl lg:text-[5.2rem] font-black text-white leading-[0.9] tracking-[-0.02em] uppercase"
                    >
                        LUSSO<br className="md:hidden" /> FUTURA
                    </motion.h1>

                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.9, y: 0 } }}
                        className="text-[10px] md:text-xs lg:text-[13px] text-white/70 max-w-4xl mx-auto font-bold uppercase tracking-[0.35em] leading-[1.8]"
                    >
                        A CONVERGÊNCIA PERFEITA ENTRE LUXO, TECNOLOGIA<br className="hidden md:block" /> E CONFORTO ABSOLUTO.
                    </motion.p>

                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="flex flex-col sm:flex-row items-center gap-8 justify-center"
                    >
                        <div className="relative group flex-shrink-0 desktop-shift-hero-book">
                            {/* 3D Decorative layer behind the button */}
                            <div
                                className="absolute inset-0 bg-[#009fb7] translate-x-1.5 translate-y-1.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                                style={{
                                    width: '260px',
                                    height: '64px',
                                    clipPath: 'polygon(10% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0 15%)'
                                }}
                            />
                            <button
                                onClick={openBooking}
                                className="relative bg-[#00f2ff] text-black text-[16px] md:text-[18px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 pointer-events-auto flex items-center justify-center flex-shrink-0"
                                style={{
                                    width: '100%',
                                    maxWidth: '280px',
                                    minWidth: '240px',
                                    height: '64px',
                                    clipPath: 'polygon(10% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0 15%)'
                                }}
                            >
                                {t('hero.cta_book')}
                            </button>
                        </div>

                        <button
                            onClick={() => navigate('/rooms')}
                            className="bg-transparent border border-white/40 hover:border-white hover:bg-white/5 text-white text-[16px] md:text-[18px] font-black uppercase tracking-[0.2em] transition-all duration-300 pointer-events-auto flex items-center justify-center flex-shrink-0"
                            style={{
                                width: '100%',
                                maxWidth: '280px',
                                minWidth: '240px',
                                height: '64px'
                            }}
                        >
                            VER QUARTOS
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
