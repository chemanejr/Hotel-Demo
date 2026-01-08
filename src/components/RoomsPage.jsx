import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Check,
    ArrowRight,
    Wifi,
    Coffee,
    Mountain,
    Speaker,
    Tv,
    Wind,
    Maximize,
    Users,
    Bed,
    Waves
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { triggerBooking } from '../utils/bookingEvent';
import '../rooms.css';

const roomTypes = [
    {
        id: 'standard',
        label: 'STANDARD',
        title: 'Refúgio Standard',
        size: '30m²',
        bed: '1 Cama King ou 2 Individuais',
        capacity: '2 Adultos',
        view: 'Jardim Interior',
        price: '350',
        desc: 'Onde o silêncio encontra o conforto. Uma coreografia de luz natural e materiais orgânicos que convida ao descanso absoluto após um dia de descobertas.',
        features: [
            { icon: <Wifi size={18} />, label: 'Conexão Fluida' },
            { icon: <Tv size={18} />, label: 'Cinema Privado' },
            { icon: <Wind size={18} />, label: 'Brisa Controlada' },
            { icon: <Coffee size={18} />, label: 'Aroma Matinal' }
        ],
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
        mood: 'Calma • Equilíbrio • Essência',
        atmosphere: {
            large: new URL('../assets/rooms/atmosphere/std_large.png', import.meta.url).href,
            small1: new URL('../assets/rooms/atmosphere/std_detail.png', import.meta.url).href,
            small2: new URL('../assets/rooms/atmosphere/std_sensory.png', import.meta.url).href,
            mainDesc: 'Onde o silêncio encontra o conforto. Uma coreografia de luz natural e materiais orgânicos que convida ao descanso absoluto.',
            details: [
                { title: 'Luz e Sombra', desc: 'Arquitetura que dialoga com a luz natural do Índico ao longo do dia.' },
                { title: 'Texturas Nobres', desc: 'Linhos belgas e sedas orgânicas que acariciam a pele a cada toque.' }
            ]
        }
    },
    {
        id: 'deluxe',
        label: 'DELUXE',
        title: 'Horizonte Deluxe',
        size: '45m²',
        bed: '1 Cama King Size',
        capacity: '2 Adultos',
        view: 'Cidade Panorâmica',
        price: '480',
        desc: 'Sinta o pulsar da cidade do seu santuário privado. Um espaço vasto banhado em texturas premium e vistas que se perdem no horizonte infinito.',
        features: [
            { icon: <Mountain size={18} />, label: 'Vista Infinita' },
            { icon: <Coffee size={18} />, label: 'Cápsulas de Arte' },
            { icon: <Waves size={18} />, label: 'Imersão Profunda' },
            { icon: <Speaker size={18} />, label: 'Symphony Room' }
        ],
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop',
        mood: 'Interligação • Amplitude • Elegância',
        atmosphere: {
            large: new URL('../assets/rooms/atmosphere/dlx_large.png', import.meta.url).href,
            small1: new URL('../assets/rooms/atmosphere/dlx_detail.png', import.meta.url).href,
            small2: new URL('../assets/rooms/atmosphere/dlx_sensory.png', import.meta.url).href,
            mainDesc: 'O pulsar da cidade sob um novo prisma. Um santuário urbano onde a sofisticação encontra a serenidade.',
            details: [
                { title: 'Dourado Urbano', desc: 'O reflexo do entardecer nos arranha-céus, filtrado pela sua janela privada.' },
                { title: 'Conforto Tátil', desc: 'Veludos densos e iluminação de autor que criam um casulo de elegância.' }
            ]
        }
    },
    {
        id: 'executive',
        label: 'SUÍTE EXECUTIVA',
        title: 'Suíte Zenith',
        size: '60m²',
        bed: '1 Cama King + Sofá',
        capacity: '3 Adultos',
        view: 'Oceano Parcial',
        price: '650',
        desc: 'Onde a ambição encontra o lazer. Detalhes em nogueira e mármore criam uma atmosfera de prestígio, complementada pela brisa suave do Índico.',
        features: [
            { icon: <Maximize size={18} />, label: 'Atelier Privado' },
            { icon: <Users size={18} />, label: 'Acesso Prestige' },
            { icon: <Check size={18} />, label: 'Ritual de Chegada' },
            { icon: <Waves size={18} />, label: 'Eco do Oceano' }
        ],
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop',
        mood: 'Distinção • Poder • Harmonia',
        atmosphere: {
            large: new URL('../assets/rooms/atmosphere/exec_large.png', import.meta.url).href,
            small1: new URL('../assets/rooms/atmosphere/exec_detail.png', import.meta.url).href,
            small2: new URL('../assets/rooms/atmosphere/exec_sensory.png', import.meta.url).href,
            mainDesc: 'Prestígio em cada grão de madeira. Um espaço desenhado para quem exige o melhor do lazer e do intelecto.',
            details: [
                { title: 'Legado e Matéria', desc: 'O encontro do mármore Carrara com a nogueira centenária em detalhes de mestre.' },
                { title: 'O Ritual do Sucesso', desc: 'Espaços pensados para a clareza mental, com a brisa do oceano como inspiração.' }
            ]
        }
    },
    {
        id: 'presidential',
        label: 'SUÍTE PRESIDENCIAL',
        title: 'Palácio Presidencial',
        size: '120m²',
        bed: '1 Cama Emperor Size',
        capacity: '4 Adultos',
        view: 'Oceano 360º',
        price: '1.200',
        desc: 'Uma obra-prima de arquitetura emocional. Viva acima das nuvens num retiro que redefine o impossível, com o oceano como sua galeria pessoal.',
        features: [
            { icon: <Waves size={18} />, label: 'Águas Privadas' },
            { icon: <Maximize size={18} />, label: 'Espaço Infinito' },
            { icon: <Users size={18} />, label: 'Cuidado Dedicado' },
            { icon: <ArrowRight size={18} />, label: 'Ponte para o Luxo' }
        ],
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop',
        mood: 'Absoluto • Grandiosidade • Alma',
        atmosphere: {
            large: new URL('../assets/rooms/atmosphere/pres_large.png', import.meta.url).href,
            small1: new URL('../assets/rooms/atmosphere/pres_detail.png', import.meta.url).href,
            small2: new URL('../assets/rooms/atmosphere/pres_sensory.png', import.meta.url).href,
            mainDesc: 'Acima de tudo, o infinito. Uma obra-prima onde o céu e o mar são os únicos vizinhos da sua alma.',
            details: [
                { title: 'Horizonte Líquido', desc: 'Onde a sua piscina privada se funde com o azul profundo do Índico.' },
                { title: 'Tecidos de Sonho', desc: 'Sedas imperiais que dançam com a brisa, revelando a galeria viva do oceano.' }
            ]
        }
    }
];

const RoomsPage = () => {
    const { isDark } = useTheme();
    const openBooking = (data) => triggerBooking(data);
    const [activeTab, setActiveTab] = useState('standard');
    const location = useLocation();

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash && roomTypes.find(r => r.id === hash)) {
            setActiveTab(hash);
        }
    }, [location]);

    useEffect(() => {
        // Precise scroll to tabs to ensure "one screen" framing
        const timer = setTimeout(() => {
            const tabsElement = document.querySelector('#rooms-content-anchor');
            if (tabsElement) {
                tabsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [activeTab]);

    const activeRoom = roomTypes.find(r => r.id === activeTab);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rooms-page"
        >
            {/* NEW: Background Wave Logic */}
            <div className="rooms-soul-waves">
                <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="var(--color-primary)" fillOpacity="0.03" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            {/* Full-Screen Hero Section */}
            <div className="rooms-full-hero" id="room-hero">
                <div
                    className="rooms-hero-bg-img ken-burns"
                    style={{ backgroundImage: `url(${activeRoom.image})` }}
                    key={activeTab + "-bg"}
                />
                <div className="rooms-hero-overlay-gradient"></div>
                <div className="rooms-hero-centering max-w-7xl mx-auto w-full">
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
                        className="rooms-hero-text-over mx-auto"
                    >
                        <motion.span
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 0.6, y: 0 } }}
                            className="rooms-pre-title"
                        >
                            EXPERIÊNCIA {activeRoom.label}
                        </motion.span>
                        <motion.h1
                            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="rooms-main-title uppercase"
                        >
                            {activeRoom.title}
                        </motion.h1>
                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.8, y: 0 } }}
                            className="rooms-hero-sub uppercase tracking-wider"
                        >
                            {activeRoom.desc}
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Navigation Tabs Anchor (Stable reference for scroll) */}
            <div id="rooms-content-anchor" />
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
                    {roomTypes.map((room) => (
                        <motion.button
                            key={room.id}
                            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                            onClick={() => setActiveTab(room.id)}
                            className={`rooms-tab-item ${activeTab === room.id ? 'active' : ''}`}
                        >
                            {room.label}
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            {/* Split Content Area */}
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
                        {/* 1. Large Image Side with Floating Badge */}
                        <div className="rooms-side-media">
                            <motion.div
                                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                                className="rooms-media-frame"
                            >
                                <img
                                    src={activeRoom.image}
                                    alt={activeRoom.title}
                                    className="ken-burns"
                                />
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: 0.8, duration: 1 }}
                                    className="rooms-price-badge"
                                >
                                    <span className="price-label">O SEU REFÚGIO DESDE</span>
                                    <span className="price-value">${activeRoom.price}</span>
                                    <span className="price-unit">por noite de descanso absoluto</span>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* 2. Content Side */}
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
                                    <span className="room-mood-text">{activeRoom.mood}</span>
                                    <h2 className="rooms-h2 serif">{activeRoom.title}</h2>
                                    <div className="rooms-specs-bar">
                                        <div className="spec-item"><Maximize size={16} /> {activeRoom.size}</div>
                                        <div className="spec-item"><Bed size={16} /> {activeRoom.bed}</div>
                                        <div className="spec-item"><Users size={16} /> {activeRoom.capacity}</div>
                                    </div>
                                </motion.div>

                                <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.8, y: 0 } }} className="rooms-description-text">
                                    {activeRoom.desc}
                                </motion.p>

                                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="rooms-amenities-list">
                                    {activeRoom.features.map((feature, idx) => (
                                        <div key={idx} className="amenity-pill">
                                            <span className="amenity-icon">{feature.icon}</span>
                                            <span className="amenity-label">{feature.label}</span>
                                        </div>
                                    ))}
                                </motion.div>

                                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="rooms-action-area">
                                    <button
                                        onClick={() => openBooking({ roomType: activeRoom.label })}
                                        className="luxury-booking-btn"
                                    >
                                        <span>RESERVAR {activeRoom.label}</span>
                                        <ArrowRight size={20} />
                                    </button>

                                    <button
                                        onClick={() => {
                                            const el = document.getElementById('room-experiences');
                                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="rooms-services-link"
                                    >
                                        <span>Conhecer a Nossa Experiência Completa</span>
                                        <ArrowRight size={16} />
                                    </button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* NEW: Atmosphere Mood Grid */}
            <section className="rooms-mood-grid-section">
                <div className="mood-container-wide">
                    <motion.div
                        className="mood-text-side"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
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
                        <motion.span variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 0.6, x: 0 } }} className="rooms-pre-title">A ALMA DO LUSSO</motion.span>
                        <motion.h2
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                            className="comparison-title serif"
                            style={{ margin: '1rem 0' }}
                        >
                            A Atmosfera do Descanso
                        </motion.h2>
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.7, y: 0 } }} className="mood-main-desc">
                            {activeRoom.atmosphere.mainDesc}
                        </motion.p>

                        <div className="mood-details-list">
                            {activeRoom.atmosphere.details.map((detail, idx) => (
                                <motion.div
                                    key={idx}
                                    className="mood-detail-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: 0.1 * idx }}
                                >
                                    <span className="detail-number">0{idx + 1}</span>
                                    <div>
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
                            <img src={activeRoom.atmosphere.large} alt="Atmosfera Principal" />
                        </motion.div>
                        <div className="mood-img-small-row">
                            <motion.div
                                className="mood-img-small"
                                initial={{ opacity: 0, x: 40, y: 20 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 1.2, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
                            >
                                <img src={activeRoom.atmosphere.small1} alt="Detalhe Textura" />
                            </motion.div>
                            <motion.div
                                className="mood-img-small"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 1.2, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
                            >
                                <img src={activeRoom.atmosphere.small2} alt="Detalhe Sensorial" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Our Promise (Emotional Bridge) */}
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
                        "O luxo silencioso não se ouve, sente-se na alma quando o mundo lá fora deixa de existir."
                    </blockquote>
                    <cite>— A Nossa Promessa de Hospitalidade</cite>
                </motion.div>
            </section>

            {/* NEW: Luxury Comparison Table */}
            <section className="rooms-comparison-section">
                <motion.div
                    className="max-w-7xl mx-auto section-header-centered"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="rooms-pre-title">DECISÃO ELITE</span>
                    <h2 className="comparison-title uppercase tracking-tight">Comparação de Estadias</h2>
                </motion.div>

                <motion.div
                    className="comparison-table-container"
                    initial={{ opacity: 0, y: 50, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                >
                    <table className="luxury-table">
                        <thead>
                            <tr>
                                <th>CATEGORIA</th>
                                <th>TAMANHO</th>
                                <th>VISTA</th>
                                <th>CAPACIDADE</th>
                                <th>PREÇO BASE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roomTypes.map(room => (
                                <tr key={room.id} className={activeTab === room.id ? 'highlight' : ''}>
                                    <td className="room-label-cell">{room.label}</td>
                                    <td>{room.size}</td>
                                    <td>{room.view}</td>
                                    <td>{room.capacity}</td>
                                    <td className="price-cell">Desde ${room.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </section>

            {/* NEW: Experiences & Add-ons */}
            <section className="rooms-extras-section" id="room-experiences">
                <motion.div
                    className="max-w-7xl mx-auto section-header-centered"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="rooms-pre-title">PEQUENOS MIMOS</span>
                    <h2 className="comparison-title uppercase tracking-tight">Experiências Exclusivas</h2>
                    <p className="extras-subtext uppercase tracking-widest opacity-40">Personalize a sua estadia com os nossos pacotes de assinatura.</p>
                </motion.div>

                <div className="extras-grid">
                    {[
                        { title: 'Pequeno-Almoço Flutuante', price: '45', desc: 'Uma experiência tropical servida na sua piscina ou jacuzzi privado.', icon: <Waves /> },
                        { title: 'Ritual de Boas-Vindas', price: '80', desc: 'Champagne Moët & Chandon, morangos frescos e flores exóticas.', icon: <Coffee /> },
                        { title: 'Massagem in-Room', price: '120', desc: 'Uma sessão de 60 min de relaxamento profundo sem sair do quarto.', icon: <Users /> }
                    ].map((extra, i) => (
                        <motion.div
                            key={i}
                            className="extra-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: i * 0.15 }}
                        >
                            <div className="extra-icon-box">{extra.icon}</div>
                            <h3>{extra.title}</h3>
                            <p>{extra.desc}</p>
                            <span className="extra-price">${extra.price} LUX</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* NEW: Property Wide Amenities */}
            <section className="rooms-general-amenities">
                <motion.div
                    className="amenities-banner"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="amenity-group">
                        <Wifi size={24} />
                        <span>Starlink Internet</span>
                    </div>
                    <div className="amenity-group">
                        <Coffee size={24} />
                        <span>Barista 24/7</span>
                    </div>
                    <div className="amenity-group">
                        <Users size={24} />
                        <span>Private Butler</span>
                    </div>
                    <div className="amenity-group">
                        <Wind size={24} />
                        <span>Air Purification</span>
                    </div>
                </motion.div>
            </section>

            {/* NEW: FAQ Section */}
            <section className="rooms-faq-section">
                <motion.div
                    className="section-header-centered"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="rooms-pre-title">DÚVIDAS FREQUENTES</span>
                    <h2 className="comparison-title">Informações de Estadia</h2>
                </motion.div>

                <div className="faq-grid-minimal">
                    {[
                        { q: 'Qual o horário de Check-in e Check-out?', a: 'O check-in inicia às 15:00 e o check-out deve ser realizado até às 12:00. Oferecemos Late Check-out mediante disponibilidade.' },
                        { q: 'Existe serviço de transporte para o aeroporto?', a: 'Sim, a Suíte Presidencial inclui transfer VIP gratuito. Para as outras categorias, o serviço está disponível sob taxa adicional.' },
                        { q: 'Os quartos são pet-friendly?', a: 'No Lusso Hotel, aceitamos animais de pequeno porte (até 10kg) em categorias específicas, mediante aviso prévio.' },
                        { q: 'Posso solicitar decorações especiais?', a: 'Absolutamente. O nosso "Ritual de Boas-Vindas" é perfeito para celebrações. Contacte o nosso concierge após a reserva.' }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="faq-item-clean"
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h4>{item.q}</h4>
                            <p>{item.a}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default RoomsPage;
