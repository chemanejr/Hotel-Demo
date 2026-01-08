import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const testimonials = [
    {
        name: "Helena Santos",
        role: "Viajante de Negócios",
        text: "Uma experiência verdadeiramente única. O check-in flexível e a velocidade da internet foram cruciais para a minha estadia produtiva. O design do quarto é sublime.",
        rating: 5
    },
    {
        name: "Ricardo & Ana",
        role: "Férias em Casal",
        text: "O Lusso Futura redefiniu o nosso conceito de luxo. Desde o pequeno-almoço gourmet até à atenção aos detalhes do concierge, tudo foi impecável.",
        rating: 5
    },
    {
        name: "James Wilson",
        role: "Nómada Digital",
        text: "O melhor equilíbrio entre tecnologia e conforto que já encontrei. A localização é perfeita para explorar a cidade sem perder o ambiente de tranquilidade.",
        rating: 5
    }
];

const Testimonials = () => {
    const { isDark } = useTheme();

    return (
        <section
            style={{
                padding: '10rem 5%',
                background: isDark ? 'radial-gradient(circle at top right, #1e293b, #0f172a)' : 'radial-gradient(circle at top right, #f8fafc, #ffffff)',
                width: '100%'
            }}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="section-header"
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
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
                    <motion.h2
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        style={{
                            fontSize: '3rem',
                            fontWeight: 700,
                            color: 'var(--color-text)',
                            marginBottom: '1rem',
                            fontFamily: 'Outfit, sans-serif'
                        }}
                    >
                        O Que Dizem de Nós
                    </motion.h2>
                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.6, y: 0 } }}
                        style={{ color: 'var(--color-text)', opacity: 0.6, fontSize: '1.2rem' }}
                    >
                        A satisfação dos nossos hórpedes é a nossa maior recompensa.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                padding: '3rem',
                                background: isDark ? 'rgba(30, 41, 59, 0.4)' : '#ffffff',
                                borderRadius: '32px',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: isDark ? '0 10px 40px rgba(0,0,0,0.2)' : '0 10px 40px rgba(0,0,0,0.05)',
                                border: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.02)'
                            }}
                        >
                            <Quote
                                size={40}
                                style={{
                                    position: 'absolute',
                                    top: '2rem',
                                    right: '2rem',
                                    opacity: 0.1,
                                    color: 'var(--color-primary)'
                                }}
                            />

                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                fontStyle: 'italic',
                                color: 'var(--color-text)',
                                marginBottom: '2.5rem',
                                flex: 1
                            }}>
                                "{item.text}"
                            </p>

                            <div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text)' }}>{item.name}</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {item.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    style={{
                        marginTop: '6rem',
                        padding: '1.5rem 3rem',
                        background: isDark ? '#1e293b' : '#ffffff',
                        borderRadius: '24px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                        border: isDark ? '1px solid #334155' : '1px solid #f1f5f9',
                        maxWidth: '1000px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                        <h3 style={{
                            fontSize: '2rem',
                            fontWeight: 700,
                            color: 'var(--color-text)',
                            marginBottom: '0.5rem',
                            fontFamily: 'Outfit, sans-serif'
                        }}>
                            Deixe o Seu Comentário
                        </h3>
                        <p style={{ color: 'var(--color-text)', opacity: 0.6, fontSize: '0.95rem' }}>
                            A sua opinião é fundamental para continuarmos a elevar os nossos padrões.
                        </p>
                    </div>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)', opacity: 0.8 }}>Nome</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Maria Silva"
                                    style={{
                                        padding: '0.8rem 1.2rem',
                                        borderRadius: '12px',
                                        border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                                        background: isDark ? '#0f172a' : '#f8fafc',
                                        color: 'var(--color-text)',
                                        outline: 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)', opacity: 0.8 }}>Ocupação</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Viajante"
                                    style={{
                                        padding: '0.8rem 1.2rem',
                                        borderRadius: '12px',
                                        border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                                        background: isDark ? '#0f172a' : '#f8fafc',
                                        color: 'var(--color-text)',
                                        outline: 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)', opacity: 0.8 }}>A Sua Experiência</label>
                            <textarea
                                rows="3"
                                placeholder="Conte-nos como foi a sua estadia..."
                                style={{
                                    padding: '0.8rem 1.2rem',
                                    borderRadius: '12px',
                                    border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                                    background: isDark ? '#0f172a' : '#f8fafc',
                                    color: 'var(--color-text)',
                                    outline: 'none',
                                    transition: 'all 0.3s ease',
                                    resize: 'none'
                                }}
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            style={{
                                padding: '1rem',
                                background: 'var(--color-primary)',
                                color: 'white',
                                borderRadius: '12px',
                                border: 'none',
                                fontWeight: 700,
                                fontSize: '0.95rem',
                                cursor: 'pointer',
                                marginTop: '0.5rem',
                                boxShadow: '0 8px 16px -4px rgba(8, 145, 178, 0.2)'
                            }}
                        >
                            PUBLICAR COMENTÁRIO
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section >
    );
};

export default Testimonials;
