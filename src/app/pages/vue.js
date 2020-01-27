import appShellModule from '../modules/appShell';

export default {
	init() {
		console.log('welcome to vue page');
		appShellModule.initCommonShimmerCmpnt();
		// call the api
	}
};
