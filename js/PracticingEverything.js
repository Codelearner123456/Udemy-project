// part1
console.log("Hello, welcome to the store");
console.log("We offer coffee for 2$ each and cookies for 1$ each");
var q1 = prompt("How many coffee cups would you like ?");
var q2 = prompt("How many cookies would you like ?");
var q3 = prompt("How much would you like to leave as a tip ?");

q1 = parseInt(q1);
q2 = parseInt(q2);
q3 = parseInt(q3);

c1 = q1 * 2;
c2 = q2 * 1;

var taxes = (c1 + c2) * 0.1;
var total = c1 + c2 + q3 + taxes;


// part2
console.log("You have ordered " + q1 + " coffee for a total of " + c1 + "$");
console.log("You have also ordered " + q2 + " cookies for a total of " + c2 + "$");
console.log("You have left " + q3 + " $ as a tip. The total of your bill is " + total + "$ with taxes");