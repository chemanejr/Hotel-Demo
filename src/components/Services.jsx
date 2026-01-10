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
            className="min-h-screen w-full px-6 md:px-12 lg:px-20 bg-[var(--color-bg)] relative scroll-mt-24"
            style={{ padding: '160px 0' }}
        >
            <motion.div
                className="max-w-7xl mx-auto mb-20 md:mb-32 text-center"
                style={{
                    transform: typeof window !== 'undefined' && window.innerWidth >= 1024
                        ? 'translate(152px, -76px)'
                        : 'translateY(calc(-38px + 0.1cm))'
                }}
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
                    className="text-4xl md:text-3xl lg:text-5xl font-bold mb-1 tracking-tight"
                >
                    O Que Oferecemos
                </motion.h2>
                <motion.p
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.5, y: 0 } }}
                    className="text-lg md:text-xl max-w-2xl mx-auto font-medium md:translate-x-[8.25cm] translate-y-[-0.05cm] md:translate-y-[0.15cm]"
                >
                    Uma jornada de luxo e bem-estar.
                </motion.p>
            </motion.div>

            <div
                className="w-full overflow-visible"
                style={{
                    transform: typeof window !== 'undefined' && window.innerWidth >= 1024
                        ? 'translate(152px, -62px)'
                        : 'translateY(-20px)'
                }}
            >
                <div className="max-w-7xl mx-auto overflow-visible">
                    <MotionCarousel
                        slides={services}
                        options={{
                            loop: true,
                            align: 'center',
                            containScroll: false
                        }}
                        linkBuilder={(service) => `/${service.id}`}
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
