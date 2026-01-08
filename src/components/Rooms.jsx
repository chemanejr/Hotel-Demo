import { motion } from 'framer-motion';
import { MotionCarousel } from './ui/motion-carousel';

const rooms = [
    {
        id: 'standard',
        title: 'Quarto Standard',
        size: '30m²',
        bed: '1 King / 2 Twin',
        price: '350€ / noite',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
        features: ['Wifi', 'AC', 'TV']
    },
    {
        id: 'deluxe',
        title: 'Quarto Deluxe',
        size: '45m²',
        bed: '1 Cama King',
        price: '500€ / noite',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop',
        features: ['Wifi', 'AC', 'MiniBar']
    },
    {
        id: 'executive',
        title: 'Suíte Executiva',
        size: '60m²',
        bed: '1 King + Sofá',
        price: '750€ / noite',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop',
        features: ['Wifi', 'AC', 'Coffee']
    },
    {
        id: 'presidential',
        title: 'Suíte Presidencial',
        size: '120m²',
        bed: '1 Cama Emperor',
        price: '1500€ / noite',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop',
        features: ['Wifi', 'AC', 'Safe']
    }
];

const Rooms = () => {
    return (
        <section
            id="rooms"
            style={{
                height: '100vh',
                width: '100%',
                overflow: 'hidden',
                paddingTop: '20vh',
                paddingLeft: '5%',
                paddingRight: '5%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative',
                background: 'var(--color-bg)',
                scrollMarginTop: '100px'
            }}
        >
            <motion.div
                className="section-header relative z-10"
                style={{ textAlign: 'center', marginBottom: '2vh', height: '10vh', flexShrink: 0 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15
                        }
                    }
                }}
            >
                <motion.h2
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    className="section-title text-4xl md:text-5xl"
                    style={{ color: 'inherit', margin: 0 }}
                >
                    Quartos
                </motion.h2>
                <motion.p
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.6, y: 0 } }}
                    className="section-subtitle mt-0"
                    style={{ fontSize: '1.2rem' }}
                >
                    Onde o design encontra o descanso absoluto.
                </motion.p>
            </motion.div>

            <motion.div
                className="rooms-carousel-wrapper"
                style={{ padding: '0 1rem', width: '100%', '--slide-height': '45vh', flexShrink: 0 }}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, delay: 0.1 }}
            >
                <MotionCarousel
                    slides={rooms}
                    options={{ loop: true, align: 'center' }}
                    linkBuilder={() => '/rooms'}
                    getLabel={(index) => `Quarto ${index + 1}`}
                />
            </motion.div>
        </section>
    );
};

export default Rooms;
