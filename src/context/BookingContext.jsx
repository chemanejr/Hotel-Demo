import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext({
    isOpen: false,
    prefillData: null,
    openBooking: () => console.log('Booking Context Default Open'),
    closeBooking: () => console.log('Booking Context Default Close')
});

export const BookingProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [prefillData, setPrefillData] = useState(null); // e.g. { roomType: 'Deluxe' }

    const openBooking = (data = null) => {
        setPrefillData(data);
        setIsOpen(true);
    };

    const closeBooking = () => {
        setIsOpen(false);
        setPrefillData(null);
    };

    // Event Listener for robust triggering
    React.useEffect(() => {
        const handleEvent = (e) => {
            console.log('Booking Event Received', e.detail);
            openBooking(e.detail);
        };
        window.addEventListener('open-booking-modal', handleEvent);
        return () => window.removeEventListener('open-booking-modal', handleEvent);
    }, []);

    return (
        <BookingContext.Provider value={{ isOpen, prefillData, openBooking, closeBooking }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        console.error("BookingContext is undefined - returning safe fallback");
        return {
            isOpen: false,
            openBooking: () => console.log('SAFE FALLBACK: Open Booking'),
            closeBooking: () => console.log('SAFE FALLBACK: Close Booking')
        };
    }
    return context;
};
