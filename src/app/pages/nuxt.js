import appShellModule from '../modules/appShell';

export default {
	init() {
		console.log('welcome to nuxtjs page');
		appShellModule.initCommonShimmerCmpnt();
		// call the api
	}
};
