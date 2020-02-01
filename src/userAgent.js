import appShellModule from './app/modules/appShell';

export const isOnline = () => {
	console.log('checking if user is online after the index html is loaded');
	const isUsrOnline = window.navigator.onLine;
	if (isUsrOnline) {
		console.log('online');
		return 1;
	} else {
		console.log('offline');
		return 0;
	}
};

export const attachUsrConnStatusEvnt = () => {
	window.addEventListener('online', updateOnlineStatus);
	window.addEventListener('offline', updateofflineStatus);
};

function updateOnlineStatus() {
	console.log('user is back online');
	appShellModule.renderConnectonStatusCmpt(false);
}

function updateofflineStatus() {
	appShellModule.renderConnectonStatusCmpt(true);
}

export default {
	isOnline
};
