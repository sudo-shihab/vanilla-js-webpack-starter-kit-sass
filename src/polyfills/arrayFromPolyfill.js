const array_fromPolyfill = [];
if (!Array.from) {
	array_fromPolyfill.push(import(/* webpackChunkName: "polyfill-array.from" */ 'core-js/es6/array'));
}

export default array_fromPolyfill;
