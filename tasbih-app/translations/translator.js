import i18n from 'i18n-js';
import * as Localization from 'expo-localization';

// IMPORT APP LANGUAGS 
import ar from '../translations/langs/ar.js';
import en from '../translations/langs/en.js';

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale; 

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;



i18n.translations ={
    en,
    ar
};


export default i18n;