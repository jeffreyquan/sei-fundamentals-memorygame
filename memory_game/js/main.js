const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
var score = 0;

function updateScore() {
	document.getElementById('score').innerHTML = "Score: " + score;
}

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
				alert("You found a match!");
				score = score + 1;
				updateScore();
			} else {
				alert("Sorry, try again.");
			}
}

function flipCard() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage)
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}


function clearCardsInPlay() {
	cardsInPlay = [];
}

function resetBoard() {
	clearCardsInPlay();
	var images = document.getElementById('game-board');
	while (images.firstChild) {
		images.removeChild(images.firstChild);
	}
	createBoard();
}

function resetGame() {
	var reset = document.getElementById("reset-board");
	reset.addEventListener('click',resetBoard);
}

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src',"images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);	
	}
	document.getElementById('score').innerHTML = "Score: " + score;
}

createBoard();
resetGame();