const fetchPollyfill = [];
if (!window.fetch) {
	fetchPollyfill.push(import(/* webpackChunkName: "polyfill-fetch" */ 'whatwg-fetch'));
}

export default fetchPollyfill;
