const interSectionObsrPolyfill = [];

if (!window.IntersectionObserver) {
	interSectionObsrPolyfill.push(
		import(/* webpackChunkName: "polyfill-interSectionObserver" */ 'intersection-observer')
	);
}

export default interSectionObsrPolyfill;
