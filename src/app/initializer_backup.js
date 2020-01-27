import '../styles/scss/index.scss';
import sideNavComponent from '../components/app-shell/sideNav';
import mainShimmerComponent from '../components/common/commonshimmer';
import mainCardGridLayoutComponent from '../components/common/content-grid-layout/contentGridLayout';
import router from './router';

export const app = {
	init() {
		this.mainLoader = document.querySelector('.loader-section');
		this.mainShimmerDiv = document.querySelector('.shimmers');
		this.bodyDom = document.querySelector('body');
		router.initRouterConfig();
		this.hideMainLoader();
	},

	hideMainLoader() {
		setTimeout(() => {
			console.log(
				'hiding the loader, should call the API to retreive the data or you can intiate the routes, inside which u can call the api'
			);
			// this.mainLoader.classList.toggle('hidden')
			this.showMainShimmer();
			this.mainLoader.style.display = 'none';
		}, 500);
	},

	initCatgrySidebar() {
		setTimeout(() => {
			console.log('enabling the sidebar');
			new sideNavComponent().render();
		}, 1000);
	},

	showMainShimmer() {
		new mainShimmerComponent().render();
		// call the api, for morphing used settimeout
		setTimeout(() => {
			this.bodyDom.classList.toggle('overflow-y-hidden');
			new mainCardGridLayoutComponent().render();
		}, 8000);
		this.initCatgrySidebar();
	}
};
