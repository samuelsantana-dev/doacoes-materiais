import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            pt: { },
            en: { },
            es: { }
        },
        lng: localStorage.getItem('i18nextLng') || 'pt',
        fallbackLng: 'pt',
        debug: false,
        ns: ['translations'],
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;