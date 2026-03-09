let answerBox = document.querySelector(".answerBox");

let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operation");

let firstNumber = "";
let operator = "";

numbers.forEach(function(button) {

    button.addEventListener("click", function() {

        answerBox.innerText = button.innerText;

    });

});

operations.forEach(function(button) {

    button.addEventListener("click", function() {

        if(button.innerText === "+" || button.innerText === "x"){

            firstNumber = answerBox.innerText;
            operator = button.innerText;
            answerBox.innerText = "";

        }

    });

});
