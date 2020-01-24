import './mainShimmer.scss';
import templateString from './mainShimmer.html';
import mustache from 'mustache';

export default class mainShimmer {
	constructor() {
		this.shimmerInjectableDiv = document.querySelector('#card-shimmer-collection');
	}
	render() {
		this.shimmerInjectableDiv.innerHTML = mustache.render(templateString);
	}
}
