console.log("hello welcome to the shop");

var q8 = prompt("would you like a coffee or a tea");

if (q8 == "coffee") {
    var q9 = prompt("would you like cookies with coffee");
    if (q9 == "yes") {
        console.log("you have ordered coffee and cookies");
    } else if (q9 != "yes") {
        console.log("you have only ordered coffee");
    }
} else if (q8 == "tea") {
    var q10 = prompt("would you like cookies with tea");
    if (q10 == "yes") {
        console.log("you have ordered tea and cookies");
    } else if (q10 != "yes") {
        console.log("you have only ordered tea");
    }
} else {
    console.log("okay have a good day");
}
