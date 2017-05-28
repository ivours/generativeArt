function fibonacci(n) {

	var i;
	var fib = []; // Initialize array!
	
	fib[0] = 0;
	fib[1] = 1;
	for(i=2; i<=n; i++)
	{
	    // Next fibonacci number = previous + one before previous
	    // Translated to JavaScript:
	    fib[i] = fib[i-2] + fib[i -1];
	}
	
	return fib
}

function fibonacciFunction(x) {

	return ( Math.pow(Math.E, x) - Math.pow((1 - Math.E), x) ) / Math.sqrt(5)

}

function plusOrMinus() {

	return sign = Math.random() < 0.5 ? -1 : 1;
}