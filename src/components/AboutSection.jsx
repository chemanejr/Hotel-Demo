import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const AboutSection = () => {
    const { isDark } = useTheme();
    const { t } = useLanguage();

    return (
        <section
            id="about"
            className={`min-h-[80vh] w-full py-24 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 overflow-hidden relative
                ${isDark ? 'bg-slate-950' : 'bg-white'}`}
        >
            {/* Top Blend Gradient */}
            {isDark && <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none opacity-50" />}
            <div className="flex-1 min-w-[300px] w-full order-2 lg:order-1">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                >
                    <motion.span
                        variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 0.6, x: 0 } }}
                        className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
                    >
                        {t('about.pre')}
                    </motion.span>

                    <motion.h2
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-[1.1] tracking-tight"
                    >
                        {t('about.title')}
                    </motion.h2>

                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.8, y: 0 } }}
                        className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl"
                    >
                        {t('about.desc')}
                    </motion.p>

                    <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
                        <Link to="/about" className="btn-secondary py-4 px-10 text-sm font-bold uppercase tracking-widest inline-block border-primary text-primary hover:bg-primary hover:text-white transition-all">
                            {t('about.cta')}
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            <div className="flex-1.2 min-w-[300px] w-full relative order-1 lg:order-2">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                    className="aspect-[4/5] md:aspect-video lg:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl relative z-10"
                >
                    <img
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                        alt="Lusso Futura Architecture"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Visual Accent */}
                <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/20 rounded-full z-0 hidden md:block" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl z-0" />
            </div>
        </section>
    );
};

export default AboutSection;
