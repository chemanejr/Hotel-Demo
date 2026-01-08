import { motion } from 'framer-motion';
import { MotionCarousel } from './ui/motion-carousel';

const services = [
    {
        id: 'spa',
        title: 'Centro de Spa',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 'dining',
        title: 'Alta Gastronomia',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop'
    },
    {
        id: 'workspace',
        title: 'Business Space',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    },
];

const Services = () => {
    return (
        <section
            id="services"
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
                    Experiência Imersiva
                </motion.span>
                <motion.h2
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    O Que Oferecemos
                </motion.h2>
                <motion.p
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.6, y: 0 } }}
                    className="text-lg max-w-2xl mx-auto"
                >
                    Mais do que uma estadia, uma jornada de luxo e bem-estar em todos os sentidos.
                </motion.p>
            </motion.div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{service.title}</h3>
                            <div className="w-12 h-1 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
                            <p className="text-white/60 text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Clique para explorar esta experiência exclusiva.
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
