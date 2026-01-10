import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
    pt: {
        nav: {
            home: 'Início',
            about: 'Sobre Nós',
            rooms: 'Quartos',
            experiences: 'Experiências',
            contact: 'Contactos',
            book: 'Reservar Agora'
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
            title: 'A Arquitetura da Serenidade',
            desc: 'No Lusso Futura, a tecnologia é invisível e o conforto é absoluto. Combinamos inovação de vanguarda com um design orgânico para criar espaços que convidam à desconexão e à celebração do momento presente.',
            cta: 'VER MAIS SOBRE NÓS'
        },
        availability: {
            title: 'DISPONIBILIDADE REAL',
            remaining: 'restantes',
            standard: 'Quarto Standard',
            deluxe: 'Quarto Deluxe',
            executive: 'Suíte Executiva',
            presidential: 'Suíte Presidencial'
        },
        testimonials: {
            title: 'O QUE DIZEM DE NÓS'
        },
        contact: {
            title: 'CONTACTOS'
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
            title: 'The Architecture of Serenity',
            desc: 'At Lusso Futura, technology is invisible and comfort is absolute. We combine cutting-edge innovation with organic design to create spaces that invite disconnection and the celebration of the present moment.',
            cta: 'LEARN MORE ABOUT US'
        },
        availability: {
            title: 'REAL-TIME AVAILABILITY',
            remaining: 'left',
            standard: 'Standard Room',
            deluxe: 'Deluxe Room',
            executive: 'Executive Suite',
            presidential: 'Presidential Suite'
        },
        testimonials: {
            title: 'WHAT OUR GUESTS SAY'
        },
        contact: {
            title: 'CONTACT'
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
            title: 'L\'Architecture de la Sérénité',
            desc: 'Au Lusso Futura, la technologie est invisible et le confort est absolu. Nous combinons l\'innovation de pointe avec un design organique pour créer des espaces qui invitent à la déconnexion et à la célébration do moment présent.',
            cta: 'EN SAVOIR PLUS'
        },
        availability: {
            title: 'DISPONIBILITÉ RÉELLE',
            remaining: 'restants',
            standard: 'Chambre Standard',
            deluxe: 'Chambre Deluxe',
            executive: 'Suite Exécutive',
            presidential: 'Suite Présidentielle'
        },
        testimonials: {
            title: 'CE QUE DISENT NOS CLIENTS'
        },
        contact: {
            title: 'CONTACT'
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
