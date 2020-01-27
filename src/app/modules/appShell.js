import mainShimmerComponent from '../components/common/commonshimmer';
import sideNavComponent from '../components/app-shell/sideNav';

export default {
	showMainLoaderDiv() {
		setTimeout(() => {
			// this.mainLoader = document.querySelector('.loader-section');
			document.querySelector('.loader-section').style.display = 'block';
		}, 500);
	},

	hideMainLoaderDiv() {
		// this.mainLoader = document.querySelector('.loader-section');
		document.querySelector('.loader-section').style.display = 'none';
	},

	initCommonShimmerCmpnt() {
		new mainShimmerComponent().render();
	},

	hideCommonShimmerDiv() {
		new mainShimmerComponent().hide();
	},

	showCommonShimmerDiv() {
		new mainShimmerComponent().show();
	},

	initCatgrySidebarCmpnt() {
		setTimeout(() => {
			console.log('enabling the sidebar');
			new sideNavComponent().render();
		}, 1000);
	},

	hideCatgrySidebarDiv() {
		new sideNavComponent().hide();
	}
};
