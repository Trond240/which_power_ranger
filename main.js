var playerOne = document.getElementById('p-1-input');
var playerTwo = document.getElementById('p-2-input');
// var newPlayer1 = document.querySelector();
// var newPlayer2 = document.querySelector();
var playGame = document.querySelector('.play-game');
var button = document.getElementById('play-button');
var main = document.querySelector('.play-game')


// document.querySelector('.play-game').addEventListener('click', noPlayer);
main.addEventListener('click', noPlayer);
// document.querySelector('.input-container').addEventListener('click', changeInnerHTML);

//funtion for players to enter names.
// function enterName() {
//   playerOne.innerText = newPlayer1.value;
//   playerTwo.innerText = newPlayer2.value;
// };

//create text alert for when both inout one or input 2 are empty.
function noPlayer() {
playGame.innerText = `MISSING PLAYER NAME!`;
   if (playerOne.value === "" ||
 playerTwo.value === "");
 // playGame.innerText = `MISSING PLAYER NAME!`; {
 };

//Create function that creates the ability to toggel between html elements.

// function changeInnerHTML() {
//   var playButton = document.createElement('player-input');
//   playButton.innerHTML = `
//       <h1 class = 'welcome'>WELCOME <span>PLAYER 1 NAME</span> AND <span>PLAYER 2 NAME!</span></h1>
//         <p>The goal of the game is to find all 5 pairs of the crads as quickly as possible.
//         the player that finds the greatest numbers of pairs, wins.<br>
//         To begin playing, the player whose names is highlighted can click any card. It will flip
//         over and reveala picture of a Power Ranger. Click another card. If they match, they will
//         disappear and you will have comleted a match! If they don't, you'll have three seconds
//         to look at them before they flip back over. Then it's time for the other player to try!<br>
//         After you play, you'll see the name of the final winner and how long it took to win the game.
//         `;
// };
