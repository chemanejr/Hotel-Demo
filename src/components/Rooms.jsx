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

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {rooms.map((room, idx) => (
                    <motion.div
                        key={room.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative flex flex-col bg-slate-900/50 dark:bg-slate-800/50 rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-xl"
                    >
                        {/* Image Container */}
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src={room.image}
                                alt={room.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold">{room.title}</h3>
                                <span className="text-primary font-bold text-sm tracking-tighter">{room.price.split(' ')[0]}</span>
                            </div>

                            <div className="flex gap-4 mb-6 opacity-60">
                                {room.features.map(f => (
                                    <span key={f} className="text-[10px] uppercase font-bold tracking-widest">{f}</span>
                                ))}
                            </div>

                            <button
                                onClick={() => window.location.href = `/rooms#${room.id}`}
                                className="mt-auto w-full py-4 bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 active:scale-95"
                            >
                                Detalhes do Quarto
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Rooms;
