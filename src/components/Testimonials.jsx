import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

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
    const { t } = useLanguage();

    return (
        <section className={`py-24 px-6 md:px-12 lg:px-20 w-full ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                >
                    <motion.span
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"
                    >
                        Vozes dos Nossos Hóspedes
                    </motion.span>
                    <motion.h2
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        {t('testimonials.title') || "O Que Dizem de Nós"}
                    </motion.h2>
                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.6, y: 0 } }}
                        className="text-lg opacity-60 max-w-2xl mx-auto"
                    >
                        A satisfação dos nossos hórpedes é a nossa maior recompensa.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-10 rounded-[2.5rem] relative flex flex-col h-full border transition-all duration-500
                                ${isDark ? 'bg-slate-900 border-white/5 shadow-2xl shadow-black/40' : 'bg-white border-black/5 shadow-xl shadow-slate-200/50'}`}
                        >
                            <Quote
                                size={40}
                                className="absolute top-8 right-8 text-primary opacity-10"
                            />

                            <p className="text-lg leading-relaxed italic mb-8 flex-grow text-text opacity-90">
                                "{item.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-text">{item.name}</h4>
                                    <p className="text-[10px] text-primary font-bold uppercase tracking-widest">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Feedback Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className={`mt-24 p-8 md:p-16 rounded-[3rem] max-w-4xl mx-auto border
                        ${isDark ? 'bg-slate-900 border-white/5' : 'bg-white border-black/5 shadow-2xl'}`}
                >
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold mb-4">Deixe o Seu Comentário</h3>
                        <p className="opacity-60">A sua opinião é fundamental para continuarmos a elevar os nossos padrões.</p>
                    </div>

                    <form className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Nome</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Maria Silva"
                                    className={`p-4 rounded-xl border outline-none transition-all focus:border-primary
                                        ${isDark ? 'bg-slate-950 border-white/10 text-white' : 'bg-slate-50 border-black/10'}`}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Ocupação</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Viajante"
                                    className={`p-4 rounded-xl border outline-none transition-all focus:border-primary
                                        ${isDark ? 'bg-slate-950 border-white/10 text-white' : 'bg-slate-50 border-black/10'}`}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-widest opacity-60">A Sua Experiência</label>
                            <textarea
                                rows="4"
                                placeholder="Conte-nos como foi a sua estadia..."
                                className={`p-4 rounded-xl border outline-none transition-all focus:border-primary resize-none
                                    ${isDark ? 'bg-slate-950 border-white/10 text-white' : 'bg-slate-50 border-black/10'}`}
                            />
                        </div>

                        <button className="btn-primary w-full py-5 text-sm font-bold uppercase tracking-[0.2em] mt-2 shadow-2xl shadow-primary/20 transition-transform active:scale-95">
                            Publicar Comentário
                        </button>
                    </form>
                </motion.div>
            </div>
        </section >
    );
};

export default Testimonials;
