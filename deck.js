class Deck {
  constructor(deck) {
  this.cards = deck;
  this.matchedCards = [];
  this.matched = 0;
  this.selectedCards = [];
  }



  checkMatched() {
    if(this.selectedCards[0].image === this.selectedCards[1].image) {
      this.matchedCards.push(this.selectedCards[0]);
      this.matchedCards.push(this.selectedCards[1]);
      this.matched++;
      hideCards();
      congrats();
      this.selectedCards = [];
      return true;
    } else {
      this.selectedCards = [];
      return false;
    }
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
};
