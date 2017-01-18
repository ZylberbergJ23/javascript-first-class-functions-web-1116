function receivesAFunction(callback) {
	callback()
}

function returnsANamedFunction() {
	return function jon() {
		return "jon"
	}
}

function returnsAnAnonymousFunction() {
	return function () {
		return "jon"
	}
}