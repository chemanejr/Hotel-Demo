import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
    const { isDark } = useTheme();

    const contactInfo = [
        {
            icon: <MapPin size={24} />,
            label: "ENDEREÇO:",
            value: "Av. do Futuro, 2077\nNeo Lisboa, Portugal"
        },
        {
            icon: <Phone size={24} />,
            label: "TELEFONE:",
            value: "+351 210 000 000"
        },
        {
            icon: <Mail size={24} />,
            label: "EMAIL:",
            value: "reservas@lussofutura.com"
        }
    ];

    return (
        <section
            id="contact"
            style={{
                width: '100%',
                background: 'var(--color-bg)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '4rem',
                paddingBottom: '4rem'
            }}
        >

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
                    className="section-title text-4xl md:text-5xl"
                    style={{ color: 'inherit' }}
                >
                    Contactos
                </motion.h2>
                <motion.p
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.6, y: 0 } }}
                    className="section-subtitle mt-0"
                >
                    Estamos aqui para tornar a sua estadia inesquecível.
                </motion.p>
            </motion.div>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%',
                minHeight: '400px',
                padding: '0 5%'
            }}>
                {/* Left Side: Contact Info */}
                <div style={{
                    flex: '1 1 400px',
                    padding: '2rem 5%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '2.5rem'
                }}>
                    {contactInfo.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: false }}
                            style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
                        >
                            <div style={{ color: 'var(--color-primary)', opacity: 0.8, marginTop: '4px' }}>
                                {item.icon}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                <span style={{
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    letterSpacing: '1px',
                                    color: 'var(--color-text)',
                                    opacity: 0.9
                                }}>
                                    {item.label}
                                </span>
                                <span style={{
                                    fontSize: '1.1rem',
                                    color: 'var(--color-text)',
                                    fontWeight: 300,
                                    lineHeight: 1.4,
                                    whiteSpace: 'pre-line'
                                }}>
                                    {item.value}
                                </span>
                            </div>
                        </motion.div>
                    ))}


                </div>

                {/* Right Side: Map */}
                <div style={{
                    flex: '1 1 500px',
                    minHeight: '400px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    background: '#f1f5f9',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}>
                    <iframe
                        title="Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.329735951833!2d32.6105833!3d-25.9525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69a5310619717%3A0xc49bd7473729e247!2sSouthern%20Sun%20Maputo!5e0!3m2!1spt-PT!2smz!4v1715420000000!5m2!1spt-PT!2smz"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: isDark ? 'invert(90%) hue-rotate(180deg) opacity(0.8)' : 'grayscale(0.2)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            {/* Contact Form Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                style={{
                    width: '100%',
                    maxWidth: '1000px',
                    margin: '6rem auto 0',
                    padding: '0 5%'
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        background: 'rgba(26, 156, 176, 0.1)',
                        borderRadius: '100px',
                        color: 'var(--color-primary)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        letterSpacing: '2px',
                        marginBottom: '1rem'
                    }}>
                        MENSAGEM
                    </div>
                    <h3 style={{
                        fontSize: '2.5rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        marginBottom: '0.5rem',
                        fontFamily: 'Outfit, sans-serif'
                    }}>
                        Envie-nos uma Mensagem
                    </h3>
                    <p style={{ color: 'var(--color-text)', opacity: 0.6, fontSize: '1.1rem' }}>
                        Preencha o formulário abaixo e um dos nossos concierges entrará em contacto brevemente.
                    </p>
                </div>

                <div style={{
                    background: isDark ? '#1e293b' : '#ffffff',
                    padding: '1.5rem 3rem',
                    borderRadius: '24px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                    border: isDark ? '1px solid #334155' : '1px solid #f1f5f9'
                }}>
                    <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: 300,
                        marginBottom: '1rem',
                        textAlign: 'left',
                        color: 'var(--color-text)',
                        letterSpacing: '2px',
                        opacity: 0.8
                    }}>
                        DETALHES
                    </h3>
                    <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div style={{ gridColumn: 'span 1' }}>
                            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.8rem', fontWeight: 400, color: 'var(--color-text)', opacity: 0.9 }}>
                                <span style={{ color: '#e14828', marginRight: '4px' }}>*</span>NOME
                            </label>
                            <input type="text" style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: isDark ? '1px solid #334155' : '1px solid #e2e8f0', background: isDark ? '#0f172a' : '#f8fafc', color: 'var(--color-text)', outline: 'none' }} />
                        </div>
                        <div style={{ gridColumn: 'span 1' }}>
                            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.8rem', fontWeight: 400, color: 'var(--color-text)', opacity: 0.9 }}>
                                <span style={{ color: '#e14828', marginRight: '4px' }}>*</span>APELIDO
                            </label>
                            <input type="text" style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: isDark ? '1px solid #334155' : '1px solid #e2e8f0', background: isDark ? '#0f172a' : '#f8fafc', color: 'var(--color-text)', outline: 'none' }} />
                        </div>
                        <div style={{ gridColumn: 'span 1' }}>
                            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.8rem', fontWeight: 400, color: 'var(--color-text)', opacity: 0.9 }}>
                                <span style={{ color: '#e14828', marginRight: '4px' }}>*</span>TELEMÓVEL
                            </label>
                            <input type="tel" style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: isDark ? '1px solid #334155' : '1px solid #e2e8f0', background: isDark ? '#0f172a' : '#f8fafc', color: 'var(--color-text)', outline: 'none' }} />
                        </div>
                        <div style={{ gridColumn: 'span 1' }}>
                            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.8rem', fontWeight: 400, color: 'var(--color-text)', opacity: 0.9 }}>
                                <span style={{ color: '#e14828', marginRight: '4px' }}>*</span>EMAIL
                            </label>
                            <input type="email" style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: isDark ? '1px solid #334155' : '1px solid #e2e8f0', background: isDark ? '#0f172a' : '#f8fafc', color: 'var(--color-text)', outline: 'none' }} placeholder="exemplo@email.com" />
                        </div>
                        <div style={{ gridColumn: 'span 2' }}>
                            <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.8rem', fontWeight: 400, color: 'var(--color-text)', opacity: 0.9 }}>MENSAGEM (OPCIONAL)</label>
                            <textarea rows="3" style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: isDark ? '1px solid #334155' : '1px solid #e2e8f0', background: isDark ? '#0f172a' : '#f8fafc', color: 'var(--color-text)', outline: 'none', resize: 'none' }} placeholder="Como podemos ajudar?"></textarea>
                        </div>
                        <div style={{ gridColumn: 'span 2', marginTop: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                            <button type="button" className="btn-primary" style={{ minWidth: '300px', padding: '1rem 3rem', borderRadius: '4px', fontWeight: 700, letterSpacing: '2px' }}>
                                ENVIAR MENSAGEM
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
