import { AlertServiceComponent } from './alert-service.js';
import { AddServiceComponent } from './add-service.js';
import { axios } from '../vendor';
axios
	.get('https://jsonplaceholder.typicode.com/todos/1')
	.then(function(response) {
		// handle success
		console.log('response of axios', response);
	})
	.catch(function(error) {
		// handle error
		console.log(error);
	})
	.finally(function() {
		// always executed
	});

export const runApp = () => {
	const sweetAlertObj = new AlertServiceComponent();
	const addTwoNummbers = new AddServiceComponent();
};
