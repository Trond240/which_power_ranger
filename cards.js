class Card {
  constructor(card) {
    this.cardId = Number(card.cardId)
    this.matchedInfo = card.matchedInfo;
    this.selected = false;
  }
}
