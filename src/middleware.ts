import { defineMiddleware } from "astro:middleware";

const languages = ["es", "en"];
const defaultLanguage = "es";

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;
  
  // Si está en raíz, añadir el idioma por defecto
  if (pathname === "/") {
    return next();
  }

  // Verificar si la ruta comienza con un idioma válido
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (languages.includes(firstSegment)) {
    // La ruta tiene un idioma válido, continuar normalmente
    return next();
  }

  // Si no tiene idioma, continuar (se maneja en la app)
  return next();
});
