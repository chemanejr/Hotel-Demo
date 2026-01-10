import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const AboutSection = () => {
    const { isDark } = useTheme();
    const { t } = useLanguage();

    return (
        <motion.section
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className={`min-h-[70vh] w-full px-6 md:px-12 lg:px-24 overflow-hidden relative transition-colors duration-500
                ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}
            style={{ padding: '160px 0' }}
        >
            {/* Top Blend Gradient */}
            {isDark && <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none opacity-50" />}

            <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center gap-10 md:gap-20 lg:gap-32 relative z-10 w-full">
                <div className="w-full sm:w-[50%] lg:w-[45%] text-center sm:text-left order-2 sm:order-1 md:translate-x-20">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15,
                                    delayChildren: 0.2
                                }
                            }
                        }}
                    >
                        <motion.span
                            variants={{
                                hidden: { opacity: 0, y: 15 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                                }
                            }}
                            className="text-[#00f2ff] text-[12px] md:text-[15px] font-bold tracking-[0.4em] uppercase block md:translate-x-5"
                            style={{ marginBottom: '10px' }}
                        >
                            {t('about.pre')}
                        </motion.span>

                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
                                }
                            }}
                            className={`text-4xl md:text-5xl lg:text-[3.8rem] font-serif font-medium leading-[1.2] tracking-tight
                                ${isDark ? 'text-white' : 'text-slate-900'}`}
                            style={{ fontFamily: "'Playfair Display', serif", marginBottom: '16px' }}
                        >
                            {t('about.title')}
                        </motion.h2>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 0.8,
                                    y: 0,
                                    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
                                }
                            }}
                            className={`text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 font-light
                                ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
                            style={{ marginBottom: '24px' }}
                        >
                            {t('about.desc')}
                        </motion.p>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                                }
                            }}
                        >
                            <motion.div
                                className="relative group inline-block translate-x-[57px] md:translate-x-[197px] md:translate-y-5 w-full md:w-auto px-4 md:px-0"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* 3D Decorative layer behind the button */}
                                <div
                                    className="absolute inset-0 bg-[#009fb7] translate-x-1.5 translate-y-1.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                                    style={{
                                        width: '280px',
                                        height: '64px',
                                        clipPath: 'polygon(10% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0 15%)'
                                    }}
                                />
                                <Link
                                    to="/about"
                                    className="relative bg-[#00f2ff] text-black text-[14px] font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center no-underline mx-auto md:mx-0 shadow-xl overflow-hidden"
                                    style={{
                                        width: '280px',
                                        height: '64px',
                                        clipPath: 'polygon(10% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0 15%)',
                                        textDecoration: 'none'
                                    }}
                                >
                                    <span className="relative z-10">{t('about.cta')}</span>
                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-none pointer-events-none" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="w-full md:w-[50%] lg:w-[40%] relative order-1 sm:order-2 mt-12 md:mt-0 md:-translate-x-5">
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 1.1 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                        className="aspect-[4/3] w-full rounded-[1.5rem] overflow-hidden shadow-2xl relative z-10"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                            alt="Lusso Futura Architecture"
                            className="w-full h-full object-cover transition-all duration-700"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutSection;
