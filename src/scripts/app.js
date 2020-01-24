import '../styles/scss/index.scss';
import { AlertServiceComponent } from './alert-service.js';
import { AddServiceComponent } from './add-service.js';
import axios from 'axios';

export const app = {
	init() {
		this.navBar = document.getElementById('category-navigation');
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
			this.navBar.style.display = 'block';
			this.hideMainLoader();
		}, 2000);
	},

	showMainShimmer() {
		this.mainShimmerDiv.innerHTML = '<h3>Shimmers Injected </h3>';
	}
};
