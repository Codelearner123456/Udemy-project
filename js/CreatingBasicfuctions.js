function food(food) {
    console.log("I love to eat " + food);
}

function order(quantity, price) {
    console.log("I have ordered " + quantity + " slices");
    console.log("Each slice cost " + price + " dollars");
    console.log("The total of my bill was " + quantity * price + " dollars");
}

food("pizza");
order(3, 2);