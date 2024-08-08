// fuction to print number 1 to 10
function printNumber() {
    // Get the div where the number will be displayed
    let numberDiv = document.getElementById('number-display');

    // Iterate through numbers 1 to 10
    for (let i = 1; i < 10; i++) {
        // Create a new paragrarah element
        let paragraph = document.createElement('p');
        paragraph.textContent = `The number ${i} is less than 10`;

        numberDiv.appendChild(paragraph);
    }
}
window.onload = printNumber;

// fuction to print number 1 to 50
function printNumber() {
    // Get the div where the number will be displayed
    let numberDiv = document.getElementById('number-display');

    // Iterate through numbers 1 to 10
    if (measage == "yes") {
        for (let i = 1; i < 10; i++) {
            // Create a new paragrarah element
            let paragraph = document.createElement('p');
            paragraph.textContent = `The number ${i} is less than 10`;

            numberDiv.appendChild(paragraph);
        }
    }
}
window.onload = printNumber;