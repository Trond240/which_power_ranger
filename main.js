var playerOne = document.querySelector('.player-One');
var playerTwo = document.querySelector('.player-Two');
var input = document.querySelector('input');
var directionsButton = document.querySelector('.game-directions');
var gamePageButton = document.querySelector('.play-game');
var mainButton = document.querySelector('.main-button');
var formSection = document.querySelector('.playerInput');
var mainContainer = document.querySelector('.main-contianer');
var gameContainer = document.querySelector('.game-start');
var ruleContainer = document.querySelector('.game-rules');
var welcomePlayers = document.querySelector('.welcome-div');
var gamePageName = document.querySelector('.p-1-game');
var cards = null;
var deck = null;
var  gameCards = document.querySelector('.card');
gameCards.addEventListener( 'click', function() {
  gameCards.classList.toggle('is-flipped');
});

input.addEventListener('keyup', missingInput);
directionsButton.addEventListener('click', insertPlayerNames);
directionsButton.addEventListener('click', removeGameStart);
gamePageButton.addEventListener('click', removeGameRules);
gamePageButton.addEventListener('click', instantiateDeckArray);
gamePageButton.addEventListener('click', instantiateCardArray);
gameCards.addEventListener('click', flipCard);



// function mainHandler() {
//     missingInput();
//     // removeGameStart();
//     // removeGameRules()
// }

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
  // document.querySelector('.back').classList.toggle('hidden');
  // document.querySelector('.front').classList.toggle('hidden');
};

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
