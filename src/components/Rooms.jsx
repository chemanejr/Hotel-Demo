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
            className="min-h-screen w-full py-24 px-6 md:px-12 lg:px-20 bg-[var(--color-bg)] relative scroll-mt-24"
        >
            <motion.div
                className="max-w-7xl mx-auto mb-16 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.15 }
                    }
                }}
            >
                <motion.span
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"
                >
                    Exclusividade & Conforto
                </motion.span>
                <motion.h2
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Nossos Quartos
                </motion.h2>
                <motion.p
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.6, y: 0 } }}
                    className="text-lg max-w-2xl mx-auto"
                >
                    Onde o design encontra o descanso absoluto em cada detalhe.
                </motion.p>
            </motion.div>

            <div className="max-w-7xl mx-auto">
                <MotionCarousel
                    slides={rooms}
                    options={{ loop: true, align: 'center' }}
                    linkBuilder={(room) => `/rooms#${room.id}`}
                />
            </div>
        </section>
    );
};

export default Rooms;
