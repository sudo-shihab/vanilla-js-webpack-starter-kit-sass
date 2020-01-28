import NuxtJsModule from '../modules/nuxtjs';

export default {
	init() {
		console.log('welcome to nuxtjs page');
		NuxtJsModule.renderGridComponent();
		// call the api
	}
};
