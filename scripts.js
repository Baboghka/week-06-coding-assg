//Deal 26 Cards to 2 Players from a Deck
//Iterate through the turns where each Player plays a Card
//Award a point to the Player with the higher Card
//Ties result in zero points for both Players
//After all cards have been played, display the score and declare the winner.

//Finally, you will be asked to write a Unit Test using Mocha and Chai for at least one of your functions
// Define the card deck
const deck = ['2 of Hearts', '3 of Hearts', '4 of Hearts', '5 of Hearts', '6 of Hearts', '7 of Hearts', '8 of Hearts', '9 of Hearts', '10 of Hearts', 'Jack of Hearts', 'Queen of Hearts', 'King of Hearts', 'Ace of Hearts',
              '2 of Diamonds', '3 of Diamonds', '4 of Diamonds', '5 of Diamonds', '6 of Diamonds', '7 of Diamonds', '8 of Diamonds', '9 of Diamonds', '10 of Diamonds', 'Jack of Diamonds', 'Queen of Diamonds', 'King of Diamonds', 'Ace of Diamonds'];

// Shuffle the deck of cards
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

// Deal cards for two players
function dealCards(deck) {
  const player1Cards = [];
  const player2Cards = [];
  for (let i = 0; i < deck.length; i++) {
    const card = deck[i];
    if (i % 2 === 0) {
      player1Cards.push(card);
    } else {
      player2Cards.push(card);
    }
  }
  return [player1Cards, player2Cards];
}

// Playing the game and return the score
function playGame(player1Cards, player2Cards) {
  let player1Score = 0;
  let player2Score = 0;
  for (let i = 0; i < player1Cards.length; i++) {
    const player1Card = player1Cards[i];
    const player2Card = player2Cards[i];
    if (player1Card > player2Card) {
      player1Score++;
    } else if (player2Card > player1Card) {
      player2Score++;
    }
  }
  return [player1Score, player2Score];
}

// Show  the score and declare the winner
function displayScore(player1Score, player2Score) {
  console.log('Player 1 score:', player1Score);
  console.log('Player 2 score:', player2Score);
  if (player1Score > player2Score) {
    console.log('Player 1 wins!');
  } else if (player2Score > player1Score) {
    console.log('Player 2 wins!');
  } else {
    console.log('It\'s a tie!');
  }
}

// Test the functions with a sample game
const shuffledDeck = shuffleDeck(deck);
const [player1Cards, player2Cards] = dealCards(shuffledDeck);
const [player1Score, player2Score] = playGame(player1Cards, player2Cards);
displayScore(player1Score, player2Score);

