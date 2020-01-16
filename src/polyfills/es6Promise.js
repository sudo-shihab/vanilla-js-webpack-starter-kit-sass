const promisePolyfill = [];
if (!window.Promise) {
	promisePolyfill.push(import(/* webpackChunkName: "polyfill-promise" */ 'core-js/es6/promise'));
}

export default promisePolyfill;
