import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import CircularGallery from './ui/CircularGallery';

const galleryItems = [
    { image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop", text: 'SPA' },
    { image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop", text: 'COCKTAILS' },
    { image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop", text: 'POOL' },
    { image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop", text: 'DINING' },
    { image: "https://images.unsplash.com/photo-1551882547-ff43c630f5e1?q=80&w=2070&auto=format&fit=crop", text: 'LOBBY' },
    { image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1760&auto=format&fit=crop", text: 'RELAX' }
];

const LifestyleGallery = () => {
    const { isDark } = useTheme();

    return (
        <section className="py-24 px-6 md:px-12 lg:px-20 w-full overflow-hidden bg-[var(--color-bg)]">
            <motion.div
                className="text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2 }
                    }
                }}
            >
                <motion.h2
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-[0.2em] uppercase mb-4"
                >
                    Experiencie o Lusso
                </motion.h2>
                <motion.div
                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 0.5, y: 0 } }}
                    className="flex items-center justify-center gap-2 text-primary"
                >
                    <Instagram size={20} />
                    <span className="text-sm font-bold tracking-widest uppercase">@LUSSOFUTURA</span>
                </motion.div>
            </motion.div>

            <motion.div
                className="h-[400px] md:h-[600px] w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1 }}
            >
                <CircularGallery
                    items={galleryItems}
                    bend={3}
                    textColor={isDark ? "#ffffff" : "#000000"}
                    borderRadius={0.05}
                    font="bold 24px Outfit"
                    autoplay={true}
                    autoplaySpeed={0.05}
                />
            </motion.div>
        </section>
    );
};

export default LifestyleGallery;
