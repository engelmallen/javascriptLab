//1. 	Create a script with two variables assigned to two numbers. 
//		Add them together and output the result to the console

// var num1 = 2;
// var num2 = 5 /*400*/;
// var addNum = num1+num2;
// alert(addNum)



//2.	Try to add two strings together and output the result to an alert 
//		(concatinate);

/*var conc1 		= "This thing";
var conc2 		= "concatinates like a charm"
var concRes 	=	conc1+conc2;
alert(concRes)*/

//3.	Create an object that holds information about you. 
//		Include firstName, lastName, birthday and an array of interests. 
//		Print each property out to the console.  

/*var objMe = 
{
	firstName	: "Engel",
	lastName	: "Mallen",
	birthday	: "Sept 14 1987",
	interests	:["Drawing", " Music", " Comics"]
}

alert(objMe.firstName)
alert(objMe.lastName)
alert(objMe.birthday)
alert(objMe.interests[0])
alert(objMe.interests[1])
alert(objMe.interests[2])
*/

// 4. 	Write a program that checks if a variable is less than 100. 
// 		If it is, alert the user that their variable is less than 100. 
// 		If it is not, let the user know what the variable was and that 
// 		it was greater than 10.

/*var isLess = 150;

if (isLess<100) 
		{
			alert("Variable num2 is less than 100")
		}
	else 
		{
			alert("Variable num2 is "+isLess+ " which is over 100")
		}*/



// 5. Declare a function that takes a name as an argument and tells the user 
// what name they’ve entered, try invoking it after it has been declared


/*var name = prompt("Whats your name");

function myName(name)
{
	if (name=="Engel")
		{
			alert("Hi, Engel")
		}
	else 
		{
			alert(name + "? Who are you? I dont know you!!");
			alert("does anyone knows this " + name +" person?")
		}
}
myName(name);*/

// 6.   Declare a function that takes no arguments but prints 
//		something to the console, 
//		try invoking it after it has been declared

/*function printIt()
		{
			alert("this function prints something")
		}
printIt();*/

//7.	Write a function that takes a number as an input from 
//		the user and checks if this number is even or odd;

/*var ageNum = prompt("What's your age?");
var ageVer = 2;


function ageOdd(ageNum)
{
	if (ageNum%ageVer == 1)
		{
			alert("Ok, this is odd")
		}
	else 
	{
		alert("Ok, we are even")
	}
}

ageOdd(ageNum);*/

//8.	Declare a function that, depending upon which virtual “door” 
//		was entered, tells the user they’ve received a different “prize” 
//		in an alert. Try running it after it has been declared a few 
//		times with each door option 

/*var doorQs = prompt("While the Masked Siprit pointed at the three doors he said: Please choose one door. Black, White or Gray") 

function doorSlt(doorQs)
	{ 
		if (doorQs=="Black") {alert("Black Door gave you the prize of Strenght")}
		else if (doorQs=="White") {alert("White Door gave you the prize of Wisdom")}
		else if (doorQs=="Grey") {alert("Grey Door gave you the prize of Talent")}
		else {
			alert("That's not an option. Please refresh and choose wisely");
			}
	}

doorSlt(doorQs);*/

// 9. 	write a function that takes an array as an argument and lists 
//		all the items in this array.

/*var listOfGroceries = ["Eggs, ", "Milk, ", "Bananas, ", "Oats"]

alert(listOfGroceries)*/


//10.	Write a function that takes two arguments, adds them and 
//		checks if the output is bigger than 100;  if it is bigger 
//		it consoles “it is bigger than 100”; 
//		if not, it consoles “it is not bigger than 10"



/*function whoIsBigger(a,b)
	{
		if (a+b>100)
			{console.log("This is Over 100!!!!")}
		else if (a+b<100){console.log("This is under 100...")}
		
	}*/
 



// 11. Create an object literal called person; give some key value pairs as 
// firstName and lastName; finally print the length of the firstName and the 
// lastName of the object.

/*var person = 
{
	firstName	: "Natan",
	lastName	: "Drake"
}

alert(person.firstName.length+person.lastName.length);*/

//12.	Write a function that lists all the numbers from 0 to 100; 
//		if the outcome number is even print to the console the corresponding 
//		number plus add the line ‘it is an even’; if it is odd add the line 
//		‘it is odd’

/*var loopVer = 2;

for 
	(
		var numLoop = 0; numLoop <= 100; numLoop++
	)
{
	if (numLoop%loopVer==0) {alert(numLoop+" is an EVEN number")}
		else {alert(numLoop+" is an ODD number")}
}*/



// 13. 	Write a function that takes two numbers as arguments; 
//		if the two numbers are even print ‘they are both even numbers’;
// 		if the two numbers are different print “there is one even and one odd”; 
//		if both numbers are odd print ‘they are both odd’

/*var numVer = 2;

function twoNum(x,y)
{
	if (x%numVer==0 && y%numVer==0 ){alert("Both numbers are EVEN")}
		else if (x%numVer==1 && y%numVer==0 ){alert("Only one is Even")}
			else if (x%numVer==1 && y%numVer==1 ){alert("Both numbers are ODD")}
				else if (x%numVer==0 && y%numVer==1 ){alert("Only one is Even")}
}*/


// 14. wite a function that lists ONLY the odd numbers between 1 to 100



/*for 
	(
		var oddCount = 0; oddCount <= 100; oddCount++
	)
{
	if (oddCount%2 == 1){alert("Number "+oddCount+" is an odd Number...")}
}*/

// 15. 	Create an array filled with several strings of names
// 		-Use a loop to print out the names, followed by ‘is my friend’. 
// 		Like so:>>Jake is my friend John is my friend Samantha is my 
// 		friend Billy is my friend

/*var namLs = ["Tom", "Rafy", "Apa", "Kevin", "Michael,", ]

for 
	(
		var namPr = 0; namPr < namLs.length; namPr++
	)
	{
		alert(namLs[namPr]+" is my friend")
	}
*/

// 16. 	Create a while loop that “sings” the classic song “99 Bottles of 
// 		Root Beer on the Wall”
//  	- The code it outputs to the console should look similar to this:
// 		“99 bottles of root beer on the wall, 99 bottles of root beer...
// 		take one down, pass it around 98 bottles of root beer on the wall, 
// 		98 bottles of root beer on the wall, 98 bottles of root beer...take 
// 		one down, pass it around 97 bottles of root beer on the wall,” etc., 
// 		all the way to 0 bottles.

var song = 
[
	" bottles of beer on the wall ,", 
	" bottles of beer. ",
 	" Take one down and pass it around, ", 
 	" bottles of beer on the wall. ",
 	" bottle of beer on the wall ,",
 	" bottle of beer. ",
]


for (var beers = 99; beers >= 1; beers--) 
{
	if (!beers < 2) 
		{
			console.log(beers+song[0]+beers+song[1]);
			console.log(song[2]+ (beers-1)+song[3])}
				else if (beers == 1) 
					{
						console.log(beers+song[4]+beers+song[5]);
					}
	
}


/*for (var beers = 99; beers >= 0; beers--) 
{
	alert(beers+" bottles of beer on the wall, "+beers+" bottles of beer.");
	alert("Take one down and pass it around, "+ (beers-1)+" bottles of beer on the wall.")
}*/
