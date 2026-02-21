# Sistema de Internacionalización (i18n)

Este proyecto implementa un sistema completo de internacionalización que soporta múltiples idiomas (actualmente: español e inglés).

## Estructura

```
src/i18n/
  ├── ui.ts      # Diccionario de traducciones
  ├── utils.ts   # Funciones de utilidad del i18n
```

## 📝 Agregar nuevas traducciones

En `src/i18n/ui.ts`:

```typescript
export const ui = {
  es: {
    'mi.clave': 'Mi texto en español',
    'nav.inicio': 'Inicio',
    // Agregar más claves aquí
  },
  en: {
    'mi.clave': 'My English text',
    'nav.inicio': 'Home',
    // Agregar más claves aquí
  },
} as const;
```

## 🔧 Usar traducciones en componentes

### En componentes Astro:

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t('hero.title')}</h1>
<p>{t('hero.subtitle')}</p>
```

### En componentes React:

```tsx
import { useContext } from 'react';

export function MyComponent({ lang }) {
  const t = useTranslations(lang);
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
    </div>
  );
}
```

## 🌍 Rutas multiidioma

Las rutas funcionan así:
- `/` - Página en español (idioma por defecto)
- `/en/` - Página en inglés
- `/en/proyectos` - Sección de proyectos en inglés

## 🔄 Cambiar de idioma

El componente `LanguageToggle` proporciona un selector de idioma. Puedes usarlo en cualquier parte:

```astro
<LanguageToggle />
```

El selector automáticamente:
- Detecta el idioma actual
- Muestra las opciones disponibles
- Navega a la URL correcta del idioma seleccionado

## 📱 Funciones disponibles

### `getLangFromUrl(url: URL): Language`
Obtiene el idioma actual desde la URL.

```astro
const lang = getLangFromUrl(Astro.url);
```

### `useTranslations(lang: Language): (key: string) => string`
Retorna una función para traducir claves.

```astro
const t = useTranslations(lang);
const titulo = t('hero.title');
```

### `getPathByLang(path: string, lang: Language): string`
Obtiene la ruta correcta para un idioma específico.

```typescript
const urlEn = getPathByLang('/proyectos', 'en'); // /en/proyectos
const urlEs = getPathByLang('/proyectos', 'es'); // /proyectos
```

### `getLanguages(): string[]`
Lista todos los idiomas disponibles.

```typescript
const languages = getLanguages(); // ['es', 'en']
```

### `getLanguageName(lang: Language): string`
Obtiene el nombre del idioma en ese idioma.

```typescript
getLanguageName('es'); // 'Español'
getLanguageName('en'); // 'English'
```

## 🎯 Agregar un nuevo idioma

1. Agrega la traducción en `src/i18n/ui.ts`:

```typescript
export const languages = {
  es: 'Español',
  en: 'English',
  fr: 'Français', // Nuevo idioma
};

export const ui = {
  es: { /* ... */ },
  en: { /* ... */ },
  fr: {
    'hero.title': 'Construire des solutions',
    // Agregar todas las claves
  },
};
```

2. Actualiza el middleware en `src/middleware.ts`:

```typescript
const languages = ["es", "en", "fr"]; // Agregar nuevo idioma
```

3. Crea una página en `src/pages/fr/index.astro`

## 💾 Almacenamiento de idioma

El idioma se detecta automáticamente de la URL, pero también puedes almacenar la preferencia del usuario:

```typescript
import { getStoredLanguage, setStoredLanguage } from '../i18n/utils';

// Obtener idioma guardado
const saved = getStoredLanguage();

// Guardar preferencia
setStoredLanguage('en');
```

## 📝 Notas importantes

- El idioma por defecto es **español** (`es`)
- El idioma se detecta de la URL, no de la configuración del navegador
- Las traducciones faltantes regresan a la clave misma
- El atributo `lang` del HTML se actualiza automáticamente
