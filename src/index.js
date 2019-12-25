import '@babel/polyfill';
import './styles/scss/index.scss';
import { runApp } from './scripts/app';

// if any application level configs like running multiple app instances
console.log('hello welcome to the webpack starter pack app');
console.log('shihabhere');
[ 1, 2, 3 ].map((n) => n ** 2); // test babel loader
let a = () => {
	console.log('hello there');
};

// test babel polyfill

async function getPosts() {
	const callApi = await fetch('https://jsonplaceholder.typicode.com/posts');
	const responseData = await callApi.json();
	return responseData;
}

getPosts().then((posts) => {
	console.log('reply from async await example', posts);
});

// run a single app
var array = [ 1, 2, 3 ];

Array.from(array).forEach(($item) => {
	console.log($item);
});

runApp();
