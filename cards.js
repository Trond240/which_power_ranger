class Card {
  constructor(cardId, image, matchedInfo) {
    this.cardId = cardId;
    this.image = image;
    this.matchedInfo = matchedInfo;
    this.matched = false;
    this.hasFlipped = false;

  }



changeHasFlipped() {
  this.hasFlipped = !this.hasFlipped;
  }
};


//   matched() {
//   //   for(var i = 0; i < deck.cards.length; i ++) {
//   //     if (firstCard.id === deck.cards[i].matchedInfo) {
//   //       console.log(deck.cards[i]);
//   //       return deck.cards[i];
//   //     }
//   }
// }
