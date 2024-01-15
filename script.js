class OutOfRangeError extends Error {
	constructor(params) {
		super(params);
		this.name = "OutOfRangeError";
	}
}

class InvalidExprError extends Error{
	constructor(params) {
		super(params);
		this.name = "InvalidExprError";
	} 
} 

let btn = document.getElementById("btn");

btn.addEventListener('click', (e)=>{
	let input = document.getElementById("input").value;
	let exprarray = input.split("");
try {
	if(!(exprarray[0] >= '0' && exprarray[0] <= '9'))
		throw new OutOfRangeError("Expression should not start with invalid operator");
	document.write(eval(input));
	
} catch (OutOfRangeError) {
	document.write(OutOfRangeError.message);
}

});