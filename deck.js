class Deck {
  constructor(deck) {
  this.cards = deck;
  this.matchedCards = [];
  this.matched = 0;
  this.selectedCards = [];
  this.selected = false;
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
  }
    selectCards(clickedCard) {
    for (var i = 0; i < deck.cards.length; i++) {
    if (this.cards[i].id === clickedCard) {
      this.selectedCards.push(this.cards[i]);
    }
  }
}
}
