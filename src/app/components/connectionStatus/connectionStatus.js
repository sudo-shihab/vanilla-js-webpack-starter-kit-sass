import templateString from './connectionStatus.html';
import Mustache from 'mustache';
import './connectionStatus.scss';

export default class ConnectionStatus {
	constructor() {
		this.connectionStatusDOM = document.getElementById('connection-status');
	}

	render(status) {
		const data = {
			status: status
		};

		// Add our component to the body
		this.connectionStatusDOM.innerHTML = Mustache.render(templateString, data);
		!status
			? setTimeout(() => {
					this.hide();
				}, 4000)
			: this.show();
	}

	hide() {
		//this.connectionStatusDOM.style.display = 'none';
		this.connectionStatusDOM.style.animation = 'fadeOut 0.5s ease-out';
		setTimeout(() => {
			this.connectionStatusDOM.style.display = 'none';
		}, 200);
	}

	show() {
		//this.connectionStatusDOM.style.display = 'block';
		this.connectionStatusDOM.style.animation = 'fadeIn 0.5s ease-out';
		setTimeout(() => {
			this.connectionStatusDOM.style.display = 'block';
		}, 200);
	}
}
