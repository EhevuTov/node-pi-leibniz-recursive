var rep = 10000;

function isOdd(x) {
	var val;
	(x%2) ? val = false : val = true;
	return val;
}

function calc (x) {
	// done with sequence
	if(x === rep) {
		return 0;
	}

	var summation = (Math.pow(-1,x))/(2*x+1);
	// if it's the first in sequence
	if(isOdd(x) === true) {
		return summation+calc(x+1);
	}
	else {
		return summation+calc(x+1);
	}
	return 0;
}
function pi(x) {
	return 4 * calc(x);
}

console.log(pi(0));
