import { motion } from 'framer-motion';
import { MotionCarousel } from './ui/motion-carousel';
import { useLanguage } from '../contexts/LanguageContext';

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
    const { t } = useLanguage();
    return (
        <section
            id="rooms"
            className="min-h-screen w-full px-6 md:px-12 lg:px-20 bg-[var(--color-bg)] relative scroll-mt-24 flex flex-col justify-center overflow-hidden"
            style={{
                paddingTop: typeof window !== 'undefined' && window.innerWidth < 768 ? '60px' : '110px',
                paddingBottom: '20px'
            }}
        >
            <motion.div
                className="max-w-7xl mx-auto mb-12 md:mb-16 text-center -translate-y-[38px] md:translate-x-[76px] md:-translate-y-[76px]"
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
                <motion.h2
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    className="text-4xl md:text-5xl font-bold mb-1 tracking-tight"
                >
                    {t('nav.rooms')}
                </motion.h2>
                <motion.p
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.5, y: 0 } }}
                    className="text-lg md:text-xl max-w-2xl mx-auto font-medium md:relative md:left-[314px] md:top-[3px]"
                >
                    Onde o design encontra o descanso absoluto.
                </motion.p>
            </motion.div>

            <div className="max-w-7xl mx-auto md:translate-x-[76px] -translate-y-[20px] md:-translate-y-[62px]">
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
