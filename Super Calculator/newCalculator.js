var val1= document.getElementById('val1');
	
// var val2 = document.getElementById('val2');
	
var total = document.getElementById('total');

var butAdd = document.getElementById('butAdd');
var butSub = document.getElementById('butSub');
var butMul = document.getElementById('butMul');
var butDiv = document.getElementById('butDiv');
var butTot = document.getElementById('butTot');
var butClr = document.getElementById('butClr');
var butDel = document.getElementById('butDel');

var op1 = 0;
var op2 = 0;
var opChg = null;

// function opChange()
// // {
// // 	if (opChg == false){opChg = true}
// // 		else {opChg = false}
// // }

total.value = "0";
val1.value = "";

				// Functions

function lilDis(op)
{
		{val1.value += total.value + op ; }
}

function status()
{	console.log("op1 = "+ op1);
	console.log("op2 = "+ op2);
	console.log("opChg Status: "+ opChg);
}

function clearAll()
		{
			val1.value = null;
			// total.value = 0;
			// val2.value = "";
			op1 = 0;
			op2 = 0;

		}

				 // Operators

butAdd.addEventListener("click",
function plusNum()
	{ 	lilDis("+")
		if (opChg != "sum")
			{
			// lilDis("+")
			op1 = parseInt(total.value);
			
			total.value = 0;
			opChg = "sum";
			status()

			}else
			{
			
			op1 = parseInt(op1)+parseInt(op2);
			total.value = parseInt(op1);
			op2	= 0;
			opChg = "sum";
			total.value = 0;
			status()
			}
	}
)

butSub.addEventListener("click",
function subNum()
	{ 	lilDis("-")
		if (opChg != "sub")
			{
				
			op1 = parseInt(total.value);
			total.value = 0;
			opChg = "sub";
			status()

			}else
			{
			// lilDis("-")
			op1 = parseInt(op1)+parseInt(op2);
			total.value = parseInt(op1);
			op2	= 0;
			opChg = "sub";
			total.value = 0;
			status()
			}
	}
)

butMul.addEventListener("click",
function mulNum()
	{ 
		if (opChg != "mul")
			{
			lilDis("x")				
			op1 = parseInt(total.value);
			total.value = 0;
			opChg = "mul";
			status()

			}else
			{
			lilDis("x")				
			op1 = parseInt(op1)+parseInt(op2);
			total.value = parseInt(op1);
			op2	= 0;
			opChg = "mul";
			total.value = 0;
			status()
			}
	}
)

butDiv.addEventListener("click",
function divNum()
	{ 
		if (opChg != "div")
			{
			lilDis("/")	
			op1 = parseInt(total.value);
			total.value = 0;
			opChg = "div";
			status()

			}else
			{
			lilDis("/")	
			op1 = parseInt(op1)+parseInt(op2);
			total.value = parseInt(op1);
			op2	= 0;
			opChg = "div";
			total.value = 0;
			status()
			}
	}
)

butClr.addEventListener("click",
	function ()
		{
			val1.value = null;
			total.value = 0;
			op1 = 0;
			op2 = 0;
			opChg = null;
			status()
		}
)

butDel.addEventListener("click",
	function ()
		{
			val1.value = null;
			total.value = 0;
			// val2.value = "";
			op1 = 0;
			op2 = 0;

		}
)




butTot.addEventListener("click",
function totNum()
	{	lilDis("")
		if (opChg == "sum") {
		op2 = total.value	
		total.value = "";
		total.value = parseInt(op1)+ parseInt(op2);
	}else if 
		(opChg == "sub") {
		op2 = parseInt(total.value*-1)	
		total.value = "";
		total.value = parseInt(op1)+ parseInt(op2);
	}else if 
		(opChg == "mul") {
		op2 = parseInt(total.value)	
		total.value = "";
		total.value = parseInt(op1)* parseInt(op2);
	}else if 
		(opChg == "div") {
		op2 = parseInt(total.value)	
		total.value = "";
		total.value = parseInt(op1) / parseInt(op2);
	}
	status()
	clearAll()
	}
)



 					// Numbers

num1.addEventListener("click", 	
	function()
		{
		
		if (total.value == 0)
			{
				total.value = "";
				total.value += "1";
			} else {total.value += "1"}
		



		}
	)	

num2.addEventListener("click", 	
	function()
		{
			if (total.value == 0)
			{
				total.value = "";
				total.value += "2";
				// val2.value += "2";
			} else {total.value += "2"}
		}
	)

num3.addEventListener("click", 	
	function()
		{
			if (total.value == 0)
			{
				total.value = ""
				total.value += "3"
				// val2.value += "3";
			} else {total.value += "3"}
		}
	)

num4.addEventListener("click", 	
	function()
		{
			if (total.value == 0)
			{
				total.value = ""
				total.value += "4"
				// val2.value += "4";
			} else {total.value += "4"}
		}
	)

num5.addEventListener("click", 	
	function()
		{
			if (total.value == 0)
			{
				total.value = ""
				total.value += "5"
				// val2.value += "5";
			} else {total.value += "5"}
		}
	)

num6.addEventListener("click", 	
	function()
		{
			if (total.value == 0)
			{
				total.value = ""
				total.value += "6"
				// val2.value += "6";
			} else {total.value += "6"}
		}
	)

num7.addEventListener("click", 	
	function()
		{
			if (total.value == 0)
			{
				total.value = ""
				total.value += "7"
				// val2.value += "7";
			} else {total.value += "7"}
		}
	)

num8.addEventListener("click", 	
	function()
		{
			if (total.value == 0)
			{
				total.value = ""
				total.value += "8"
				// val2.value += "8";
			} else {total.value += "8"}
		}
	)

num9.addEventListener("click", 	
	function()
		{
			if (total.value == 0)
			{
				total.value = ""
				total.value += "9"
				// val2.value += "9";
			} else {total.value += "9"}
		}
	)

num0.addEventListener("click", 	
	function()
		{
			if (total.value == 0)
			{
				total.value = ""
				total.value += "0"
				// val2.value += "0";
			} else {total.value += "0"}
		}
	)

numDot.addEventListener("click", 	
	function()
	{
		total.value += "."
	}
		
	)

/*
butAdd.addEventListener("click",
	function ()
	
		{
			// total.value = parseInt(val1.value)+parseInt(val2.value);
		}
		);
butSub.addEventListener("click",
	function ()
		{
			total.value = parseInt(val1.value)-parseInt(val2.value);
		}
		);
butMul.addEventListener("click",
	function ()
		{
			total.value = parseInt(val1.value)*parseInt(val2.value);
		}
		);
butDiv.addEventListener("click",
	function ()
		{
			total.value = parseInt(val1.value)/parseInt(val2.value);
		}
		);
butClr.addEventListener("click",
	function ()
		{
			val1.value = "";
			val2.value = "";
			total.value = "";
		}
		);*/

	// var total = 0;
	// document.getElementById('totalScreen').innerHTML = total;
