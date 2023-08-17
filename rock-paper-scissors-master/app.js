const rond = document.querySelectorAll('.rond')
let img = ["./images/icon-paper.svg", "./images/icon-scissors.svg", "./images/icon-rock.svg"]
let values = ["paper", "scissors", "rock"]
const contentchose = document.querySelector('.content-chose')
const leftTake = document.querySelector('.left-take')
const rightTake = document.querySelector('.right-take')
const contentTake = document.querySelector('.content-take')
const scoreNumber = document.querySelector('.score-number') 
let player = ""
const result = document.querySelector('.result')
const playAgain = document.querySelector('.play-again')

rond.forEach((rond, index) => {
    rond.addEventListener('click', () => {
        contentchose.style.display = "none"
        contentTake.classList.add('active')
        let newDivRond = document.createElement('div')
        newDivRond.classList.add('rond' + index)
        newDivRond.setAttribute('data-value', values[index])
        leftTake.appendChild(newDivRond)
        let newImg = document.createElement('img')
        newImg.src = img[index]
        newDivRond.appendChild(newImg)
        player = rond.getAttribute('data-value')

        let computer = randomComputerChoice()
        let result = compare(player, computer)
        playAgaine()
    })
})


function randomComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    let newDivRond2 = document.createElement('div')
    newDivRond2.classList.add('rond' + random)
    rightTake.appendChild(newDivRond2)
    let newImg2 = document.createElement('img')
    newImg2.src = img[random]
    newDivRond2.appendChild(newImg2)
    let computer = values[random]
    return computer
}

function compare(player, computer){
    if(player === computer){
        result.innerHTML = "DRAW"
    } else if(player === "paper" && computer === "rock"){
        result.innerHTML = "YOU WIN"
        scoreNumber.innerHTML++
    } else if(player === "scissors" && computer === "paper"){
        result.innerHTML = "YOU WIN"
        scoreNumber.innerHTML++
    } else if(player === "rock" && computer === "scissors"){
        result.innerHTML = "YOU WIN"
        scoreNumber.innerHTML++
    } else {
        result.innerHTML = "YOU LOSE"
        scoreNumber.innerHTML--
    }
}

function playAgaine(){
    playAgain.addEventListener('click', () => {
        contentchose.style.display = "flex"
        contentTake.classList.remove('active')
        let titlePlayer = document.createElement('div')
        titlePlayer.classList.add('title')
        titlePlayer.innerHTML = "YOU PICKED"
        let titleComputer = document.createElement('div')
        titleComputer.classList.add('title')
        titleComputer.innerHTML = "THE HOUSE PICKED"

        leftTake.innerHTML = ""
        rightTake.innerHTML = ""

        leftTake.appendChild(titlePlayer)
        rightTake.appendChild(titleComputer)
    })
}