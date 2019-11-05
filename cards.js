class Card {
  constructor(card) {
    this.cardId = Number(card.cardId)
    this.matchedInfo = card.matchedInfo;
    this.matched = false;
  }

  matched() {
    this.matched = !this.matched;
  }
}
