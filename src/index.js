/* Js above the fold */
require('./myfont.font.js');
import polyfills from './polyfills';
import UserAgent from './userAgent';

import { app } from './app/main';

// initialize the lazyload plugin before onload event

window.addEventListener('load', (event) => {
	console.log('initial document resources loaded');

	if (UserAgent.isOnline()) {
		Promise.all(polyfills)
			.then((polyfillResPromiseObj) => {
				console.log('polyfills added are', polyfillResPromiseObj);
				app.run();
			})
			.catch((error) => {
				console.error('Failed fetching polyfills', error);
			});
	} else {
		// valid in case of PWA or service worker in place
		console.log('seems that you are offline, please check your connection');
		// add the component into index.html main top banner to post an information about app running in the offline mode
	}
});
