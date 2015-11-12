'use strict'; // <--- This at the top of the page will cause JS to throw errors instead of just trying to run 

//In Ruby, functions are inside classes (as methods). In JS, functions are the star of the show.

//JS has global scope - variables only need to be declared once

// if (true == 1) { // <--- Will be truthy because '==' will not compare types but will try to assign true to 1
// 	console.log("Is true equal to 1?");
// } else {
// 	console.log("No");
// }

// if (true === 1) { // <--- '===' is the correct way to do it in JS
// 	console.log("Is true equal to 1?");
// } else {
// 	console.log("No");
// }

//You can console.log a function - just pass it in the parameters of console.log

// function eitherOr (food) {
// 	if (food === 'pizza') {
// 		console.log('Yay pizza!');
// 	} else if (food === 'cookies') {
// 		console.log('Cookies are good too!'); 
// 	} else {
// 		console.log("Enjoy eating " + food + "!");
// 	}
// }

// eitherOr('pineapples');
// eitherOr('pizza');
// eitherOr('cookies');

// var foods = ['pizza', 'cookies', 'bread'];

// foods.forEach(function (food) {
// 	eitherOr(food);
// });

// var capsFoods = foods.map(function (food) {
// 	return food.toUpperCase();
// });

// console.log(capsFoods);

// var msg = foods.reduce(function(first, second) {
// 	console.log(first, second);
// 	return first + " AND " + second;
// });

// console.log("Result: " + msg);

// .filter instead of .select (Ruby)
// Objects are the same as hashes in Ruby

// var numbers = '80:70:90:100';
// var numAverage = function (str) {
// 	var sum = 0;
// 	var myArray = str.split(":");
// 	for (var i = 0; i < myArray.length; i++) {
// 		sum += parseInt(myArray[i], 10);
// 	};
// 	var avg = sum/myArray.length;
// 	return avg;
// 	};

// console.log(numAverage(numbers));

// var words = [
//     'January',
//     'lacks',
//     'caveats',
//     'hazardous',
//     'DOORS',
//     'crying',
//     'arrogantly',
//     'climate',
//     'proponent',
//     'rebuttal'
// ];

// function decoder (arr) {
//     var secretMessage = '';
//     arr.forEach(function(word, i) {
//     	secretMessage += word.charAt(i % 5);
//     });
//         return secretMessage;
// }

// console.log(decoder(words));

// function odd () {
// 	for (var i = 0; i <= 100; i++) {
// 		if (i % 2 !== 0) {
// 		return i;
// 		}
// 	}
// }

var decoder = require('./decoder.js');
var super_decoder = require('./superdecoder.js');
var sentences = require('./sentencemodule.js')

// Possible decoding types:
// "every-forwards", "even-forwards", "odd-forwards"
// "every-backwards", "even-backwards", "odd-backwards" 

// var sentence1 = "Attack her nose under here with an itch"
 
// var sentence2 = "Raul Nuñez call never finished"
 
// var sentence3 = "Start rapping this or countless queasy wizards give back jay-z"
 
// var sentence4 = "inner peace is overrated"
 
// var sentence5 = "Fill the proper tank for the cow"
 
// module.exports = [sentence1, sentence2, sentence3, sentence4, sentence5];

// super_decoder(sentence1, "every-forwards");
// super_decoder(sentence2, "every-forwards");
// super_decoder(sentence2, "even-backwards");
// super_decoder(sentence2, "odd-backwards");

sentences.forEach (function (sentence) {
    super_decoder(sentence, "every-forwards");
    super_decoder(sentence, "even-forwards");
    super_decoder(sentence, "odd-forwards");
    super_decoder(sentence, "every-backwards");
    super_decoder(sentence, "even-backwards");
    super_decoder(sentence, "odd-backwards");
});






