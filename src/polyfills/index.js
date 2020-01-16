import fetchPolyfill from './fetchPolyfill';
// import arrayFromPolyfill from './arrayFromPolyfill';
import interSectionObserver from './intersectionObserver';

export default [ ...fetchPolyfill, ...interSectionObserver ];
