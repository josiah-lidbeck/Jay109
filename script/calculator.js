oneBox = document.querySelector('.one')
twoBox = document.querySelector('.two')
threeBox = document.querySelector('.three')
fourBox = document.querySelector('.four')
fiveBox = document.querySelector('.five')
sixBox = document.querySelector('.six')
sevenBox = document.querySelector('.seven')
eightBox = document.querySelector('.eight')
nineBox = document.querySelector('.nine')

addBox = document.querySelector('.add')
multiplyBox = document.querySelector('.multiply')
equalBox = document.querySelector('.equalSign')

answerBox = document.querySelector('.answerBox')


firstNumber = null
secondNumber = null
operation = null


oneBox.addEventListener('click', () => {

if (firstNumber == null) {
    firstNumber = 1
    answerBox.innerText = firstNumber
} else {
    secondNumber = 1
    answerBox.innerText = secondNumber
}

})
twoBox.addEventListener('click', () => {

if (firstNumber == null) {
    firstNumber = 2
    answerBox.innerText = firstNumber
} else {
    secondNumber = 2
    answerBox.innerText = secondNumber
}

})
threeBox.addEventListener('click', () => {

if (firstNumber == null) {
    firstNumber = 3
    answerBox.innerText = firstNumber
} else {
    secondNumber = 3
    answerBox.innerText = secondNumber
}

})
fourBox.addEventListener('click', () => {

if (firstNumber == null) {
    firstNumber = 4
    answerBox.innerText = firstNumber
} else {
    secondNumber = 4
    answerBox.innerText = secondNumber
}

})
fiveBox.addEventListener('click', () => {

if (firstNumber == null) {
    firstNumber = 5
    answerBox.innerText = firstNumber
} else {
    secondNumber = 5
    answerBox.innerText = secondNumber
}

})
sixBox.addEventListener('click', () => {

if (firstNumber == null) {
    firstNumber = 6
    answerBox.innerText = firstNumber
} else {
    secondNumber = 6
    answerBox.innerText = secondNumber
}

})
sevenBox.addEventListener('click', () => {

if (firstNumber == null) {
    firstNumber = 7
    answerBox.innerText = firstNumber
} else {
    secondNumber = 7
    answerBox.innerText = secondNumber
}

})
eightBox.addEventListener('click', () => {

if (firstNumber == null) {
    firstNumber = 8
    answerBox.innerText = firstNumber
} else {
    secondNumber = 8
    answerBox.innerText = secondNumber
}

})
nineBox.addEventListener('click', () => {

if (firstNumber == null) {
    firstNumber = 9
    answerBox.innerText = firstNumber
} else {
    secondNumber = 9
    answerBox.innerText = secondNumber
}

})
addBox.addEventListener('click', () => {
operation = "add"
})

multiplyBox.addEventListener('click', () => {
operation = "multiply"
})
equalBox.addEventListener('click', () => {

if (operation == "add") {
    answerBox.innerText = firstNumber + secondNumber
}

if (operation == "multiply") {
    answerBox.innerText = firstNumber * secondNumber
}

})
