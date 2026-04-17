const ball = document.createElement('div')
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)

let LPaddleWidth = 20
let LPaddleHeight = 200
const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

let ballXPosition = windowWidth / 2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 8
let ballXDirection = 1
let LPaddleXPosition = 50
let ballYDirection = 1
let LPaddleSpeed = 10
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2

let ballTop
let ballBottom
let ballLeft
let LPaddleTop
let LPaddleBottom
let LPaddleRight

createBall()
createLPaddle()

function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection

    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`

    ballTop = ballYPosition
    ballBottom = ballYPosition + 2 * ballRadius
    ballLeft = ballXPosition

    LPaddleTop = LPaddleYPosition
    LPaddleBottom = LPaddleYPosition + LPaddleHeight
    LPaddleRight = LPaddleXPosition + LPaddleWidth

    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection = ballYDirection * -1
    }

    if (ballXPosition > windowWidth - 2 * ballRadius) {
        ballXDirection = ballXDirection * -1
    }

    if (
        (ballBottom >= LPaddleTop) &&
        (ballTop <= LPaddleBottom) &&
        (ballLeft <= LPaddleRight) &&
        (ballXDirection == -1)
    ) {
        ballXDirection = ballXDirection * -1
    }
}

function createBall() {
    document.body.appendChild(ball)
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "green"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}

function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = 'blue'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = "50px"
    LPaddle.style.top = `${LPaddleYPosition}px`
}

let wKey = false
let sKey = false

document.addEventListener('keydown', (event) =>{
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's'){
        sKey = true
    }
})

document.addEventListener('keyup', (event) =>{
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's'){
        sKey = false
    }
})

function movePaddle() {
    if (wKey == true && LPaddleYPosition > 0){
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight){
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}

function animate () {
    moveBall()
    movePaddle()
    requestAnimationFrame(animate)
}

animate()
