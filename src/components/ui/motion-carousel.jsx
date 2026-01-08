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
        <div className="w-full space-y-4 [--slide-height:450px] [--slide-spacing:1rem] [--slide-size:80%] md:[--slide-size:50%] lg:[--slide-size:40%]">
            <div className="relative">
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
                                        className="size-full relative rounded-xl overflow-hidden shadow-2xl border border-white/10 dark:border-white/20 bg-white dark:bg-gray-900 group"
                                        initial={false}
                                        animate={{
                                            scale: isActive ? 1 : 0.85,
                                            zIndex: isActive ? 10 : 0,
                                            filter: isActive ? 'blur(0px)' : 'blur(4px)',
                                            opacity: isActive ? 1 : 0.5
                                        }}
                                        transition={transition}
                                    >
                                        <div
                                            className="flex flex-col size-full transition-colors"
                                            style={{ backgroundColor: isDark ? '#1f2937' : '#ffffff' }}
                                        >
                                            <div
                                                className="flex-grow w-full bg-cover bg-center"
                                                style={{ backgroundImage: `url(${room.image})` }}
                                            />

                                            <div
                                                className="w-full flex-none transition-colors px-6 md:px-12 py-3"
                                                style={{
                                                    backgroundColor: isDark ? '#1f2937' : '#ffffff'
                                                }}
                                            >
                                                {/* Top Content: Title + Line and Button */}
                                                <div className="flex justify-between items-center gap-4">
                                                    <div className="space-y-2">
                                                        <h3
                                                            className="text-2xl font-bold leading-tight transition-colors"
                                                            style={{ color: isDark ? '#f3f4f6' : '#111827' }}
                                                        >
                                                            {room.title}
                                                        </h3>
                                                        <div className="h-[3px] w-full bg-cyan-700" />
                                                    </div>

                                                    <motion.div
                                                        animate={isActive ? {
                                                            y: [0, -8, 0]
                                                        } : {}}
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
                                                            className="bg-[#1a9cb0] text-white font-bold text-sm tracking-widest shadow-md hover:bg-[#158a9c] transition-colors rounded whitespace-nowrap"
                                                            style={{
                                                                paddingLeft: '2rem',
                                                                paddingRight: '2rem',
                                                                paddingTop: '0.75rem',
                                                                paddingBottom: '0.75rem',
                                                                display: 'inline-block',
                                                                cursor: 'pointer'
                                                            }}
                                                        >
                                                            VER MAIS
                                                        </button>
                                                    </motion.div>
                                                </div>

                                                {/* Features row */}
                                                {room.features && (
                                                    <div className="flex gap-6 opacity-60">
                                                        {room.features.slice(0, 3).map((feat, i) => (
                                                            <div key={i} className="flex items-center gap-2">
                                                                <span style={{ color: 'var(--color-primary)' }}>{featureIcons[feat]}</span>
                                                                <span className="text-[10px] font-bold tracking-[0.15em] uppercase">{feat}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-20 rounded-md bg-[#1a9cb0] text-white hover:bg-[#158a9c] disabled:opacity-30 transition-colors shadow-lg"
                >
                    <ChevronLeft className="size-7" />
                </button>

                <button
                    onClick={onNext}
                    disabled={nextDisabled}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-20 rounded-md bg-[#1a9cb0] text-white hover:bg-[#158a9c] disabled:opacity-30 transition-colors shadow-lg"
                >
                    <ChevronRight className="size-7" />
                </button>
            </div>

            <div className="flex justify-center items-center gap-2" style={{ marginTop: '1.5rem' }}>
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
            className="flex cursor-pointer select-none items-center justify-center rounded-full border-none bg-[#1a9cb0]"
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
