import HomePageModule from '../modules/home';

// needs refactoring
export default {
	init() {
		console.log('home page initiated');
		HomePageModule.renderGridComponent();
	}
};
