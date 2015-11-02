// Add numbers
function addNumbers(){
	var num1 = Number(document.getElementById("num1").value);
	var num2 = Number(document.getElementById("num2").value);
	document.getElementById("numResult").value = num1 + num2;
}
// Substract numbers
function subNumbers(){
	var num1 = Number(document.getElementById("num1").value);
	var num2 = Number(document.getElementById("num2").value);
	document.getElementById("numResult").value = num1 - num2;
}
// Multiply numbers
function mulNumbers(){
	var num1 = Number(document.getElementById("num1").value);
	var num2 = Number(document.getElementById("num2").value);
	document.getElementById("numResult").value = num1 * num2;
}
// Divide numbers
function divNumbers(){
	var num1 = Number(document.getElementById("num1").value);
	var num2 = Number(document.getElementById("num2").value);
	document.getElementById("numResult").value = num1 / num2;
}
