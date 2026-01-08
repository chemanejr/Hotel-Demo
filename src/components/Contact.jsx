import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
    const { isDark } = useTheme();

    const contactInfo = [
        { icon: <MapPin size={24} />, label: "ENDEREÇO", value: "Av. do Futuro, 2077\nNeo Lisboa, Portugal" },
        { icon: <Phone size={24} />, label: "TELEFONE", value: "+351 210 000 000" },
        { icon: <Mail size={24} />, label: "EMAIL", value: "reservas@lussofutura.com" }
    ];

    return (
        <section id="contact" className={`w-full py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
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
                <motion.h2
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Contactos
                </motion.h2>
                <motion.p
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.6, y: 0 } }}
                    className="text-lg opacity-60"
                >
                    Estamos aqui para tornar a sua estadia inesquecível.
                </motion.p>
            </motion.div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Left Side: Contact Info */}
                <div className="flex-1 flex flex-col justify-center gap-10">
                    {contactInfo.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: false }}
                            className="flex gap-6 items-start"
                        >
                            <div className="text-primary mt-1">{item.icon}</div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-bold tracking-widest text-primary uppercase">{item.label}</span>
                                <span className="text-xl font-light leading-snug whitespace-pre-line text-text">
                                    {item.value}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Side: Map */}
                <div className="h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl relative border border-white/5 bg-slate-800">
                    <iframe
                        title="Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.329735951833!2d32.6105833!3d-25.9525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69a5310619717%3A0xc49bd7473729e247!2sSouthern%20Sun%20Maputo!5e0!3m2!1spt-PT!2smz!4v1715420000000!5m2!1spt-PT!2smz"
                        className={`w-full h-full border-0 ${isDark ? 'invert-[90%] hue-rotate-[180deg] opacity-80' : 'grayscale-[0.2]'}`}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            {/* Contact Form Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className={`mt-24 p-8 md:p-16 rounded-[3rem] max-w-4xl mx-auto border transition-all duration-500
                    ${isDark ? 'bg-slate-900 border-white/5' : 'bg-white border-black/5 shadow-2xl'}`}
            >
                <div className="text-center mb-10">
                    <span className="inline-block py-2 px-6 bg-primary/10 rounded-full text-primary text-xs font-bold tracking-[0.2em] mb-4">
                        MENSAGEM
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Envie-nos uma Mensagem</h3>
                    <p className="opacity-60">Um dos nossos concierges entrará em contacto brevemente.</p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-2">Nome</label>
                        <input type="text" className={`p-4 rounded-xl border outline-none transition-all focus:border-primary
                            ${isDark ? 'bg-slate-950 border-white/10 text-white' : 'bg-slate-50 border-black/10'}`} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-2">Apelido</label>
                        <input type="text" className={`p-4 rounded-xl border outline-none transition-all focus:border-primary
                            ${isDark ? 'bg-slate-950 border-white/10 text-white' : 'bg-slate-50 border-black/10'}`} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-2">Telemóvel</label>
                        <input type="tel" className={`p-4 rounded-xl border outline-none transition-all focus:border-primary
                            ${isDark ? 'bg-slate-950 border-white/10 text-white' : 'bg-slate-50 border-black/10'}`} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-2">Email</label>
                        <input type="email" placeholder="exemplo@email.com" className={`p-4 rounded-xl border outline-none transition-all focus:border-primary
                            ${isDark ? 'bg-slate-950 border-white/10 text-white' : 'bg-slate-50 border-black/10'}`} />
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-2">Mensagem</label>
                        <textarea rows="4" placeholder="Como podemos ajudar?" className={`p-4 rounded-xl border outline-none transition-all focus:border-primary resize-none
                            ${isDark ? 'bg-slate-950 border-white/10 text-white' : 'bg-slate-50 border-black/10'}`} />
                    </div>
                    <div className="md:col-span-2 mt-4">
                        <button className="btn-primary w-full py-5 text-sm font-bold uppercase tracking-[0.3em] shadow-2xl shadow-primary/20 transition-transform active:scale-95">
                            ENVIAR MENSAGEM
                        </button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
