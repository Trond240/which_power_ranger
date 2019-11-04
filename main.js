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
var gameBoardCards =documnt.querySelcteor('.card');

input.addEventListener('keyup', missingInput);
directionsButton.addEventListener('click', insertPlayerNames);
directionsButton.addEventListener('click', removeGameStart);
gamePageButton.addEventListener('click', removeGameRules);
directionsButton.addEventListener('click', insertPlayerNames);



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
}


function insertPlayerNames() {
  welcomePlayers.insertAdjacentHTML('afterbegin',
`<h2 class='welcome'>WELCOME ${playerOne.value.toUpperCase()} AND ${playerTwo.value.toUpperCase()}!</h1>`);
}

function removeGameRules() {
  document.querySelector('.game-rules').classList.add('hidden');
  document.querySelector('.game-page').classList.remove('hidden');
}

function insertGamePageNames() {
  gamePageName.insertAdjacentHTML('afterbegin',
`<h2 class= ${playerOne.value.toUpperCase()}</h2>`);
}

function flipCard() {
  document.querySelcteor('.card-back').classList.add('hidden');
  document.querySelcteor('.card').classList.remove('hidden');  
}
