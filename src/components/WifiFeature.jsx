import React from 'react';
import { motion } from 'framer-motion';
import { Wifi } from 'lucide-react';

const WifiFeature = () => {
    return (
        <section className="wifi-section" style={{ padding: '4rem 10%', background: '#f0f9ff', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}
            >
                <div className="wifi-icon-circle" style={{ background: '#fff', padding: '1rem', borderRadius: '50%', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                    <Wifi size={40} color="var(--color-primary)" />
                </div>
                <div style={{ textAlign: 'center', flex: 1, minWidth: '300px' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Rede Super Rápida</h3>
                    <p style={{ color: '#475569', fontSize: '1.5rem' }}>
                        Internet de alta performance com Wi-Fi 7 e fibra óptica para streaming, trabalho e videochamadas sem falhas.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default WifiFeature;
