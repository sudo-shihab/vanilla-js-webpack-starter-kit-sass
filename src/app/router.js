import Navigo from 'navigo';
import homePageExe from './pages/home';
import vuejsPageExe from './pages/vue';
import nuxtjsPageExe from './pages/nuxt';

/** router setting  */
let root = null;
let useHash = true; // Defaults to: false
let hash = '#'; // Defaults to: '#'
const router = new Navigo(root, useHash, hash);

export default {
	initRouterConfig() {
		router
			.on('/home', function() {
				// show home page here
				homePageExe.init();
			})
			.on('/vuejs', () => {
				vuejsPageExe.init();
			})
			.on('/nuxtjs', () => {
				nuxtjsPageExe.init();
			})
			.on('*', () => {
				console.warn('no such route exsit, redirecting to main route');
				this.loadInitalRoute();
			})
			.resolve();
	},

	loadInitalRoute() {
		this.forceNavigate('/home');
	},

	forceNavigate(hashPath) {
		if (typeof hashPath === 'string') {
			router.navigate(hashPath);
			return 1;
		}

		console.error('pass the hashPath as a string');
		return 0;
	}
};

// example --> http://localhost:8080/#/nuxtjs
// force navigate --> router.forceNavigate().navigate('/nuxtjs');
