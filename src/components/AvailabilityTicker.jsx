import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const AvailabilityTicker = () => {
    const { t } = useLanguage();

    const data = [
        { count: 12, label: t('availability.standard') },
        { count: 8, label: t('availability.deluxe') },
        { count: 4, label: t('availability.executive') },
        { count: 1, label: t('availability.presidential') }
    ];

    return (
        <section style={{ padding: '6rem 10%', background: 'var(--color-bg)', textAlign: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ marginBottom: '4rem' }}
            >
                <span className="rooms-pre-title">{t('availability.title')}</span>
            </motion.div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {data.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                        style={{
                            flex: 1,
                            minWidth: '280px',
                            background: 'var(--color-bg)',
                            padding: '3.5rem 2rem',
                            borderRadius: '30px 4px 30px 4px', // Inspired by the curved design
                            border: '1px solid rgba(8, 145, 178, 0.1)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Background Decoration */}
                        <div style={{
                            position: 'absolute',
                            top: '-10%',
                            right: '-10%',
                            width: '100px',
                            height: '100px',
                            background: 'var(--color-primary)',
                            opacity: 0.03,
                            borderRadius: '50%',
                            filter: 'blur(40px)'
                        }}></div>

                        <span style={{
                            fontSize: '4.5rem',
                            fontWeight: 300,
                            color: 'var(--color-primary)',
                            lineHeight: 1,
                            marginBottom: '1rem',
                            fontFamily: 'Outfit, sans-serif'
                        }}>
                            {item.count}
                        </span>
                        <span style={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            opacity: 0.6
                        }}>
                            {item.label}
                        </span>
                        <span style={{
                            fontSize: '0.75rem',
                            marginTop: '0.5rem',
                            opacity: 0.4,
                            fontWeight: 700,
                            letterSpacing: '1px'
                        }}>
                            {t('availability.remaining')}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AvailabilityTicker;
