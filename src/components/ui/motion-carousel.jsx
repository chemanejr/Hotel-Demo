'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight, ChevronLeft, Wifi, AirVent, Monitor, Coffee, GlassWater, Shield } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const transition = {
    type: 'spring',
    stiffness: 240,
    damping: 24,
    mass: 1,
};

const useEmblaControls = (emblaApi) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState([]);
    const [prevDisabled, setPrevDisabled] = React.useState(true);
    const [nextDisabled, setNextDisabled] = React.useState(true);

    const onDotClick = React.useCallback(
        (index) => emblaApi?.scrollTo(index),
        [emblaApi],
    );

    const onPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const onNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const updateSelectionState = (api) => {
        setSelectedIndex(api.selectedScrollSnap());
        setPrevDisabled(!api.canScrollPrev());
        setNextDisabled(!api.canScrollNext());
    };

    const onInit = React.useCallback((api) => {
        setScrollSnaps(api.scrollSnapList());
        updateSelectionState(api);
    }, []);

    const onSelect = React.useCallback((api) => {
        updateSelectionState(api);
    }, []);

    React.useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        emblaApi.on('reInit', onInit).on('select', onSelect);

        return () => {
            emblaApi.off('reInit', onInit).off('select', onSelect);
        };
    }, [emblaApi, onInit, onSelect]);

    return {
        selectedIndex,
        scrollSnaps,
        prevDisabled,
        nextDisabled,
        onDotClick,
        onPrev,
        onNext,
    };
};

const featureIcons = {
    Wifi: <Wifi size={18} />,
    AC: <AirVent size={18} />,
    TV: <Monitor size={18} />,
    Coffee: <Coffee size={18} />,
    MiniBar: <GlassWater size={18} />,
    Safe: <Shield size={18} />
};

function MotionCarousel({ slides, options, linkBuilder, getLabel }) {
    const { isDark } = useTheme();
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const {
        selectedIndex,
        scrollSnaps,
        prevDisabled,
        nextDisabled,
        onDotClick,
        onPrev,
        onNext,
    } = useEmblaControls(emblaApi);

    return (
        <div className="w-full space-y-2 overflow-visible [--slide-height:420px] md:[--slide-height:500px] [--slide-spacing:5rem] [--slide-size:85%] md:[--slide-size:55%] lg:[--slide-size:42%]">
            <div className="relative overflow-visible">
                <div className="overflow-visible" ref={emblaRef}>
                    <div className="flex touch-pan-y touch-pinch-zoom">
                        {slides.map((room, index) => {
                            const isActive = index === selectedIndex;

                            return (
                                <motion.div
                                    key={room.id}
                                    className="h-[var(--slide-height)] mr-[var(--slide-spacing)] basis-[var(--slide-size)] flex-none flex min-w-0"
                                    style={{ perspective: '1000px' }}
                                >
                                    <motion.div
                                        className="size-full relative rounded-xl overflow-hidden shadow-2xl group"
                                        initial={false}
                                        animate={{
                                            scale: isActive ? 1 : 0.9,
                                            zIndex: isActive ? 10 : 1,
                                            filter: isActive ? 'blur(0px)' : 'blur(8px)',
                                            opacity: isActive ? 1 : 0.4
                                        }}
                                        transition={transition}
                                    >
                                        <div
                                            className="flex flex-col size-full transition-colors"
                                            style={{ backgroundColor: isDark ? '#141c2b' : '#ffffff' }}
                                        >
                                            <div
                                                className="flex-grow w-full bg-cover bg-center"
                                                style={{ backgroundImage: `url(${room.image})` }}
                                            />

                                            <div
                                                className="w-full flex-none transition-all duration-500 px-6 md:px-10"
                                                style={{
                                                    backgroundColor: isDark ? '#141c2b' : '#ffffff',
                                                    transform: 'translateY(-8px)', // Absolute minimal overlap
                                                    paddingTop: '0.75rem',
                                                    paddingBottom: '1rem',
                                                    position: 'relative',
                                                    zIndex: 10,
                                                    boxShadow: '0 -2px 10px -5px rgba(0, 0, 0, 0.1)'
                                                }}
                                            >
                                                {/* Adjusted Content Layout: Grouping Title, Line and Features */}
                                                <div className="flex justify-between items-center gap-4">
                                                    <div className="flex flex-col items-start" style={{
                                                        position: 'relative',
                                                        left: typeof window !== 'undefined' && window.innerWidth < 768 ? '19px' : '57px',
                                                        top: typeof window !== 'undefined' && window.innerWidth < 768 ? '11px' : '0px'
                                                    }}>
                                                        <h3
                                                            className={`${typeof window !== 'undefined' && window.innerWidth < 768 ? 'text-lg' : 'text-2xl'} font-bold leading-tight transition-colors`}
                                                            style={{
                                                                color: isDark ? '#ffffff' : '#111827',
                                                                marginLeft: (room.title === 'Quarto Deluxe' || room.title === 'Suíte Executiva') && (typeof window !== 'undefined' && window.innerWidth >= 768) ? '38px' : '0px'
                                                            }}
                                                        >
                                                            {room.title}
                                                        </h3>

                                                        {/* Cyan Divider Line */}
                                                        <div className="h-[2px] bg-[#229ca8] opacity-100 mt-2 mb-3 w-full" />

                                                        {/* Features row */}
                                                        {room.features && (
                                                            <div className="flex gap-4 md:gap-6 opacity-80">
                                                                {room.features.slice(0, 3).map((feat, i) => (
                                                                    <div key={i} className="flex items-center gap-1 md:gap-2">
                                                                        <span className="text-[#229ca8]" style={{ transform: typeof window !== 'undefined' && window.innerWidth < 768 ? 'scale(0.85)' : 'scale(1)' }}>{featureIcons[feat]}</span>
                                                                        <span className="text-[8px] md:text-[10px] font-bold tracking-[0.15em] uppercase text-white/70">{feat}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <motion.div
                                                        animate={isActive ? {
                                                            y: [0, -8, 0]
                                                        } : {}}
                                                        style={{
                                                            position: 'relative',
                                                            right: typeof window !== 'undefined' && window.innerWidth < 768 ? '19px' : '57px',
                                                            marginTop: typeof window !== 'undefined' && window.innerWidth < 768 ? '0.3cm' : '0px'
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        }}
                                                    >
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                const url = linkBuilder ? linkBuilder(room) : `/rooms#${room.id}`;
                                                                window.location.href = url;
                                                            }}
                                                            className="bg-[#229ca8] text-white font-bold tracking-widest shadow-lg hover:brightness-110 transition-all rounded-md whitespace-nowrap"
                                                            style={{
                                                                fontSize: typeof window !== 'undefined' && window.innerWidth < 768 ? '12.5px' : '13px',
                                                                paddingLeft: typeof window !== 'undefined' && window.innerWidth < 768 ? '1.25rem' : '2rem',
                                                                paddingRight: typeof window !== 'undefined' && window.innerWidth < 768 ? '1.25rem' : '2rem',
                                                                paddingTop: typeof window !== 'undefined' && window.innerWidth < 768 ? '0.75rem' : '0.85rem',
                                                                paddingBottom: typeof window !== 'undefined' && window.innerWidth < 768 ? '0.75rem' : '0.85rem',
                                                                display: 'inline-block',
                                                                cursor: 'pointer'
                                                            }}
                                                        >
                                                            VER MAIS
                                                        </button>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <button
                    onClick={onPrev}
                    disabled={prevDisabled}
                    className="absolute left-[2%] md:left-[10%] lg:left-[13%] top-[45%] md:top-[9rem] z-20 flex items-center justify-center w-10 h-16 rounded-md bg-[#229ca8] text-white hover:brightness-110 disabled:opacity-30 transition-all shadow-xl"
                >
                    <ChevronLeft className="size-7 stroke-[3]" />
                </button>

                <button
                    onClick={onNext}
                    disabled={nextDisabled}
                    className="absolute right-[2%] md:right-[10%] lg:right-[13%] top-[45%] md:top-[9rem] z-20 flex items-center justify-center w-10 h-16 rounded-md bg-[#229ca8] text-white hover:brightness-110 disabled:opacity-30 transition-all shadow-xl"
                >
                    <ChevronRight className="size-7 stroke-[3]" />
                </button>
            </div>

            <div className="flex justify-center items-center gap-2" style={{ marginTop: '0.75rem' }}>
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        label={getLabel ? getLabel(index) : `Slide ${index + 1}`}
                        selected={index === selectedIndex}
                        onClick={() => onDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}

function DotButton({ selected = false, onClick }) {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            layout
            initial={false}
            className="flex cursor-pointer select-none items-center justify-center rounded-full border-none bg-[#229ca8]"
            animate={{
                width: selected ? 14 : 10,
                height: selected ? 14 : 10,
                opacity: selected ? 1 : 0.2
            }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20
            }}
        />
    );
}

export { MotionCarousel };
