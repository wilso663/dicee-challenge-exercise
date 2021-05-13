//Get a single dice face number as an integer, by its class name
function getDiceFace(className){
  let imgSrc = document.getElementsByClassName(className)[0].src;
  let dieFaceNumber = parseInt(imgSrc.slice(-5,-4));
  return dieFaceNumber;
}
//Helper function to get both of the dice faces as numbers
function getDiceFaces(){
  let diceOne = getDiceFace('img1');
  let diceTwo = getDiceFace('img2');
  return [diceOne,diceTwo];
}

//Function to get the text to apply to h1 with winnerText ID
function getWinnerText(){
  let diceFaces = getDiceFaces();
  let winnerText = "";
  if(diceFaces[0] === diceFaces[1]){
    winnerText = "Tie Game!";
  } else if (diceFaces[0] > diceFaces[1]){
    winnerText = "Player One Wins!";
  } else {
    winnerText = "Player Two Wins!";
  }
  return winnerText;
}
//Game function - rolls dice and displays winner in winnerText
//-Requirement of never having the same dice roll twice because it looks like the button
//isn't functioning when clicked
function rollDie(className) {
  let randomDieFace = Math.floor(Math.random() * 6) + 1;
  let dieFaceNumber = getDiceFace(className);

  while(dieFaceNumber === randomDieFace){ //Never repeat a dice face
    randomDieFace = Math.floor(Math.random() * 6) + 1;
  }
  let dieFaceSource = "images/dice" + randomDieFace + ".png";
  var img = document.getElementsByClassName(className)[0];
  img.setAttribute('src',dieFaceSource);
  
  var scoreText = document.getElementById("winnerText");
  let winnerText = getWinnerText();
  scoreText.textContent = winnerText;
}

//Game function call
function diceRoll(){
  rollDie('img1');
  rollDie('img2');
}
//On click bindings
document.getElementsByClassName('img1')[0].addEventListener('click', diceRoll);
document.getElementsByClassName('img2')[0].addEventListener('click', diceRoll);