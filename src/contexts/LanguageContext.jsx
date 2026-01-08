import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
    pt: {
        nav: {
            home: 'Início',
            about: 'Sobre Nós',
            rooms: 'Quartos',
            experiences: 'Experiências',
            contact: 'Contactos',
            book: 'Reservar'
        },
        hero: {
            welcome: 'BEM-VINDO AO FUTURO',
            title: 'LUSSO FUTURA',
            subtitle: 'A convergência perfeita entre luxo, tecnologia e conforto absoluto.',
            cta_book: 'RESERVAR AGORA',
            cta_rooms: 'VER QUARTOS'
        },
        about: {
            pre: 'A NOSSA ESSÊNCIA',
            title: 'Onde o Futuro encontra o Legado',
            desc: 'O Lusso Futura não é apenas um hotel; é um manifesto arquitetónico sobre como a tecnologia pode elevar a experiência humana sem perder o calor da hospitalidade tradicional.',
            cta: 'VER MAIS SOBRE NÓS'
        },
        availability: {
            title: 'DISPONIBILIDADE REAL',
            remaining: 'restantes',
            standard: 'Quarto Standard',
            deluxe: 'Quarto Deluxe',
            executive: 'Suíte Executiva',
            presidential: 'Suíte Presidencial'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About Us',
            rooms: 'Rooms',
            experiences: 'Experiences',
            contact: 'Contact',
            book: 'Book Now'
        },
        hero: {
            welcome: 'WELCOME TO THE FUTURE',
            title: 'LUSSO FUTURA',
            subtitle: 'The perfect convergence of luxury, technology, and absolute comfort.',
            cta_book: 'BOOK NOW',
            cta_rooms: 'VIEW ROOMS'
        },
        about: {
            pre: 'OUR ESSENCE',
            title: 'Where Future meets Legacy',
            desc: 'Lusso Futura is not just a hotel; it is an architectural manifesto on how technology can elevate the human experience without losing the warmth of traditional hospitality.',
            cta: 'LEARN MORE ABOUT US'
        },
        availability: {
            title: 'REAL-TIME AVAILABILITY',
            remaining: 'left',
            standard: 'Standard Room',
            deluxe: 'Deluxe Room',
            executive: 'Executive Suite',
            presidential: 'Presidential Suite'
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            about: 'À Propos',
            rooms: 'Chambres',
            experiences: 'Expériences',
            contact: 'Contact',
            book: 'Réserver'
        },
        hero: {
            welcome: 'BIENVENU AU FUTUR',
            title: 'LUSSO FUTURA',
            subtitle: 'La convergence parfaite entre luxe, technologie et confort absolu.',
            cta_book: 'RÉSERVER MAINTENANT',
            cta_rooms: 'VOIR LES CHAMBRES'
        },
        about: {
            pre: 'NOTRE ESSENCE',
            title: 'Où le futur rencontre l\'héritage',
            desc: 'Lusso Futura n\'est pas seulement un hôtel ; c\'est un manifeste architectural sur la façon dont la technologie peut élever l\'expérience humaine sans perdre la chaleur de l\'hospitalité traditionnelle.',
            cta: 'EN SAVOIR PLUS'
        },
        availability: {
            title: 'DISPONIBILITÉ RÉELLE',
            remaining: 'restants',
            standard: 'Chambre Standard',
            deluxe: 'Chambre Deluxe',
            executive: 'Suite Exécutive',
            presidential: 'Suite Présidentielle'
        }
    }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('lusso-lang') || 'pt');

    useEffect(() => {
        localStorage.setItem('lusso-lang', language);
    }, [language]);

    const t = (path) => {
        const keys = path.split('.');
        let current = translations[language];
        for (const key of keys) {
            if (current[key]) {
                current = current[key];
            } else {
                return path;
            }
        }
        return current;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
