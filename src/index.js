/* Js above the fold */
require('./myfont.font.js');
import polyfills from './polyfills';

import { app } from './app/main';

// initialize the lazyload plugin before onload event

window.addEventListener('load', (event) => {
	console.log('document ready to init app');
	Promise.all(polyfills)
		.then((polyfillResPromiseObj) => {
			console.log('polyfills added are', polyfillResPromiseObj);
			app.run();
		})
		.catch((error) => {
			console.error('Failed fetching polyfills', error);
		});
});
