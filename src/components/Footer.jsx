import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[var(--color-bg)] py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-white/5">
            <motion.div
                className="max-w-7xl mx-auto flex flex-col items-center text-center gap-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2 }
                    }
                }}
            >
                <div className="desktop-shift-footer-branding">
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h2 className="text-3xl font-bold mb-2 text-text tracking-widest">LUSSO FUTURA</h2>
                        <p className="text-sm text-text/50 uppercase tracking-[0.3em] footer-subtitle-shift">A redefinição da hospitalidade.</p>
                    </motion.div>
                </div>

                <div className="desktop-shift-footer-socials">
                    <motion.div
                        variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                        className="flex gap-8"
                    >
                        {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="text-text/60 hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                            >
                                <Icon size={24} />
                            </a>
                        ))}
                    </motion.div>
                </div>

                <div className="desktop-shift-footer-copyright">
                    <motion.div
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.3 } }}
                        className="text-[10px] uppercase font-bold tracking-[0.2em] text-text mt-4"
                    >
                        &copy; {new Date().getFullYear()} Lusso Futura Hotels. Todos os direitos reservados.
                    </motion.div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
