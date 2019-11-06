class Card {
  constructor(cardId, image, matchedInfo) {
    this.cardId = cardId;
    this.image = image;
    this.matchedInfo = matchedInfo;
    this.hasFlipped = false;
    this.selected = false;

  }

changeHasFlipped() {
  this.hasFlipped = !this.hasFlipped;
  }

updateSelected() {
  this.selected = !this.selected;
  }
}


//
// matched() {
//     for(var i = 0; i < deck.cards.length; i ++) {
//       if (card.id === deck.cards[i].matchedInfo) {
//         console.log(deck.cards[i]);
//       }
//     }
//   }
// }
