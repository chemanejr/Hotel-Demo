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
            className="about-page bg-[var(--color-bg)]"
        >
            {/* Minimalist Hero */}
            <section className="h-[50vh] md:h-[60vh] flex items-center justify-center bg-[var(--color-bg)] text-text text-center px-6">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">NOSSO LEGADO</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">A Alma do Lusso</h1>
                    <p className="max-w-xl mx-auto text-lg md:text-xl opacity-70 font-light">
                        Uma jornada da tradição à inovação total.
                    </p>
                </motion.div>
            </section>

            {/* Split Content 1: History */}
            <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                <div className="flex-1 min-w-[300px]">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-8">O Começo de Tudo</h2>
                        <div className="space-y-6 text-text opacity-80 leading-relaxed text-lg">
                            <p>
                                Fundado em 2024, o Lusso Futura nasceu de uma visão ousada: criar um refúgio onde a tecnologia de ponta não fosse sentida como fria ou impessoal, mas como o ingrediente invisível que torna o conforto possível.
                            </p>
                            <p>
                                Cada linha arquitetónica foi desenhada para harmonizar com o ecossistema digital, proporcionando aos nossos hóspedes uma estadia intuitiva e profundamente relaxante.
                            </p>
                        </div>
                    </motion.div>
                </div>
                <div className="flex-1 w-full aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920&auto=format&fit=crop" alt="Heritage" className="w-full h-full object-cover" />
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-6 md:px-12 lg:px-20 bg-[var(--color-glass-dark)]">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-16 text-text">Os Nossos Pilares</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
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
                                className="p-10 bg-[var(--color-bg)] border border-black/5 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500"
                            >
                                <h3 className="text-xl font-serif font-bold mb-4 text-primary">{v.title}</h3>
                                <p className="text-text opacity-70 leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default AboutPage;
