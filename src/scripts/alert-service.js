export class AlertServiceComponent {
	constructor() {
		console.log('this is alert component');
		this.errorBox = document.getElementById('error');
	}

	hideAlert() {
		this.errorBox.style.display = none;
	}

	showAlert() {
		this.errorBox.style.display = block;
	}
}
