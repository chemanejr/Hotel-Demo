import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const detailsData = {
    spa: {
        title: 'Infinity Spa',
        subtitle: 'Rejuvelecimento Hidro-sónico',
        description: 'O nosso spa não é apenas relaxamento, é regeneração cellular. Utilizando frequências sonoras subaquáticas e aromaterapia digital, cada sessão é personalizada para o seu estado biométrico atual.',
        images: [
            'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb8?q=80&w=1000&auto=format&fit=crop'
        ],
        features: ['Piscinas de Magnésio', 'Sauna Infravermelha', 'Cápsulas de Meditação IA']
    },
    dining: {
        title: 'Gastronomia Molecular',
        subtitle: 'Onde a Ciência encontra o Sabor',
        description: 'Experimente a cozinha do futuro. Ingredientes cultivados no nosso laboratório hidropônico vertical, preparados com técnicas moleculares para criar texturas e sabores nunca antes possíveis.',
        images: [
            'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop'
        ],
        features: ['Menu de Degustação 12 Pratos', 'Sommelier Robótico', 'Ambiente Imersivo 360°']
    },
    workspace: {
        title: 'Smart Workspace',
        subtitle: 'Produtividade Sem Limites',
        description: 'Um espaço de coworking privado equipado com estações de trabalho holográficas, isolamento acústico ativo e conectividade de 10Gbps diretos ao backbone.',
        images: [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1000&auto=format&fit=crop'
        ],
        features: ['Monitores 8K Curvos', 'Salas de Reunião VR', 'Assistente Pessoal Dedicado']
    }
};

const ServiceDetail = () => {
    const { id } = useParams();
    const { openBooking } = useBooking();
    const data = detailsData[id];

    if (!data) return <div className="section-container text-center">Serviço não encontrado.</div>;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            xml:exit={{ opacity: 0 }}
            className="page-container"
            style={{ paddingTop: '120px', paddingBottom: '4rem', paddingLeft: '10%', paddingRight: '10%' }}
        >
            <Link to="/#services" className="service-detail-back" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', marginBottom: '2rem' }}>
                <ArrowLeft size={20} /> Voltar ao Início
            </Link>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', marginBottom: '4rem', alignItems: 'start' }}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', height: '450px' }}>
                    <img src={data.images[0]} alt={data.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <motion.div
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2
                            }
                        }
                    }}
                >
                    <motion.h1
                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                        className="service-detail-title"
                        style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '0', lineHeight: 1.1 }}
                    >
                        {data.title}
                    </motion.h1>
                    <motion.h2
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}
                    >
                        {data.subtitle}
                    </motion.h2>

                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.8, y: 0 } }}
                        className="service-detail-description"
                        style={{ fontSize: '1.1rem', lineHeight: '1.8' }}
                    >
                        {data.description}
                    </motion.p>

                    <motion.ul
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
                        style={{ listStyle: 'none', marginBottom: '1rem' }}
                    >
                        {data.features.map((feat, i) => (
                            <motion.li
                                key={i}
                                variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                                className="service-detail-feature"
                                style={{ padding: '0.5rem 0', borderBottom: '1px solid #e2e8f0' }}
                            >
                                • {feat}
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.button
                        variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                        onClick={() => openBooking({ roomType: data.title })}
                        style={{
                            padding: '1rem 3rem',
                            backgroundColor: '#1a9cb0',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            borderRadius: '0.25rem',
                            border: 'none',
                            cursor: 'pointer',
                            alignSelf: 'flex-start',
                            marginLeft: '7rem',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#158a9c'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#1a9cb0'}
                    >
                        RESERVAR AGORA
                    </motion.button>
                </motion.div>
            </div>

            <div style={{ borderRadius: '12px', overflow: 'hidden', height: '500px', width: '100%', marginBottom: '6rem' }}>
                <img src={data.images[1]} alt="Detail View" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Cross-selling Section */}
            <div style={{
                borderTop: '1px solid rgba(0,0,0,0.05)',
                paddingTop: '6rem',
                textAlign: 'center'
            }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.5rem' }}>Complete a sua Experiência</h3>
                <p style={{ opacity: 0.6, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                    Aproveite ao máximo o {data.title} hospedando-se numa das nossas suítes exclusivas projetadas para o seu descanso.
                </p>
                <Link
                    to="/rooms"
                    className="btn-primary"
                    style={{
                        display: 'inline-block',
                        padding: '1.2rem 3.5rem',
                        borderRadius: '100px',
                        textDecoration: 'none',
                        color: 'white',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        fontSize: '0.9rem'
                    }}
                >
                    VER QUARTOS DISPONÍVEIS
                </Link>
            </div>

        </motion.div >
    );
};

export default ServiceDetail;
