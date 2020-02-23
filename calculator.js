var val1= document.getElementById('val1');
	
var val2 = document.getElementById('val2');
	
var total = document.getElementById('total');

var butAdd = document.getElementById('butAdd');
var butSub = document.getElementById('butSub');
var butMul = document.getElementById('butMul');
var butDiv = document.getElementById('butDiv');
var butClr = document.getElementById('butClr');



butAdd.addEventListener("click",
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

	// var total = 0;
	// document.getElementById('totalScreen').innerHTML = total;