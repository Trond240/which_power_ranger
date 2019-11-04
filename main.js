var playerOne = document.querySelector('.player1');
var playerTwo = document.querySelector('.player2');
var directionsButton = document.querySelector('.game-directions');
var gamePageButton = document.querySelector('.play-game');
var mainButton = document.querySelector('.main-button');
var formSection = document.querySelector('.playerInput');
var mainContainer = document.querySelector('.main-contianer');
var gameContainer = document.querySelector('.game-start');
var ruleContainer = document.querySelector('.game-rules');


// directionsButton.addEventListener('click', mainHandler);
directionsButton.addEventListener('click', removeGameStart);
gamePageButton.addEventListener('click', removeGameRules);

// function mainHandler() {
//     missingInput();
//     removeGameStart();
//
//     removeGameRules()
// }

function missingInput() {
 playerOne.value = '';
 playerTwo.value = '';
 directionsButton.innerHTML = 'MISSING PLAYER NAME';
 directionsButton.disabled = true;
}

function removeGameStart() {
  document.querySelector('.game-start').classList.add('hidden');
  document.querySelector('.game-rules').classList.remove('hidden');
}

function removeGameRules() {
  document.querySelector('.game-rules').classList.add('hidden');
  document.querySelector('.game-page').classList.remove('hidden');
}
