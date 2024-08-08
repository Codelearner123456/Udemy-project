// part1
console.log("let's create a sentence");
var q4 = prompt("please write down a name");
var q5 = prompt("write down a color");

function sentence(name, color) {
    console.log("Hello my name is " + name + " and I love " + color + " color");
}


console.log("let's make an operation");
var q6 = prompt("please write a number");
var q7 = prompt("please write another number");

function operation(num1, num2) {
    console.log("multiplication of numbers: " + num1 * num2);
    console.log("divison of numbers: " + num1 / num2);
    console.log("addition of numbers: " + num1 + num2);
    console.log("substaction of numbers: " + num1 - num2);
}

operation(q6, q7)


// part2
function both(name, color, num1, num2) {
    console.log("the selected name is " + name);
    console.log("the selected color is " + color);
    console.log("the selected number 1 is " + num1);
    console.log("the selected number 2 is " + num2);
}

both(q4, q5, q6, q7)