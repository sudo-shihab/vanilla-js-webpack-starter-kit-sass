import '../styles/scss/index.scss';
import router from './router';
import appShellModule from './modules/appShell';

export const app = {
	init() {
		// init app level prerequsisst here
		this.initAppShellComponents();
		router.initRouterConfig();
	},

	initAppShellComponents() {
		console.log('app shell initialized');
		appShellModule.initCatgrySidebarCmpnt();
		appShellModule.hideMainLoaderDiv();
	}
};
