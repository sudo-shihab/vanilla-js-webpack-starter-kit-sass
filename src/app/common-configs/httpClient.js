import Axios from 'axios';
import WebStorage from './WebStorage';
import { VALIDATE_ERR_RESPONSE } from '../AppConfigConst';


// const JSONBigInt = require('json-bigint')({ storeAsString: true });

export default () => {
  WebStorage.set('lastSync', Date.now());
  const authToken = WebStorage.get('autToken');
  // Add a response interceptor
  const httpClient = Axios.create({
    headers: {
      'content-type': 'application/json',
      'x-app-AuthToken': authToken,
    },
  });

  httpClient.interceptors.response.use(response =>
  // Do something with response data
    response,
  (error) => {
    const possibleAuthErrors = ['InvalidAuthTokenException', 'InvalidAuthDataException', 'invalid token'].join('|');

    // Do something with response error
    if (error && error.response && error.response.data && error.response.data[VALIDATE_ERR_RESPONSE.proteus] && error.response.data[VALIDATE_ERR_RESPONSE.proteus].match(possibleAuthErrors)) {
      return possibleAuthErrors;
    }

    const possibleSensitiveActionErrors = ['SensitiveActionNotAllowedException'].join('|');
    if (error && error.response && error.response.data && error.response.data[VALIDATE_ERR_RESPONSE.proteus] && error.response.data[VALIDATE_ERR_RESPONSE.proteus].match(possibleSensitiveActionErrors)) {
      return possibleSensitiveActionErrors;
    }

    if (error && 'status' in error && 'responseText' in error) {
      const apiUrl = httpURL.split('/');
      const serviceMethod = apiUrl[apiUrl.length - 1].split('?')[0];

    }

    return Promise.reject(error);
  });

  return proteusInstance;
};
