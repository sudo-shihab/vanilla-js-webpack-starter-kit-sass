/* Js above the fold */
require('./myfont.font.js');
import polyfills from './polyfills';
import { runApp } from './scripts/app';

import lazyLoadInit from './scripts/lazyLoadConfig';
lazyLoadInit();

Promise.all(polyfills).then(runApp).catch((error) => {
	console.error('Failed fetching polyfills', error);
});
