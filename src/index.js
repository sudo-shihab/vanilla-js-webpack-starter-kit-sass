/* Js above the fold */
require('./myfont.font.js');
import polyfills from './polyfills';

import { app } from './scripts/app';
import lazyLoadInit from './scripts/lazyLoadConfig';

lazyLoadInit();

window.addEventListener('load', (event) => {
	console.log('document ready to init app');
	Promise.all(polyfills)
		.then((polyfillResPromiseObj) => {
			console.log('polyfills added', polyfillResPromiseObj);
			app.init();
		})
		.catch((error) => {
			console.error('Failed fetching polyfills', error);
		});
});
