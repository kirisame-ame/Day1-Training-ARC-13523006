import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Import translation files directly
import en from "../public/locales/en/translation.json";
import id from "../public/locales/id/translation.json";
import ja from "../public/locales/ja/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    resources: {
      en: {
        translation: en,
      },
      id: {
        translation: id,
      },
      ja: {
        translation: ja,
      },
    },
  });

export default i18n;
