import '../styles/scss/index.scss';
import sideNavComponent from '../components/app-shell/sideNav';
import mainShimmerComponent from '../components/common/mainShimmer';

export const app = {
	init() {
		this.mainLoader = document.querySelector('.loader-section');
		this.mainShimmerDiv = document.querySelector('.shimmers');
		this.hideMainLoader();
	},

	hideMainLoader() {
		this.mainLoader.style.display = 'none';
		this.showMainShimmer();
	},

	initCatgrySidebar() {
		setTimeout(() => {
			console.log('enabling the sidebar');
			new sideNavComponent().render();
		}, 1000);
	},

	showMainShimmer() {
		new mainShimmerComponent().render();
		this.initCatgrySidebar();
	}
};
