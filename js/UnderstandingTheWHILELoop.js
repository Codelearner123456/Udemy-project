console.log("hello welcome to the app");
pass = prompt("please create a password");
console.log("Your password have been created thank you");

passtry = prompt("please enter your password");

while (passtry != pass) {
    passtry = prompt("wrong password please try again");
}

console.log("you are in");