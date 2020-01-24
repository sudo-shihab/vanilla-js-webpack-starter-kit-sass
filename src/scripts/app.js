import '../styles/scss/index.scss';
import sideNavComponent from '../components/app-shell/sideNav';

export const app = {
	init() {
		this.mainLoader = document.querySelector('.loader-section');
		this.mainShimmerDiv = document.querySelector('.shimmers');

		this.initCatgrySidebar();
	},

	hideMainLoader() {
		this.mainLoader.style.display = 'none';
		this.showMainShimmer();
	},

	initCatgrySidebar() {
		setTimeout(() => {
			console.log('enabling the sidebar');
			new sideNavComponent().render();
			this.hideMainLoader();
		}, 2000);
	},

	showMainShimmer() {
		this.mainShimmerDiv.innerHTML = '<h3>Shimmers Injected </h3>';
	}
};
