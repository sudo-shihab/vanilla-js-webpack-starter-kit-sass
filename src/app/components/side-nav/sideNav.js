import templateString from './sideNav.html';
import Mustache from 'mustache';
import { FORCE_ROUTES } from '../../common-configs/Constants';

export default class SideNavigation {
	constructor() {
		this.sideNavBar = document.querySelector('#main-navigation-sidebar');
		this.data = FORCE_ROUTES;
	}

	render() {
		// Add our component to the body
		console.log('data____', FORCE_ROUTES);
		this.sideNavBar.innerHTML = Mustache.render(templateString, this.data);
		this.addEventListners();
	}

	hide() {
		this.sideNavBar.style.display = 'none';
	}

	addEventListners() {
		const catgryItem = document.getElementsByClassName('category-list-block');
		console.log('event listners added to navigation');
		console.log('event list dom', catgryItem);
	}
}
