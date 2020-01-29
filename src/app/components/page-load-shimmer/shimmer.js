import './shimmer.scss';
import templateString from './shimmer.html';
import mustache from 'mustache';

export default class mainShimmer {
	constructor() {
		this.shimmerInjectableDiv = document.querySelector('#card-shimmer-collection');
		this.documentBodyEl = document.querySelector('body');
	}
	render() {
		this.shimmerInjectableDiv.innerHTML = mustache.render(templateString);
	}
	hide() {
		this.documentBodyEl.style.overflowY = 'auto';
		this.shimmerInjectableDiv.style.display = 'none';
	}
	show() {
		this.documentBodyEl.style.overflowY = 'hidden';
		this.shimmerInjectableDiv.style.display = 'block';
	}
}
