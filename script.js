function buttonClick(value) {
    var screen = document.querySelector('.screen');

    if (value === "=") {
        try {
            var result = eval(screen.textContent);
            screen.textContent = result;
        } catch (error) {
            screen.textContent = "Error";
        }
    } else if (value === "del") {
        screen.textContent = screen.textContent.slice(0, -1);
    } else if (value === "×") { // Multiplication
        screen.textContent += "*";
    } else if (value === "÷") { // Division
        screen.textContent += "/";
    } else if (value === "C") { // Square root
        screen.textContent = screen.textContent.slice(0, -100);
    } else {
        if (screen.textContent === "0" || screen.textContent === "Error") {
            screen.textContent = value;
        } else {
            screen.textContent += value;
        }
    }
}

// Add event listeners to all buttons
var buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Call buttonClick function with the value of the clicked button
        buttonClick(button.textContent);
    });
});