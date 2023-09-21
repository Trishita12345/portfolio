import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import common_en from './translation/en/english.json'
import common_fr from './translation/fr/french.json'

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
    en: {
      common: common_en               // 'common' is our custom namespace
    },
    fr: {
      common: common_fr
    }
  },
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

