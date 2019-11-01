var playerOne = document.querySelector('.player1');
var playerTwo = document.querySelector('.player2');
var directionsButton = document.querySelector('.game-directions');
var gamePageButton = document.querySelector('.play-game');
var mainButton = document.querySelector('.main-button');
var formSection = document.querySelector('.playerInput');
var mainContainer = document.querySelector('.main-contianer')
var gameContainer = document.querySelector('.game-start')


directionsButton.addEventListener('click', missingInput);
directionsButton.addEventListener('click', gameStartInfo);
// gamePageButton.addEventListener('click', gamePage);

// formSection.addEventListener('click', noPlayer);

// function mainHandler(event) {
//   if(event.target.classList.contains('.main-button')) {
//     gameStartInfo(event);
//     missingInput();
//   }
// }


function missingInput() {
 playerOne.value = '';
 playerTwo.value = '';
 directionsButton.innerHTML = 'MISSING PLAYER NAME';
}


function gameStartInfo() {

  var rulesTemplate = `
  <section class ='game-rules'>
    <h2 class ='welcome'>WELCOME ${playerOne.value}AND ${playerTwo.value}!</h1>
      <p>The goal of the gmae is to find all 5 stars of cards as quickly as possible.
        The player that finds the greatest numbers of pairs, wins.
        To begin playing, the player whose name is highlighted can click any card
        in the card pile. It will flip over and reveal a picture of a Power Ranger.
        click another card. If they match, they will disapear and you will have com-
        pleted a match! If they don't, you'll have three seconds to look at them before
        thry flip back over. Then it's time for the other player to try!
        After you play, you'll see the name of the final winner and how and how long it
        took to win the game.</p>
        <button class ='play-game main-button'>PLAY GAME</button>
  </section>
  `;
    gameContainer.innerHTML = rulesTemplate;
};

function gamePage() {

  var gameTemplate = `
  <section class ='game-page hidden'>
    <aside class='empty'>
    </aside>
    <div class="card-container">
    </div>
    <aside class='empty'>
    </aside>
  </section>
  <section class ='game-over hidden'>
  `;
    gameContainer.innerHTML = gameTemplate;
};
