var playerOne = document.querySelector('.player-One');
var playerTwo = document.querySelector('.player-Two');
var input = document.querySelector('input');
var directionsButton = document.querySelector('.game-directions');
var gamePageButton = document.querySelector('.play-game');
var mainButton = document.querySelector('.main-button');
var formSection = document.querySelector('.playerInput');
var mainContainer = document.querySelector('.main-container');
var gameContainer = document.querySelector('.game-start');
var ruleContainer = document.querySelector('.game-rules');
var welcomePlayers = document.querySelector('.welcome-div');
var gamePageName = document.querySelector('.p-1-game');
var gamePage = document.querySelector('.game-page');
var cards = null;
var deck = null;
var hasFlippedCard = false;
var firstCard, secondCard;
// var  gameCards = document.querySelector('.card');
// gameCards.addEventListener( 'click', function() {
//   gameCards.classList.toggle('is-flipped');
// });
var gameCards = document.querySelectorAll('.card');

input.addEventListener('click', missingInput);
mainContainer.addEventListener('click', handlerOne);
mainContainer.addEventListener('click', handlerTwo);
// gamePage.addEventListener('click', flipTwoOnly);
gameCards.forEach(card => card.addEventListener('click', flipCard));
// gameCards.addEventListener('click', flipCard);



function handlerOne(event) {
  event.preventDefault();
  if (event.target.classList.contains('game-directions')) {
    removeGameStart();
    insertPlayerNames();
  }
}
function handlerTwo(event) {
  event.preventDefault();
  if (event.target.classList.contains('play-game')) {
    removeGameRules();
    instantiateDeckArray();
    instantiateCardArray();
    insertNames();
  }
}

function gameHandler(event) {
  if(event.target.classList.contains('card')) {
    console.log(event.target);
    flipCard();
  }
}

function missingInput() {
  playerOne.value === "" &&
  playerTwo.value === "";
  directionsButton.disabled = false;
  directionsButton.innerText = `MISSING PLAYER NAME!`;
 };

function removeGameStart() {
  document.querySelector('.game-start').classList.add('hidden');
  document.querySelector('.game-rules').classList.remove('hidden');
};


function insertPlayerNames() {
  welcomePlayers.insertAdjacentHTML('afterbegin',
`<h2 class='welcome'>WELCOME ${playerOne.value.toUpperCase()} AND ${playerTwo.value.toUpperCase()}!</h1>`);
}

function insertNames() {
  gamePageName.insertAdjacentHTML('afterbegin',
`<h3>${playerOne.value.toUpperCase()}</h3>`);
}

function removeGameRules() {
  document.querySelector('.game-rules').classList.add('hidden');
  document.querySelector('.game-page').classList.remove('hidden');
};


function flipCard() {
  // this.classList.toggle('flip');
  this.classList.add('flip');
  if (!hasFlippedCard) {
     hasFlippedCard = true;
     firstCard = this;
     return;
    }

    secondCard = this;
    hasFlippedCard = false;

    checkForMatch();
  }

  function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      return;
    }

    unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  }

  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
    }, 1500);
  }

function instantiateDeckArray() {
  var cardDeck = [];
  deck = new Deck(cardDeck);
}

function instantiateCardArray() {
    var boardCards = document.querySelectorAll('.card');
    console.log(deck);
    for (var i = 0; i < boardCards.length; i++) {
    var cards = new Card({cardId: boardCards[i].dataset.id, matchedInfo: "card" + [i]});
  deck.cards.push(cards);
  }
};
