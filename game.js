let firstCard = getNum()
let secondCard = getNum()
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
const add = document.querySelector(".sum-element")
const card1 = document.querySelector(".card-element")
const display = document.getElementById('out-1')
// console.log(display)

function renderGame() {
    card1.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i++) {
        card1.textContent += cards[i] + " "
    }
    if(sum < 21) {
    message = "wanna play a round"
}else if(sum === 21) {
    message = "wahoo! you have got blackjack"
    hasBlackJack = true
}else{
    message = "You are out of the game"
    isAlive = false
}
display.textContent = message
add.textContent = "sum: " + sum
card.textContent = "card: " + firstCard + " " + secondCard 
}
console.log(hasBlackJack)
console.log(isAlive)

let cards = [firstCard, secondCard]
function newCard() {
    let card = getNum()
    sum += card
    cards.push(card)
    renderGame()
}
function startGame() {
    renderGame()
}

function getNum() {
   return Math.floor(Math.random() * 13) + 1
}
// let a = Math.floor((Math.random()) * 6) + 1
// console.log(a)

 const addWords = {
    add1 : "Per",
    add2 : 100, 
    element2 : document.querySelector(".num-one")
 }
 addWords.element2.innerText = addWords.add1 + ": $" + addWords.add2


