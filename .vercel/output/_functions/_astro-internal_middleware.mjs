import { d as defineMiddleware, s as sequence } from './chunks/index_CjXSaVQz.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_4P3auflu.mjs';
import 'piccolore';
import './chunks/astro/server_CH_ZUc5U.mjs';
import 'clsx';

const languages = ["es", "en"];
const onRequest$1 = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;
  if (pathname === "/") {
    return next();
  }
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  if (languages.includes(firstSegment)) {
    return next();
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
