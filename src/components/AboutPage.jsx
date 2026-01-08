import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage = () => {
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="about-page"
        >
            {/* Minimalist Hero */}
            <section style={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', color: 'white', textAlign: 'center' }}>
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="rooms-pre-title" style={{ color: 'var(--color-primary)' }}>NOSSO LEGADO</span>
                    <h1 className="serif" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', marginBottom: '1.5rem' }}>A Alma do Lusso</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.7 }}>
                        Uma jornada da tradição à inovação total.
                    </p>
                </motion.div>
            </section>

            {/* Split Content 1: History */}
            <section style={{ padding: '8rem 10%', display: 'flex', gap: '5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '350px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="serif" style={{ fontSize: '3rem', marginBottom: '2rem' }}>O Começo de Tudo</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem', opacity: 0.8 }}>
                            Fundado em 2024, o Lusso Futura nasceu de uma visão ousada: criar um refúgio onde a tecnologia de ponta não fosse sentida como fria ou impessoal, mas como o ingrediente invisível que torna o conforto possível.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.8 }}>
                            Cada linha arquitetónica foi desenhada para harmonizar com o ecossistema digital, proporcionando aos nossos hóspedes uma estadia intuitiva e profundamente relaxante.
                        </p>
                    </motion.div>
                </div>
                <div style={{ flex: 1, height: '450px', borderRadius: '4px', overflow: 'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920&auto=format&fit=crop" alt="Heritage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </section>

            {/* Values Section */}
            <section style={{ padding: '8rem 10%', background: 'rgba(8, 145, 178, 0.03)', textAlign: 'center' }}>
                <h2 className="serif" style={{ fontSize: '3rem', marginBottom: '4rem' }}>Os Nossos Pilares</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                    {[
                        { title: 'Inovação Silenciosa', desc: 'A tecnologia serve-nos, nunca nos domina. Tudo é fluido, tudo é automático.' },
                        { title: 'Luxo Sustentável', desc: 'Sistemas inteligentes de gestão de energia e materiais de baixo impacto ambiental.' },
                        { title: 'Hospitalidade Humana', desc: 'Atrás de cada interface digital, existe uma equipa dedicada ao seu bem-estar.' }
                    ].map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            style={{ padding: '3rem', background: 'var(--color-bg)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '4px' }}
                        >
                            <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{v.title}</h3>
                            <p style={{ opacity: 0.7, lineHeight: 1.6 }}>{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default AboutPage;
