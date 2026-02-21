import { d as defineMiddleware, s as sequence } from './chunks/index_CjXSaVQz.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_4P3auflu.mjs';
import 'piccolore';
import './chunks/astro/server_CH_ZUc5U.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware((context, next) => {
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
