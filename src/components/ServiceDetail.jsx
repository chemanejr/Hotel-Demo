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
            exit={{ opacity: 0 }}
            className="page-container px-6 md:px-[10%]"
            style={{
                paddingTop: typeof window !== 'undefined' && window.innerWidth < 1024 ? '100px' : '140px',
                paddingBottom: '4rem'
            }}
        >
            <Link to="/#services" className="service-detail-back" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', marginBottom: '2rem' }}>
                <ArrowLeft size={20} /> Voltar ao Início
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 mb-16 lg:mb-24 items-start">
                <div className="rounded-2xl overflow-hidden h-[300px] md:h-[450px]">
                    <img src={data.images[0]} alt={data.title} className="w-full h-full object-cover" />
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
                        className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1]"
                    >
                        {data.title}
                    </motion.h1>
                    <motion.h2
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        className="text-xl md:text-2xl text-primary"
                    >
                        {data.subtitle}
                    </motion.h2>

                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.8, y: 0 } }}
                        className="text-base md:text-lg leading-relaxed opacity-80"
                    >
                        {data.description}
                    </motion.p>

                    <motion.ul
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
                        className="list-none space-y-1"
                    >
                        {data.features.map((feat, i) => (
                            <motion.li
                                key={i}
                                variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                                className="py-2 border-b border-black/5 dark:border-white/5 opacity-70"
                            >
                                • {feat}
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.button
                        variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                        onClick={() => openBooking({ roomType: data.title })}
                        className="mt-4 px-10 py-4 bg-[#1a9cb0] hover:bg-[#158a9c] text-white font-bold text-sm tracking-widest uppercase rounded transition-colors self-start"
                    >
                        RESERVAR AGORA
                    </motion.button>
                </motion.div>
            </div>

            <div className="rounded-2xl overflow-hidden h-[400px] md:h-[600px] mb-20 lg:mb-32">
                <img src={data.images[1]} alt="Detail View" className="w-full h-full object-cover" />
            </div>

            {/* Cross-selling Section */}
            <div className="border-t border-black/5 dark:border-white/5 pt-20 lg:pt-32 text-center">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">Complete a sua Experiência</h3>
                <p className="opacity-60 mb-12 max-w-2xl mx-auto px-4">
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
