import './styles/scss/index.scss';

import { runApp } from './scripts/app';
import lazyLoadInit from './scripts/lazyLoadConfig';

lazyLoadInit();

console.log(process.env.DB_HOST);

window.addEventListener('load', (event) => {
	console.log('page is fully loaded');

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


	// testing babel chaing proposal plugin
	const obj = {
		foo: {
		  bar: {
			baz() {
			  return 42;
			},
		  },
		},
	  };
	  
	  const baz = obj?.foo?.bar?.baz(); // 42
	  console.log("baz", baz);


	  const safe = obj?.qux?.baz(); // undefined
const safe2 = obj?.foo.bar.qux?.(); // undefined
console.log('safe',safe );
console.log('safe2',safe2 );




// Top function can be called directly, too.
function test() {
  return 42;
}
test?.(); // 42

	  
	runApp();
});
