import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Rooms from './components/Rooms';
import Services from './components/Services';
import Footer from './components/Footer';
import PremiumHighlights from './components/PremiumHighlights';
import ServiceDetail from './components/ServiceDetail';
import Contact from './components/Contact';
import RoomsPage from './components/RoomsPage';
import LifestyleGallery from './components/LifestyleGallery';
import BookingModal from './components/BookingModal';
import ServicesPage from './components/ServicesPage';
import { BookingProvider } from './context/BookingContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import AboutSection from './components/AboutSection';
import AboutPage from './components/AboutPage';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);
    return null;
}

// Helper for Hash Scrolling
const HashScroll = () => {
    const { hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);
    return null;
}

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <HashScroll />
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <>
                        <Hero />
                        <AboutSection />
                        <Rooms />
                        <PremiumHighlights />
                        <Services />
                        <LifestyleGallery />
                        <Contact />
                    </>
                } />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/rooms" element={<RoomsPage />} />
                <Route path="/experiences" element={<ServicesPage />} />
                <Route path="/:id" element={<ServiceDetail />} />
            </Routes>
        </AnimatePresence>
    )
}

function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <BookingProvider>
                    <Router>
                        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
                            <ScrollToTop />
                            <Navbar />
                            <BookingModal />
                            <div style={{ flex: 1 }}>
                                <AnimatedRoutes />
                            </div>
                            <Footer />
                        </div>
                    </Router>
                </BookingProvider>
            </LanguageProvider>
        </ThemeProvider>
    )
}

export default App;
