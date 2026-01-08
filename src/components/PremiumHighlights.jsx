import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Coffee, MapPin, Clock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const highlights = [
    {
        icon: <Wifi size={32} />,
        title: "Wi-Fi 7",
        description: "Rede Super Rápida. Fibra ótica de alta performance para streaming e trabalho."
    },
    {
        icon: <Coffee size={32} />,
        title: "Pequeno-almoço",
        description: "Culinária Local. Comece o dia com sabores autênticos e ingredientes frescos."
    },
    {
        icon: <MapPin size={32} />,
        title: "Localização",
        description: "Ponto Central. Acesso facilitado aos melhores pontos turísticos e de negócios."
    },
    {
        icon: <Clock size={32} />,
        title: "Check-in Flexível",
        description: "Conforto Total. Horários adaptados para garantir uma chegada sem stress."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

const PremiumHighlights = () => {
    const { isDark } = useTheme();

    return (
        <section
            style={{
                background: isDark ? '#0f172a' : '#f9fafb',
                padding: '8rem 5%',
                width: '100%',
                overflow: 'hidden'
            }}
        >
            <motion.div
                className="max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                padding: '2rem',
                                borderRadius: '24px',
                                background: isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                                backdropFilter: 'blur(10px)',
                                border: isDark ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
                                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                                cursor: 'default'
                            }}
                        >
                            <div
                                style={{
                                    color: 'var(--color-primary)',
                                    marginBottom: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: isDark ? 'rgba(6, 182, 212, 0.15)' : 'rgba(8, 145, 178, 0.08)',
                                    boxShadow: isDark ? '0 8px 32px rgba(0, 0, 0, 0.2)' : '0 8px 32px rgba(8, 145, 178, 0.1)',
                                    position: 'relative'
                                }}
                            >
                                {/* Glass pulse effect decoration */}
                                <div style={{
                                    position: 'absolute',
                                    inset: '-8px',
                                    borderRadius: '50%',
                                    border: '1px solid var(--color-primary)',
                                    opacity: 0.1,
                                    transform: 'scale(1)'
                                }} />
                                {item.icon}
                            </div>
                            <h3
                                style={{
                                    fontSize: '1.3rem',
                                    fontWeight: 700,
                                    marginBottom: '1rem',
                                    color: 'var(--color-text)',
                                    fontFamily: 'Outfit, sans-serif'
                                }}
                            >
                                {item.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6,
                                    color: isDark ? '#94a3b8' : '#64748b',
                                    fontWeight: 400
                                }}
                            >
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default PremiumHighlights;
