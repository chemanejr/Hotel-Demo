import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
    const { t } = useLanguage();

    return (
        <section
            id="about"
            style={{
                padding: '10rem 10%',
                background: 'var(--color-bg)',
                display: 'flex',
                alignItems: 'center',
                gap: '5rem',
                flexWrap: 'wrap'
            }}
        >
            <div style={{ flex: 1, minWidth: '300px' }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    <motion.span
                        variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 0.6, x: 0 } }}
                        className="rooms-pre-title"
                    >
                        {t('about.pre')}
                    </motion.span>
                    <motion.h2
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        className="serif"
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '1rem 0', lineHeight: 1.1 }}
                    >
                        {t('about.title')}
                    </motion.h2>
                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.8, y: 0 } }}
                        style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '3rem' }}
                    >
                        {t('about.desc')}
                    </motion.p>
                    <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
                        <Link to="/about" className="btn-secondary" style={{ marginLeft: 0 }}>
                            {t('about.cta')}
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            <div style={{ flex: 1.2, minWidth: '350px', position: 'relative' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                    style={{
                        height: '500px',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
                    }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                        alt="Lusso Futura Architecture"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </motion.div>

                {/* Visual Accent */}
                <div style={{
                    position: 'absolute',
                    top: '-2rem',
                    right: '-2rem',
                    width: '100px',
                    height: '100px',
                    border: '2px solid var(--color-primary)',
                    opacity: 0.2,
                    zIndex: -1
                }}></div>
            </div>
        </section>
    );
};

export default AboutSection;
