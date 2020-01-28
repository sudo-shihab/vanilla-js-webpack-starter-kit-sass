import templateString from './sideNav.html';
import Mustache from 'mustache';
import { FORCE_ROUTES } from '../../common-configs/constants';

export default class SideNavigation {
	constructor() {
		this.sideNavBar = document.querySelector('#main-navigation-sidebar');
		this.data = FORCE_ROUTES;
	}

	render() {
		// Add our component to the body
		console.log('data____', FORCE_ROUTES);
		this.sideNavBar.innerHTML = Mustache.render(templateString, this.data);
	}

	hide() {
		this.sideNavBar.style.display = 'none';
	}
}
