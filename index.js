//Write a function called generateZeroToTwenty
// that returns an array of integers from 0 to 20, inclusive.

function zeroToTwenty(){
	newArray = []
	for (var i = 0; i!==21; i++){
		newArray.push(i);
	}return newArray;
}

zeroToTwenty()

//Write a function called generateTwentyToZero that returns 
//an array of integers from 20 to 0 in descending order.
function TwentyToZero (){
var number = [];
	for (var i = 20; i!==0; i--){
		number.push(i);
	} return number;
}

TwentyToZero()

//Write a function called generateTwentyToZero that 
//returns an array of integers from 20 to 0 in descending order.
function genereateEvenNumbers (){
var allEvens = []
	for (var i = 0; i!==21; i++){
		if (i%2 === 0){
		allEvens.push(i);	
	    }	
	}return allEvens;
}

genereateEvenNumbers()

//Write a function that adds 2 given arrays of numbers, of the same length.
//Example: sumArrays([1,2,3], [4,5,6]) ⇒ [5,7,9]

function someArrays(array1, array2){
var newAddedArray = [];
for (var i = 0; i!==array1.length; i++){
	newAddedArray[i] = array1[i] + array2[i];
	}return newAddedArray;
}
	
someArrays([1,2,3], [4,5,6]) 

//Write a function that finds the maximum value in a given array. Do not use Math.max

function mathMax (array){
 output = 0;
 for (var i = 0; i!==array.length; i++){
 	if (array[i] >= output){
 		output = array[i]
 	}
 }return output
}

mathMax([0,1,2,3,20,11])

//Create a function called getFirstAnimals that returns an array of all the first animals in the object. 
//Example: [‘bears’,’penguins’,panther’,’flea’]

var animals = { 
mammals:['bears','lions','whales','otters'], 
birds:['penguins','ducks','swans','chickens'], 
cats:['panther','mountain lion','leopard','snow tiger'], 
insects: ['flea','mosquito','beetle','fly','grasshopper']
}

function getFirstAnimals (obj){
	var newArray = [];
	for (var key in obj){
			newArray[key] = obj[key][0];
	}return newArray;
}
 getFirstAnimals(animals)

//Please make a "cold caller" script that picks one of these people to call on, at random. Don't worry about duplicates. 

var students=['Aaron Aves',
'Alex Duda',
'Colton Jett',
'Elliott Birch',
'Jamin Ewell',
'Jane Vaden',
'Jared Cairns',
'Jason Sierra',
'Joshua Peng',
'Nick Partridge',
'Rachel Noble',
'Richard Mathera',
'Robert Ballard',
'Sammy Icaza',
'Samy Kebaish',
'Silvia Fernandez',
'Vandeth Nop',
'Vy Trinh']

function random (array){
	var random = Math.floor(Math.random() * array.length)
	var newArray = " "
	for (var i = 0; i!==array.length; i++){
	newArray = array
	}return newArray[random]
}

console.log(andom(students))