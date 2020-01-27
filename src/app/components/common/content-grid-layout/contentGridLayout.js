import templateString from './content-grid-layout.html';
import mustache from 'mustache';

export default class contentGridLayout {
	constructor() {
		this.shimmerInjectableDiv = document.querySelector('#card-shimmer-collection');
	}

	render() {
		this.shimmerInjectableDiv.innerHTML = mustache.render(templateString);
	}

	hide() {
		this.shimmerInjectableDiv.style.display = 'none';
	}
}
