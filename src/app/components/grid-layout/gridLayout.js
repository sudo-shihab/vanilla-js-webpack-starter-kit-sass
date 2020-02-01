import templateString from './gridLayout.html';
import Mustache from 'mustache';

export default class gridLayout {
	constructor() {
		this.mainContentArea = document.querySelector('#main-content-area');
		import(/* webpackChunkName: 'commonGridlayout' */ './gridLayout.scss');
	}

	render() {
		// Add our component to the body
		this.mainContentArea.innerHTML = Mustache.render(templateString);
	}

	hide() {
		this.mainContentArea.style.display = 'none';
	}
}
