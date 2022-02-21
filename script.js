function rollDice() {
  // Generate a random number from 1 to 6
  const firstRandomNumber = Math.floor(Math.random() * 6) + 1
  // Images/dice1.png up to dice6.png
  const firstDiceImage = 'assets/dice' + firstRandomNumber + '.png'

  document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage)

  // Generate a random number from 1 to 6
  const secondRandomNumber = Math.floor(Math.random() * 6) + 1
  // Images/dice1.png up to dice6.png
  const secondDiceImage = 'assets/dice' + secondRandomNumber + '.png'

  document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage)

  // Logic for winner
  if (firstRandomNumber > secondRandomNumber) {
    document.querySelector('h1').innerHTML = 'The Winner is Player 1!'
  } else if (firstRandomNumber < secondRandomNumber) {
    document.querySelector('h1').innerHTML = 'The Winner is Player 2!'
  } else {
    document.querySelector('h1').innerHTML = "It's a draw!"
  }
}

rollDice()

/* BUTTON EFFECT */
