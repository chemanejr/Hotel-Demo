import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--color-bg)', padding: '6rem 10%', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <motion.div
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2rem' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
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
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text)' }}>LUSSO FUTURA</h2>
                    <p style={{ color: 'var(--color-text)', opacity: 0.5, fontSize: '0.9rem' }}>A redefinição da hospitalidade.</p>
                </motion.div>

                <motion.div
                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                    style={{ display: 'flex', gap: '2rem' }}
                >
                    <a href="#" style={{ color: 'var(--color-text)', opacity: 0.7, transition: '0.3s' }} className="social-link"><Instagram size={24} /></a>
                    <a href="#" style={{ color: 'var(--color-text)', opacity: 0.7, transition: '0.3s' }} className="social-link"><Facebook size={24} /></a>
                    <a href="#" style={{ color: 'var(--color-text)', opacity: 0.7, transition: '0.3s' }} className="social-link"><Twitter size={24} /></a>
                    <a href="#" style={{ color: 'var(--color-text)', opacity: 0.7, transition: '0.3s' }} className="social-link"><Mail size={24} /></a>
                </motion.div>

                <motion.div
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.4 } }}
                    style={{ color: 'var(--color-text)', fontSize: '0.8rem', marginTop: '2rem' }}
                >
                    &copy; {new Date().getFullYear()} Lusso Futura Hotels. Todos os direitos reservados.
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;
