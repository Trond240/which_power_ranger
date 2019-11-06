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
var gameBoard = document.querySelector('.box2');
var cards = null;
var deck = null;
var flippedCard = false;
var firstCard, secondCard;
var gameCards = document.querySelectorAll('.card');
var timerStart = 0;
var timerStop = 0;
var cleanTime = 0;
var click = 0;

input.addEventListener('click', missingInput);
mainContainer.addEventListener('click', handlerOne);
mainContainer.addEventListener('click', handlerTwo);
gameCards.forEach(card => card.addEventListener('click', flipCard));



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
    dealCards();
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


function flipCard(event) {
  this.classList.add('flip');
  if (!flippedCard) {
     flippedCard = true;
     firstCard = this;
     deck.cards[firstCard.id - 1].changeHasFlipped();
     deck.selectedCards.push(deck.cards[firstCard.id - 1]);
     return;
   } else {
     flippedCard = false;
     secondCard = this;
     deck.cards[secondCard.id - 1].changeHasFlipped();
     deck.selectedCards.push(deck.cards[secondCard.id - 1]);
     checkForMatch();
   }
   deck.checkMatched();
   unflipCards();
};

  function checkForMatch() {
    if (deck.selectedCards[0].image === deck.selectedCards[1].image) {
      setTimeout(() => {
      firstCard.classList.add('hidden');
      secondCard.classList.add('hidden');
      }, 1500);
      console.log('matched');
    }
  }

  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
    }, 1500);
    deck.cards[firstCard.id - 1].changeHasFlipped();
    deck.cards[secondCard.id -1].changeHasFlipped();
  }

function instantiateDeckArray() {
  var cardDeck = [];
  deck = new Deck(cardDeck);
}

function instantiateCardArray() {
    var boardCards = document.querySelectorAll('.card');
    var cardMatches = ['./red.jpeg', './blue.jpeg', './yellow.jpeg', './pink.jpeg', './black.jpeg', './red.jpeg', './blue.jpeg', './yellow.jpeg', './pink.jpeg', './black.jpeg'];

    console.log(deck);
    for (var i = 0; i < cardMatches.length; i++) {
    var cards = new Card(i + 1, cardMatches[i], cardMatches[i]);
  deck.cards.push(cards);
  }
};

function dealCards() {
  deck.shuffle(deck.cards);
  for(var i = 0; i < deck.cards.length; i++) {
    gameBoard.insertAdjacentHTML ('afterbegin',
        `<div class='card card-${i + 1}' id=${i + 1}>
          <img class='front'src="${deck.cards[i].image}" alt="red" data-id="${i}">
          <img class='back' src="rangers-logo.jpeg" alt="memory card">
        </div>
        `)
        }
        var gameCards = document.querySelectorAll('.card');
        gameCards.forEach(card => card.addEventListener('click', flipCard));
      };

    function gameTime() {
    var stopTime = timerStop - timerStart;
    var timeSeconds = stopTime / 1000;
    cleanTime = timeSeconds.toFixed(1)
}
