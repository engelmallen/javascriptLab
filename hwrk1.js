//1. 	Create a script with two variables assigned to two numbers. 
//		Add them together and output the result to the console

var num1 = 2;
var num2 = 4 /*400*/;
var addNum = num1+num2;

console.log(addNum)

//2.	Try to add two strings together and output the result to an alert 
//		(concatinate);

var conc1 		= "This thing";
var conc2 		= "concatinates like a charm"
var concRes 	=	conc1+conc2;

console.log(concRes)

//3.	Create an object that holds information about you. 
//		Include firstName, lastName, birthday and an array of interests. 
//		Print each property out to the console.  

var objMe = 
{
	firstName	: "Engel",
	lastName	: "Mallen",
	birthday	: "Sept 14 1987",
	interests	:["Drawing", "Music", "Comics"]
}

console.log(objMe.firstName)
console.log(objMe.lastName)
console.log(objMe.birthday)
console.log(objMe.interests)

// 4. 	Write a program that checks if a variable is less than 100. 
// 		If it is, alert the user that their variable is less than 10. 
// 		If it is not, let the user know what the variable was and that 
// 		it was greater than 10.

if (num2<100) {alert("Variable num2 is less than 100")}
else {alert("Variable num2 was over 100")}

// 5. Declare a function that takes a name as an argument and tells the user 
// what name they’ve entered, try invoking it after it has been declared

function myName = prompt("What's your name?")
{
	Alert(myName);
}
