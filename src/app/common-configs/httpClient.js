import Axios from 'axios';

// const JSONBigInt = require('json-bigint')({ storeAsString: true });

export default () => {
	// Add a response interceptor
	const httpClient = Axios.create({
		headers: {
			'content-type': 'application/json',
			'x-app-AuthToken': ''
		}
	});

	httpClient.interceptors.response.use(
		(response) =>
			// Do something with response data
			response,
		(error) => {
			return Promise.reject(error);
		}
	);

	return proteusInstance;
};
