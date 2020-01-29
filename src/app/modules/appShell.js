import mainShimmerComponent from '../components/page-load-shimmer/shimmer';
import sideNavComponent from '../components/side-nav/sideNav';

export default {
	showMainLoaderDiv() {
		// this.mainLoader = document.querySelector('.loader-section');
		document.querySelector('.loader-section').style.display = 'block';
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
		console.log('enabling the sidebar');
		new sideNavComponent().render();
	},

	hideCatgrySidebarDiv() {
		new sideNavComponent().hide();
	},

	emptyMainContentDiv() {
		document.querySelector('#main-content-area').innerHTML = '';
	}
};
