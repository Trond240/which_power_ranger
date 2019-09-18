var innerHTML = document.getElementById('#inner-HTML');
var playerOne = document.getElementById('p-1-input');
var playerTwo = document.getElementById('p-2-input');
var playGame = document.querySelector('.play-game-button');
// var button = document.getElementById('play-button');
var mainContainer = document.querySelector('.main-container');
// var startGameButton = <button class="start-game-button">Start Game</button>;
// var gamePageButton = <button class="start-game-button">Play Game</button>;


// document.querySelector('.play-button').addEventListener('click', gameStartInfo);
document.querySelector('.play-game-button').addEventListener('click', noPlayer);
// document.querySelector('.input-container').addEventListener('click', changeInnerHTML);
// document.querySelector('.play-game-button').addEventListener('click', gameStartInfo);
// document.querySelector('.start-game-button').addEventListener('click', gamePage);

//create text alert for when both inout one or input 2 are empty.
function noPlayer() {
playGame.innerText = `MISSING PLAYER NAME!`;
   if (playerOne.value === "" ||
 playerTwo.value === "");
 };

//Create function that creates the ability to toggel and hide html elements.
//page1- enter name, page2- welcome, page3- cards, page-4 winner page.

function gameStartInfo(event) {
  event.preventDefault();
  var gameStartTemplate = `
  <article class = 'box-1' id = 'box1'></article>
  <article class ='box-2' id = 'box2'>
    <p class = 'welcome'>WELCOME
      <span>${playerOne.value}</span>AND
      <span>${playerTwo.value}!</span>
   </p>
   <p class = 'directions'>The goal of the game is to find all 5 pairs of the crads as quickly as possible.
      the player that finds the greatest numbers of pairs, wins.<br>
      To begin playing, the player whose names is highlighted can click any card. It will flip
      over and reveala picture of a Power Ranger. Click another card. If they match, they will
      disappear and you will have comleted a match! If they don't, you'll have three seconds
      to look at them before they flip back over. Then it's time for the other player to try!
      <br>
      After you play, you'll see the name of the final winner and how long it took to win the game.
      <button class ='start-game-button' id ='play-button'>PLAY GAME</button>
      </article>
  <article class ='box-3' id ='box3'></article>
  `;

   var startGameButton = document.querySelector('.start-game-button')

    mainContainer.innerHTML = gameStartTemplate;
};

document.querySelector('.start-game-button').addEventListener('click', gameStartInfo);

function gamePage() {
  console.log('this');
  event.preventDefault();
  var gamePageTemplate = `
  <article class = 'box-1' id = 'box1'>
  <h3>${playerOne.value}</h3>
  <h3>Matches this Round</h3>
  <p>5</p>
  <h3>GAME WINS</h3>
  <p>Round 1</p>
  <p>Round 2</p>
  </article>
  <article class ='box-2' id = 'box2'>
  <button id = 'card-one'>card1</buton>
  <button id = 'card-two'>card2</buton>
  <button id = 'card-three'>card3</buton>
  <button id = 'card-four'>card4</buton>
  <button id = 'card-five'>card5</buton>
  <button id = 'card-six'>card6</buton>
  <button id = 'card-seven'>card7</buton>
  <button id = 'card-eight'>card8</buton>
  <button id = 'card-nine'>card9</buton>
  <button id = 'card-ten'>card10</buton>
  </article>
  <article class ='box-3' id ='box3'>
  <h3>${playerTwo.value}</h3>
  <h3>Matches this Round</h3>
  <p>5</p>
  <h3>GAME WINS</h3>
  <p>Round 1</p>
  <p>Round 2</p>
  </article>
  `;

  // var gamePageButton = document.querySelector('.start-game-button').addEventListener('click', gamePage)

  mainContainer.innerHTML = gamePageTemplate;
};

// startGameButton.addEventListener('click', gamePage);
