var val1= document.getElementById('val1');
	
var val2 = document.getElementById('val2');
	
var total = document.getElementById('total');

var butAdd = document.getElementById('butAdd');
var butSub = document.getElementById('butSub');
var butMul = document.getElementById('butMul');
var butDiv = document.getElementById('butDiv');
var butClr = document.getElementById('butClr');


total.value = 0;
val1.value = 0;


butAdd.addEventListener("click",
function plusNum()
	{

		val1.value = parseInt(val1.value) + parseInt(total.value);
		total.value = 0;
	}
)


num1.addEventListener("click", 	
	function()
		{
			total.value = ""
			total.value += "1"
		}
	)	

num2.addEventListener("click", 	
	function()
		{
			total.value = ""
			total.value += "2"
		}
	)	
num3.addEventListener("click", 	
	function()
		{
			total.value = ""
			total.value += "3"
		}
	)	
num4.addEventListener("click", 	
	function()
		{
			total.value = ""
			total.value += "4"
		}
	)	
num5.addEventListener("click", 	
	function()
		{
			total.value = ""
			total.value += "5"
		}
	)	
num6.addEventListener("click", 	
	function()
		{
			total.value = ""
			total.value += "6"
		}
	)	
num0.addEventListener("click", 	
	function()
		{
			total.value = ""
			total.value += "7"
		}
	)	
num7.addEventListener("click", 	
	function()
		{
			total.value = ""
			total.value += "8"
		}
	)	
num8.addEventListener("click", 	
	function()
		{
			total.value = ""
			total.value += "9"
		}
	)	
num9.addEventListener("click", 	
	function()
		{
			total.value = ""
			total.value += "0"
		}
	)	




















/*butAdd.addEventListener("click",
	function ()
	
		{
			total.value = parseInt(val1.value)+parseInt(val2.value);
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
		);
*/
	// var total = 0;
	// document.getElementById('totalScreen').innerHTML = total;