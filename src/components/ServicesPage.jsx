import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Wind, Coffee, Zap, Shield, ArrowRight, Heart, Utensils, Award,
    Clock, Users, MapPin, Sparkles, BookOpen, Music
} from 'lucide-react';
import { triggerBooking } from '../utils/bookingEvent';

const experienceTypes = [
    {
        id: 'spa',
        label: 'SPA & WELLNESS',
        title: 'Centro de Bem-Estar',
        mood: 'Relaxamento • Equilíbrio • Saúde',
        concept: 'Tratamentos Holísticos',
        duration: '60-120 min',
        capacity: 'Individual / Casal',
        location: 'Piso -1',
        ctaText: 'RESERVAR EXPERIÊNCIA',
        desc: 'Um espaço dedicado ao relaxamento profundo. O nosso Spa oferece uma variety de massagens e tratamentos de corpo, utilizando produtos de alta qualidade para garantir o seu bem-estar físico e mental.',
        features: [
            { icon: <Heart size={18} />, label: 'Massagens de Relaxamento' },
            { icon: <Shield size={18} />, label: 'Salas Privadas' },
            { icon: <Wind size={18} />, label: 'Sauna e Banho Turco' },
            { icon: <Sparkles size={18} />, label: 'Tratamentos de Rosto' }
        ],
        image: '/src/assets/experiences/spa-hero.png',
        subtitle: 'Desconecte-se da rotina e recarregue energies no nosso centro de bem-estar completo.',
        atmosphere: {
            title: 'Ambiente do Spa',
            preTitle: 'CONFORTO E CALMA',
            mainDesc: 'Um ambiente tranquilo com iluminação suave e música ambiente, desenhado para proporcionar uma experiência de relaxamento total.',
            details: [
                { title: 'Instalações Modernas', desc: 'Espaços amplos e balneários equipados com todas as comodidades.' },
                { title: 'Equipa Especializada', desc: 'Terapeutas profissionais prontos para personalizar o seu tratamento.' }
            ],
            images: {
                large: '/src/assets/experiences/spa-hero.png',
                small1: '/src/assets/experiences/spa-small1.png',
                small2: '/src/assets/experiences/spa-small2.png'
            }
        }
    },
    {
        id: 'dining',
        label: 'GASTRONOMIA',
        title: 'Restaurante & Bar',
        mood: 'Sabor • Qualidade • Conforto',
        concept: 'Cozinha Internacional',
        duration: '07h00 - 23h00',
        capacity: 'Interior e Esplanada',
        location: 'Piso 0',
        ctaText: 'RESERVAR EXPERIÊNCIA',
        desc: 'Descubra o melhor da gastronomia local e internacional. O nosso restaurante oferece menus variados, com ingredientes frescos e uma carta de vinhos selecionada para acompanhar a sua refeição.',
        features: [
            { icon: <Utensils size={18} />, label: 'Pequeno-almoço Buffet' },
            { icon: <Award size={18} />, label: 'Carta de Vinhos' },
            { icon: <Coffee size={18} />, label: 'Bar de Cocktails' },
            { icon: <Music size={18} />, label: 'Música ao Vivo' }
        ],
        image: '/src/assets/experiences/dining-hero.png',
        subtitle: 'Desfrute de uma experiência gastronómica variada num ambiente sofisticado e acolhedor.',
        atmosphere: {
            title: 'Ambiente do Restaurante',
            preTitle: 'EXPERIÊNCIA À MESA',
            mainDesc: 'Um espaço elegante com serviço de mesa atento, ideal tanto para jantares de negócios como para momentos em família.',
            details: [
                { title: 'Decoração Moderna', desc: 'Mobiliário confortável e iluminação pensada para cada momento do dia.' },
                { title: 'Ingredientes Frescos', desc: 'Trabalhamos com produtores locais para garantir a frescura de cada prato.' }
            ],
            images: {
                large: '/src/assets/experiences/dining-hero.png',
                small1: '/src/assets/experiences/dining-small1.png',
                small2: '/src/assets/experiences/dining-small2.png'
            }
        }
    },
    {
        id: 'hub',
        label: 'BUSINESS HUB',
        title: 'Centro de Negócios',
        mood: 'Foco • Tecnologia • Eficiência',
        concept: 'Espaço de Trabalho',
        duration: '24/7',
        capacity: 'Salas de Reunião',
        location: 'Piso 2',
        ctaText: 'RESERVAR EXPERIÊNCIA',
        desc: 'Um espaço profissional e equipado para as suas necessidades de trabalho. Oferecemos internet de alta velocidade, salas de reunião privadas e todas as ferramentas para garantir a sua produtividade.',
        features: [
            { icon: <Zap size={18} />, label: 'Internet de Alta Velocidade' },
            { icon: <Shield size={18} />, label: 'Salas Privativas' },
            { icon: <BookOpen size={18} />, label: 'Área de Biblioteca' },
            { icon: <Coffee size={18} />, label: 'Espaço de Café' }
        ],
        image: '/src/assets/experiences/hub-hero.png',
        subtitle: 'Trabalhe com conforto e eficiência no nosso business hub totalmente equipado.',
        atmosphere: {
            title: 'O Espaço de Trabalho',
            preTitle: 'FOCO E RESULTADOS',
            mainDesc: 'Design funcional e ergonómico com luz natural, criando o ambiente ideal para reuniões ou trabalho concentrado.',
            details: [
                { title: 'Tecnologia Avançada', desc: 'Equipamentos audiovisuais modernos e suporte técnico disponível.' },
                { title: 'Zonas de Descanso', desc: 'Áreas confortáveis para pausas curtas e networking informal.' }
            ],
            images: {
                large: '/src/assets/experiences/hub-hero.png',
                small1: '/src/assets/experiences/hub-small1.png',
                small2: '/src/assets/experiences/hub-small2.png'
            }
        }
    }
];

const ServicesPage = () => {
    const [activeTab, setActiveTab] = useState(experienceTypes[0].id);
    const activeExp = experienceTypes.find(exp => exp.id === activeTab);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Precise scroll to tabs to ensure "one screen" framing
        const timer = setTimeout(() => {
            const tabsElement = document.querySelector('#experiences-content');
            if (tabsElement) {
                tabsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [activeTab]);

    const openBooking = (type) => triggerBooking(type);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rooms-page"
            style={{ background: 'var(--color-bg)' }}
        >
            {/* 1. Hero Section */}
            <div className="rooms-full-hero" id="service-hero">
                <div
                    className="rooms-hero-bg-img ken-burns"
                    style={{ backgroundImage: `url(${activeExp.image})` }}
                />
                <div className="rooms-hero-overlay-gradient"></div>
                <div className="rooms-hero-centering">
                    <motion.div
                        key={activeTab + "-hero"}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.98 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    staggerChildren: 0.15,
                                    delayChildren: 0.2,
                                    duration: 1.2,
                                    ease: [0.16, 1, 0.3, 1]
                                }
                            }
                        }}
                        className="rooms-hero-text-over"
                    >
                        <motion.span
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 0.6, y: 0 } }}
                            className="rooms-pre-title"
                            style={{ color: 'white' }}
                        >
                            LUSSO EXPERIENCES
                        </motion.span>
                        <motion.h1
                            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                            className="rooms-main-title serif"
                            style={{ color: 'white' }}
                        >
                            {activeExp.title}
                        </motion.h1>
                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.8, y: 0 } }}
                            className="rooms-hero-sub"
                            style={{ color: 'white' }}
                        >
                            {activeExp.subtitle}
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* 2. Navigation Tabs Anchor */}
            <div id="experiences-content-anchor" />
            <motion.div
                className="rooms-tabs-sticky"
                id="experiences-content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            staggerChildren: 0.1,
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1]
                        }
                    }
                }}
            >
                <div className="rooms-tabs-wrapper">
                    {experienceTypes.map((exp) => (
                        <motion.button
                            key={exp.id}
                            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                            onClick={() => setActiveTab(exp.id)}
                            className={`rooms-tab-item ${activeTab === exp.id ? 'active' : ''}`}
                        >
                            {exp.label}
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            {/* 3. Split Content Area */}
            <div className="rooms-split-viewer">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="rooms-split-container"
                    >
                        <div className="rooms-side-media">
                            <motion.div
                                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                                className="rooms-media-frame"
                            >
                                <img src={activeExp.image} alt={activeExp.title} className="ken-burns" />
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: 0.8, duration: 1 }}
                                    className="rooms-price-badge"
                                    style={{ padding: '1.5rem 2.5rem' }}
                                >
                                    <span className="price-label">CONCEITO EXCLUSIVO</span>
                                    <span className="price-value" style={{ fontSize: '1.8rem' }}>{activeExp.concept}</span>
                                    <span className="price-unit">Experiência Lusso de Assinatura</span>
                                </motion.div>
                            </motion.div>
                        </div>

                        <div className="rooms-side-info">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 0.3
                                        }
                                    }
                                }}
                                className="rooms-info-inner"
                            >
                                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="rooms-title-box">
                                    <span className="room-mood-text">{activeExp.mood}</span>
                                    <h2 className="rooms-h2 serif">{activeExp.title}</h2>
                                    <div className="rooms-specs-bar">
                                        <div className="spec-item"><Clock size={16} /> {activeExp.duration}</div>
                                        <div className="spec-item"><Users size={16} /> {activeExp.capacity}</div>
                                        <div className="spec-item"><MapPin size={16} /> {activeExp.location}</div>
                                    </div>
                                </motion.div>

                                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.8, y: 0 } }} className="rooms-description-text">{activeExp.desc}</motion.p>

                                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="rooms-amenities-list">
                                    {activeExp.features.map((feature, idx) => (
                                        <div key={idx} className="amenity-pill">
                                            <span className="amenity-icon">{feature.icon}</span>
                                            <span className="amenity-label">{feature.label}</span>
                                        </div>
                                    ))}
                                </motion.div>

                                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="rooms-action-area">
                                    <button
                                        onClick={() => openBooking(activeExp.title)}
                                        className="luxury-booking-btn"
                                    >
                                        <span>{activeExp.ctaText}</span>
                                        <ArrowRight size={20} />
                                    </button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* 4. Mood Grid Section */}
            <section className="rooms-mood-grid-section">
                <div className="mood-container-wide">
                    <motion.div
                        className="mood-text-side"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
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
                        <motion.span variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 0.6, x: 0 } }} className="rooms-pre-title">{activeExp.atmosphere.preTitle}</motion.span>
                        <motion.h2
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                            className="serif"
                            style={{ fontSize: '3.5rem', fontWeight: 700, margin: '1rem 0' }}
                        >
                            {activeExp.atmosphere.title}
                        </motion.h2>
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.7, y: 0 } }} className="mood-main-desc">
                            {activeExp.atmosphere.mainDesc}
                        </motion.p>

                        <div className="mood-details-list">
                            {activeExp.atmosphere.details.map((detail, idx) => (
                                <motion.div
                                    key={idx}
                                    className="mood-detail-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: 0.1 * idx }}
                                >
                                    <span className="detail-number">0{idx + 1}</span>
                                    <div className="detail-content">
                                        <h4 className="serif">{detail.title}</h4>
                                        <p>{detail.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="mood-images-side">
                        <motion.div
                            className="mood-img-large"
                            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                        >
                            <img src={activeExp.atmosphere.images.large} alt="Atmosphere 1" />
                        </motion.div>
                        <div className="mood-img-small-row">
                            <motion.div
                                className="mood-img-small"
                                initial={{ opacity: 0, x: 40, y: 20 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 1.2, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
                            >
                                <img src={activeExp.atmosphere.images.small1} alt="Atmosphere 2" />
                            </motion.div>
                            <motion.div
                                className="mood-img-small"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 1.2, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
                            >
                                <img src={activeExp.atmosphere.images.small2} alt="Atmosphere 3" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Parallax Promise */}
            <section className="rooms-promise-section">
                <div className="promise-parallax-bg">
                    <div className="promise-overlay"></div>
                </div>
                <motion.div
                    className="promise-content"
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                >
                    <blockquote className="serif">
                        "{activeTab === 'spa'
                            ? "O silêncio é a música mais potente da alma quando o luxo é verdadeiro."
                            : activeTab === 'dining'
                                ? "Cozinhar é uma forma de dar amor, mas com técnica torna-se numa forma de arte eterna."
                                : "Onde o foco encontra a beleza, o sucesso torna-se inevitável."
                        }"
                    </blockquote>
                    <cite>— A Nossa Filosofia de Excelência</cite>
                </motion.div>
            </section>
        </motion.div>
    );
};

export default ServicesPage;
