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
                    O Que Oferecemos
                </motion.h2>
                <motion.p
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 0.6, y: 0 } }}
                    className="section-subtitle mt-0"
                    style={{ fontSize: '1.2rem' }}
                >
                    Mais do que uma estadia, uma imersão.
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
                    slides={[...services, ...services]}
                    options={{ loop: true, align: 'center' }}
                    linkBuilder={() => '/experiences'}
                    getLabel={(index) => services[index % services.length].title}
                />
            </motion.div>
        </section>
    );
};

export default Services;
