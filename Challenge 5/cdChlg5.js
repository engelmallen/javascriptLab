
var val1 = document.getElementById('val1')
var val2 = document.getElementById('val2')
var divide = document.getElementById('divide')
var posOrNot = document.getElementById('posOrNot')
var runIt = document.getElementById('runIt')


runIt.addEventListener('click', 
	function()
{
		
	if (val2.value == 0){
		posOrNot.value = "You cannot divide by 0"} 
		else {
			divide.value =  parseInt(val1.value)/parseInt(val2.value)}
	if (divide.value > 0) {
		posOrNot.value = "The sum of these numbers is Positive"}
		else {posOrNot.value = "The sum of these numbers is Negative"}
})


function thisArray(){
 var array = [1,58,3,98,7,6,25,4,6,9,5,2,7,105]
 var result = []
for(var i = 0; i < array.length; i++) 
	 if (array[i]%2==1)
		 result.push(array[i]) 
console.log("The array odd numbers are: "+result)	 		
}

