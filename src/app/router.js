import Navigo from 'navigo';
import { ROUTE_NOUNS } from './common-configs/Constants';
import homePageExe from './pages/home';
import vuejsPageExe from './pages/vue';
import nuxtjsPageExe from './pages/nuxt';
import gridsomePageExe from './pages/gridsome';

/** router setting  */
let root = null;
let useHash = true; // Defaults to: false
let hash = '#'; // Defaults to: '#'
const router = new Navigo(root, useHash, hash);
import appShellModule from './modules/appShell';

export default {
	initRouterConfig() {
		router
			.on(
				ROUTE_NOUNS.HOME_FEEDS,
				function() {
					// show home page here
					homePageExe.init();
				},
				{
					before: function(done, params) {
						// doing some async operation
						appShellModule.showCommonShimmerDiv();
						done();
					},
					after: function(params) {
						// after resolving
						setTimeout(() => {
							appShellModule.hideCommonShimmerDiv();
						}, 3000);
					},
					leave: function(params) {
						// when you are going out of the that route
						appShellModule.hideCommonShimmerDiv();
					}
				}
			)
			.on(
				ROUTE_NOUNS.VUE_FEEDS,
				() => {
					vuejsPageExe.init();
				},
				{
					before: function(done, params) {
						// doing some async operation
						appShellModule.showCommonShimmerDiv();
						done();
					},
					after: function(params) {
						// after resolving
						setTimeout(() => {
							appShellModule.hideCommonShimmerDiv();
						}, 3000);
					},
					leave: function(params) {
						// when you are going out of the that route
						appShellModule.hideCommonShimmerDiv();
					}
				}
			)
			.on(
				ROUTE_NOUNS.NUXT_FEEDS,
				() => {
					nuxtjsPageExe.init();
				},
				{
					before: function(done, params) {
						// doing some async operation
						appShellModule.showCommonShimmerDiv();
						done();
					},
					after: function(params) {
						// after resolving
						setTimeout(() => {
							appShellModule.hideCommonShimmerDiv();
						}, 3000);
					},
					leave: function(params) {
						// when you are going out of the that route
						appShellModule.hideCommonShimmerDiv();
					}
				}
			)
			.on(
				ROUTE_NOUNS.GRIDSOME_FEEDS,
				() => {
					gridsomePageExe.init();
				},
				{
					before: function(done, params) {
						// doing some async operation
						appShellModule.showCommonShimmerDiv();
						done();
					},
					after: function(params) {
						// after resolving
						setTimeout(() => {
							appShellModule.hideCommonShimmerDiv();
						}, 3000);
					},
					leave: function(params) {
						// when you are going out of the that route
						appShellModule.hideCommonShimmerDiv();
					}
				}
			)
			.on(
				'*',
				() => {
					console.warn('no such route exsit, redirecting to main route');
					this.loadInitalRoute();
				},
				{
					before: function(done, params) {
						// doing some async operation
						appShellModule.showCommonShimmerDiv();
						done();
					},
					after: function(params) {
						// after resolving
						setTimeout(() => {
							appShellModule.hideCommonShimmerDiv();
						}, 3000);
					},
					leave: function(params) {
						// when you are going out of the that route
						appShellModule.hideCommonShimmerDiv();
					}
				}
			)
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
