/**
 * http://usejsdoc.org/
 */

// Lets see the power of node processing engine

/*
 * Number of iterations	Node.js	PHP
	100				2.00		0.14
	10'000			3.00		10.53
	1'000'000		15.00		1119.24
	10'000'000		143.00		10621.46
	1'000'000'000	11118.00	1036272.19
 * 
 * 
 * 
 */

var i, a, b, c, max;

var max = 20000000;
 
var d = Date.now();

console.log(d);

for (i = 0; i < max; i++) {
    a = 1234 + 5678 + i;
    b = 1234 * 5678 + i;
    c = 1234 / 2 + i;
}

console.log(Date.now() - d);