// Utility to trigger the booking modal via Window Events
// This avoids React Context dependency issues in components that cause crashes.

export const triggerBooking = (data = null) => {
    const event = new CustomEvent('open-booking-modal', { detail: data });
    window.dispatchEvent(event);
    console.log('Booking Event Dispatched', data);
};
