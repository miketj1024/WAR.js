

// Define the Card class
class Card {
    constructor(rank, suit) {
      this.rank = rank;
      this.suit = suit;
    }
  }
  
  // Define the Deck class
  class Deck {
    constructor() {
      this.cards = [];
      this.build();
    }
    
    build() {
      const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      
      for (let suit of suits) {
        for (let rank of ranks) {
          this.cards.push(new Card(rank, suit));
        }
      }
    }
    
    shuffle() {
      let currentIndex = this.cards.length;
      let temporaryValue, randomIndex;
  
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = this.cards[currentIndex];
        this.cards[currentIndex] = this.cards[randomIndex];
        this.cards[randomIndex] = temporaryValue;
      }
    }
    
    deal() {
      return this.cards.pop();
    }
  }
  
  // Define the Player class
  class Player {
    constructor(name) {
      this.name = name;
      this.score = 0;
      this.hand = [];
    }
    
    addCard(card) {
      this.hand.push(card);
    }
    
    playCard() {
      return this.hand.pop();
    }
  }
  
  // Define the Game class
  class Game {
    constructor() {
      this.deck = new Deck();
      this.player1 = new Player('Player 1');
      this.player2 = new Player('Player 2');
      this.rounds = 0;
      this.maxRounds = 26;
    }
    
    dealCards() {
      this.deck.shuffle();
      while (this.deck.cards.length > 0) {
        this.player1.addCard(this.deck.deal());
        this.player2.addCard(this.deck.deal());
      }
    }
    
    playRound() {
      const card1 = this.player1.playCard();
      const card2 = this.player2.playCard();
      
      console.log(`${this.player1.name} played ${card1.rank} of ${card1.suit}`);
      console.log(`${this.player2.name} played ${card2.rank} of ${card2.suit}`);
      
      if (this.compareCards(card1, card2) > 0) {
        console.log(`${this.player1.name} wins this round`);
        this.player1.score++;
      } else if (this.compareCards(card1, card2) < 0) {
        console.log(`${this.player2.name} wins this round`);
        this.player2.score++;
      } else {
        console.log('Tie');
      }
      
      this.rounds++;
    }
    
    compareCards(card1, card2) {
      const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
      
      if (ranks.indexOf(card1.rank) > ranks.indexOf(card2.rank)) {
        return 1;
      } else if (ranks.indexOf(card1.rank) < ranks.indexOf(card2.rank)) {
        return -1;
      } else {
        return 0;
      }
    }
}


const game = new Game();

// Deal cards to players
game.dealCards();

while (game.rounds < game.maxRounds) {
    console.log(`Round ${game.rounds + 1}`);
    game.playRound();
  }
  console.log(`\nGame over! ${game.player1.name} scored ${game.player1.score} and ${game.player2.name} scored ${game.player2.score}`);
if (game.player1.score > game.player2.score) {
  console.log(`${game.player1.name} wins!`);
} else if (game.player1.score < game.player2.score) {
  console.log(`${game.player2.name} wins!`);
} else {
  console.log('Tie game!');
}