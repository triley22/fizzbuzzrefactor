var refactor; 

function getInput () {
 	refactor = prompt("Welcome to the FizzBuzz Refactor! Please supply a number.")
 	start();
}
 function start() {
	if (refactor != null && refactor % 1 === 0) {
	fizzBuzz();
	} 
	else {
		getInput();
	}
}
function fizzBuzz() {
	for (var i = 1; i <= parseInt(refactor); i++) {
		console.log(i)
		if (i % 3 === 0 && i % 5 === 0) {
			document.write("<p>FizzBuzz</p>")
		}
		else if (i % 3 === 0) {
			document.write("<p>Fizz</p>")
		}
		else if (i % 5 === 0) {
			document.write("<p>Buzz</p>")
		}
		else {
			document.write("<p>" + i + "</p>")
		}
	}
}
getInput();




/*var names = ['Joe', 'Cindy', 'Lynda'];
var compliment = ' is great!';
function complimentGiver(arr, phrase){
  var completed = [];
  for(var i = 0; i < arr.length; i += 1){
    completed.push(arr[i] + phrase)
  }
  return completed;
}

console.log(complimentGiver(names, compliment));




for (var i = 1; i < 101; i++) {
 if (i % 3 === 0 && i % 5 === 0) {
  	console.log("FizzBuzz");
	}
 else if (i % 3 === 0) {
		console.log("Fizz");
 	}
 else if (i % 5 === 0) {
		console.log("Buzz");
  }	
 else {
		console.log(i);
  } 
}
*/






