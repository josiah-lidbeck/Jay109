numberBoxes = document.querySelectorAll('.number')

addBox = document.querySelector('.add')
multiplyBox = document.querySelector('.multiply')
equalBox = document.querySelector('.equalSign')

answerBox = document.querySelector('.answerBox')

firstNumber = null
secondNumber = null
operation = null


numberBoxes.forEach((box) => {

box.addEventListener('click', () => {

value = box.innerText

if (firstNumber == null) {
    firstNumber = Number(value)
    answerBox.innerText = firstNumber
} else {
    secondNumber = Number(value)
    answerBox.innerText = secondNumber
}

})

})


addBox.addEventListener('click', () => {
operation = "add"
answerBox.innerText = "+"
})

multiplyBox.addEventListener('click', () => {
operation = "multiply"
answerBox.innerText = "x"
})

equalBox.addEventListener('click', () => {

if (operation == "add") {
    answerBox.innerText = firstNumber + secondNumber

}

if (operation == "multiply") {
    answerBox.innerText = firstNumber * secondNumber
}

firstNumber = null
secondNumber = null
operation = null

})
