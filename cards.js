class Card {
  constructor(cardId, image, matchedInfo) {
    this.cardId = cardId;
    this.image = image;
    this.matchedInfo = matchedInfo;
    this.matched = false;
    this.selected = false;
    this.hasFlipped = false;

  }



changeHasFlipped() {
  this.hasFlipped = !this.hasFlipped;
}
  // updateSeleted(deck) {
  //   this.selected = !this.selected;
  //   if (this.selected === true) {
  //     deck.selectedCards.push(this);
  //   }else{
  //     deck.selectedCards.splice(deck.selectedCards.indexOf(this), 1);
  //     }
  //   }

  matched() {
  //   for(var i = 0; i < deck.cards.length; i ++) {
  //     if (firstCard.id === deck.cards[i].matchedInfo) {
  //       console.log(deck.cards[i]);
  //       return deck.cards[i];
  //     }
  }
}
