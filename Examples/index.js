// variables

// strings

var string = "something something"
var int = 7

// booleans

// true
// false

// undefined and null

var name = "Oggi"

alert(name)

// operators

var x = 12;
var y = 23;

// assignment and equal sign
console.log(x == y)

// modulo
console.log(4 % 2);
console.log(7 % 3);

// && - and
// || - or
var a = 5;
 var b = 8;
console.log(a > 10 && b > 3)
var x = 0;
var y = 10;
var z = 15;
console.log(x == 0 || y < 10 || z < 0)
console.log(true || false)
console.log(false && true)
console.log(false && false)
console.log(true && true)
console.log(false || false)

// ! - the bang sign 

console.log(!5 == 5)

// Array

var array = ["Oggi", "Boro", "Spas", "Rad"]

console.log(array[2])
console.log(array.length)

// multidimensional arrays
var m = [[1,2,3,4], ["Oggi", "Boro", "Spas", "Rad"]]

console.log(m[1][1])

//Object literal

var object = {
	name: "Oggi",
	country: "USA",
	telefon: 122112123,
	placesOfVisit: ["USA", "ES", "FR", "GR"]
}

console.log(object.placesOfVisit[2])

//Coniditionals
var a = 10;

if(a > 10) {
	console.log("a is bigger than 10")
} else if(a < 10){
	console.log("a is smaller than 10")
} else {
	console.log("a is 10")
}

var name = prompt("what is your name?")

if(name == "Oggi"){
	console.log("your name is Oggi")
}else if(name == "George"){
	console.log("your name is George")
}else if(name == "Jimi"){
	console.log("your name is Jimi")
}else {
	console.log("sorry, I don't recognize this name")
}

//function without an argument

function helloWorld() {
	console.log('whatever')
}

//function with an argument

function adding(x, y) {
	console.log(x + y)
}

function naming(name) {
	if (name == "Oggi") 
		{
			console.log(name)
		} 
	else if (name == "George") 
		{
			console.log(name)
		} 
	else 
		{
			console.log("have no idea what that " + name + " is")
		}
}

loops
for loop

 var numbers = [1,2,3,4]
 var names = ["Oggi", "Boro", "Spas", "Rad"]

for(var i = 0; i < numbers.length; i++) {
	for(var j = 0; j < names.length; j++) {
		console.log(numbers[i])
		console.log(names[j])
	}
}

for(var i = 100; i >= 0; i--) {
	console.log(i)
}































































