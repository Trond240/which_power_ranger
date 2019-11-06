class Deck {
  constructor(deck) {
  this.cards = deck;
  this.matchedCards = [];
  this.matched = 0;
  this.selectedCards = [];
  }



  checkMatched() {
    console.log(this.selectedCards[0].image);
    console.log(this.selectedCards[1].image);
    if(this.selectedCards[0].image === this.selectedCards[1].image) {
      console.log('made It');
      this.matchedCards.push(this.selectedCards[0]);
      this.matchedCards.push(this.selectedCards[1]);
      console.log(this.matchedCards);
      // this.matches++;
      this.selectedCards = [];
      return true;
    } else {
      this.selectedCards = [];
      return false;
    }
    //
    // resetCards() {
    //   this.selectedCards = [];
    //   this.matchedCards = [];
    //   this.matches = 0;
    //   for (var i = 0; i < this.cards.length; i ++) {
    //     this.card[1].selected = false;
    //   }
    // }
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
