import templateString from './sideNav.html';
import Mustache from 'mustache';

export default class SideNavigation {
	constructor() {
		this.sideNavBar = document.querySelector('#main-navigation-sidebar');
	}

	render() {
		// Add our component to the body
		this.sideNavBar.innerHTML = Mustache.render(templateString);
	}
}
