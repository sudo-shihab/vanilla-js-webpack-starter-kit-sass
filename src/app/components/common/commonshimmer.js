import './commonShimmer.scss';
import templateString from './commonShimmer.html';
import mustache from 'mustache';

export default class mainShimmer {
	constructor() {
		this.shimmerInjectableDiv = document.querySelector('#card-shimmer-collection');
	}
	render() {
		this.shimmerInjectableDiv.innerHTML = mustache.render(templateString);
	}
	hide() {
		this.shimmerInjectableDiv.style.display = 'none';
	}
	show() {
		this.shimmerInjectableDiv.style.display = 'block';
	}
}
