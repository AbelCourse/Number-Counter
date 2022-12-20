init();

function init() {
	let sS = sessionStorage.getItem('number');
	if (sS) {
		document.getElementById('number').innerHTML = Number(sS);
	}
}

function inc() {
	let num = Number(document.getElementById('number').innerHTML);
	document.getElementById('number').innerHTML = num + 1;
	let num2 = Number(document.getElementById('number').innerHTML);
	sessionStorage.setItem('number', num2);
}

function dec() {
	let num = Number(document.getElementById('number').innerHTML);
	document.getElementById('number').innerHTML = num - 1;
	let num2 = Number(document.getElementById('number').innerHTML);
	sessionStorage.setItem('number', num2);
}

function neutral() {
	document.getElementById('number').innerHTML = 0;
	sessionStorage.setItem('number', 0);
}
