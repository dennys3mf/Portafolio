import { ui, languages, defaultLanguage } from './ui';

export type Language = keyof typeof ui;

/**
 * Obtiene el idioma de la URL
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Language;
  return defaultLanguage as Language;
}

/**
 * Hook de traducción para componentes
 */
export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const value = ui[lang][key as keyof typeof ui[Language]];
    if (value) return value;
    return ui[defaultLanguage as Language][key as keyof typeof ui[Language]] || key;
  };
}

/**
 * Obtiene el idioma almacenado en localStorage
 */
export function getStoredLanguage(): Language | null {
  if (typeof localStorage === 'undefined') return null;
  const stored = localStorage.getItem('language');
  if (stored && stored in ui) return stored as Language;
  return null;
}

/**
 * Guarda el idioma en localStorage
 */
export function setStoredLanguage(lang: Language): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem('language', lang);
}

/**
 * Obtiene la URL para un idioma específico
 */
export function getPathByLang(path: string, lang: Language): string {
  if (lang === defaultLanguage) {
    return path.startsWith('/') ? path : `/${path}`;
  }
  return `/${lang}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Hook para traducir rutas basadas en el idioma actual
 */
export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, targetLang: Language = lang): string {
    return getPathByLang(path, targetLang);
  };
}

/**
 * Lista todos los idiomas disponibles
 */
export function getLanguages() {
  return Object.keys(ui);
}

/**
 * Obtiene el nombre del idioma
 */
export function getLanguageName(lang: Language): string {
  return languages[lang];
}