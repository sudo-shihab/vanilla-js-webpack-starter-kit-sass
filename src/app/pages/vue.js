import VuePageModule from '../modules/vuejs';

export default {
	init() {
		console.log('welcome to vue page');
		VuePageModule.renderGridComponent();
		// call the api
	}
};
