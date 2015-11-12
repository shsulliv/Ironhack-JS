'use strict';

var decoder = require('./decoder.js');

function super_decoder (words, type) {
	var arr1 = [];
	var arr2 = words.split(" ");
	switch (type) {
		case "every-forwards":
			arr1 = arr2;
			break;
		case "even-forwards":
			for (var i = 0; i < arr2.length; i++) {
				if (i % 2 === 0)
					arr1.push(arr2[i]);
				}	
			break;
		case "odd-forwards":
			for (var i = 0; i < arr2.length; i += 2) {
				arr1.push(arr2[i]);
			}
			break;
		case "every-backwards":
			arr1 = arr2.reverse();
			break;
		case "even-backwards":
			for (var i = 0; i < arr2.length; i++) {
				if (i % 2 === 0)
					arr1.push(arr2[i]);
					arr1 = arr1.reverse();
				}	
			break;
		case "odd-backwards":
			for (var i = 0; i < arr2.length; i += 2) {
				arr1.push(arr2[i]);
				arr1 = arr1.reverse();
			}
			break;
	}
	console.log(decoder(arr1));
}

module.exports = super_decoder;