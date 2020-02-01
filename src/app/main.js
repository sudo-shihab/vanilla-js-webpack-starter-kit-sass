import '../styles/scss/index.scss';
import router from './router';
import appShellModule from './modules/appShell';
import { attachUsrConnStatusEvnt } from '../userAgent';

export const app = {
	run() {
		// init app level prerequsisst here
		this.initAppShellComponents();
		router.initRouterConfig();
		attachUsrConnStatusEvnt();
	},

	initAppShellComponents() {
		console.log('app shell initialized');
		setTimeout(() => {
			appShellModule.initCatgrySidebarCmpnt();
		}, 1000);
		appShellModule.hideMainLoaderDiv();
		appShellModule.initCommonShimmerCmpnt();
	}
};
