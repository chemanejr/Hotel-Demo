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
        <section className={`py-24 px-6 md:px-12 w-full overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
            <motion.div
                className="max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className={`flex flex-col items-center text-center p-10 rounded-[2.5rem] backdrop-blur-md border transition-all duration-500 cursor-default
                                ${isDark ? 'bg-slate-900/40 border-white/5' : 'bg-white/60 border-black/5 shadow-sm'}`}
                        >
                            <div className={`relative flex items-center justify-center w-20 h-20 rounded-full mb-8 text-primary transition-transform duration-500
                                ${isDark ? 'bg-primary/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]' : 'bg-primary/5 shadow-xl shadow-primary/10'}`}>
                                {/* Animated ring decoration */}
                                <div className="absolute inset-[-4px] rounded-full border border-primary/20 scale-100 group-hover:scale-110 transition-transform" />
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-4 tracking-tight text-text">
                                {item.title}
                            </h3>

                            <p className={`text-sm leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
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
