/* Js above the fold */
require('./myfont.font.js');
import polyfills from './polyfills';
import { runApp } from './scripts/app';

Promise.all(polyfills).then(runApp).catch((error) => {
	console.error('Failed fetching polyfills', error);
});
