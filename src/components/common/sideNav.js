import template from './sideNav.html';
import Mustache from 'mustache';

export default class Header {
	constructor() {
		this.sideNavBar = document.querySelector('#category-navigation');
	}

	render() {
		// Add our component to the body
		this.sideNavBar.innerHTML = Mustache.render(template);
	}
}
