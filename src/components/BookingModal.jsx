import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Mail, Phone, CreditCard } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

// Helper Check icon (needed locally since lucide Check is used)
const SuccessIcon = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const BookingModal = () => {
    const { isOpen, closeBooking, prefillData } = useBooking();
    const [step, setStep] = useState(1);

    useEffect(() => {
        if (isOpen) setStep(1);
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
        }}>
            {/* Backdrop */}
            <div
                onClick={closeBooking}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(4px)',
                }}
            />

            {/* Scroll Container */}
            <div style={{
                position: 'absolute',
                inset: 0,
                overflowY: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                pointerEvents: 'none'
            }}>
                {/* Modal Card */}
                <div
                    className="booking-modal-container"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        position: 'relative',
                        width: 'calc(100% - 1rem)',
                        maxWidth: '500px',
                        background: '#fff',
                        borderRadius: '16px',
                        padding: typeof window !== 'undefined' && window.innerWidth < 480 ? '1.5rem 1rem' : '2rem',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        pointerEvents: 'auto',
                        animation: 'fadeIn 0.2s ease-out'
                    }}
                >
                    <button
                        onClick={closeBooking}
                        style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', border: 'none', background: 'transparent', cursor: 'pointer' }}
                    >
                        <X size={24} color="#64748b" />
                    </button>

                    <h2 className="booking-modal-title" style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                        {step === 1 ? 'Sua Reserva' : 'Reserva Confirmada!'}
                    </h2>
                    <p className="booking-modal-subtitle" style={{ marginBottom: '2rem' }}>
                        {step === 1 ? 'Preencha os dados para garantir a sua estadia.' : 'Entraremos em contato em breve.'}
                    </p>

                    {step === 1 ? (
                        <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                            {/* Room Type */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label className="booking-modal-label" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Tipo de Quarto</label>
                                <select
                                    defaultValue={prefillData?.roomType || "Standard"}
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}
                                >
                                    <option value="Standard">Standard</option>
                                    <option value="Deluxe">Deluxe</option>
                                    <option value="Executive">Suíte Executiva</option>
                                    <option value="Presidential">Suíte Presidencial</option>
                                </select>
                            </div>

                            {/* Dates Row */}
                            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-6">
                                <div>
                                    <label className="booking-modal-label" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Check-in</label>
                                    <div style={{ position: 'relative' }}>
                                        <Calendar size={16} style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                        <input type="date" required style={{ width: '100%', padding: '0.6rem 0.5rem 0.6rem 1.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.85rem' }} />
                                    </div>
                                </div>
                                <div>
                                    <label className="booking-modal-label" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Check-out</label>
                                    <div style={{ position: 'relative' }}>
                                        <Calendar size={16} style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                        <input type="date" required style={{ width: '100%', padding: '0.6rem 0.5rem 0.6rem 1.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.85rem' }} />
                                    </div>
                                </div>
                            </div>

                            {/* Personal Info */}
                            <div style={{ marginBottom: '1rem' }}>
                                <label className="booking-modal-label" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Nome Completo</label>
                                <div style={{ position: 'relative' }}>
                                    <User size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                    <input type="text" placeholder="Seu nome" required style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
                                </div>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label className="booking-modal-label" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Email</label>
                                <div style={{ position: 'relative' }}>
                                    <Mail size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                                    <input type="email" placeholder="seu@email.com" required style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <motion.button
                                    type="submit"
                                    className="btn-primary"
                                    animate={{
                                        y: [0, -4, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    style={{
                                        padding: '0.8rem 2rem',
                                        fontSize: '0.8rem',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        width: 'auto',
                                        minWidth: '220px'
                                    }}
                                >
                                    Confirmar Disponibilidade
                                </motion.button>
                            </div>
                        </form>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                            <div style={{ background: '#ecfdf5', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                                <SuccessIcon size={40} color="#059669" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Pedido Recebido!</h3>
                            <p style={{ color: '#64748b' }}>A nossa equipa de concierge entrará em contato em breve para finalizar os detalhes.</p>
                            <button
                                onClick={closeBooking}
                                style={{ marginTop: '2rem', padding: '0.75rem 2rem', background: '#f1f5f9', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', color: '#334155' }}
                            >
                                Fechar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
