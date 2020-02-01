import NuxtJsModule from '../modules/nuxtjs';
import appShellModule from '../modules/appShell';

export default {
	init() {
		console.log('welcome to nuxtjs page');
		NuxtJsModule.renderDataGrid();
	}
};
