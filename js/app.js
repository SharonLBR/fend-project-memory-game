/*
 * Create a list that holds all of your cards
 */
let cardHTMLcollection = document.getElementsByClassName('card');
const cardList = Array.prototype.slice.call( cardHTMLcollection );
const deck = document.querySelector('ul.deck');
let openCards = [];
let checkMatch = [];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function restart(){
        changeCardClass(cardList, 'card');
    };


const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', function(){
    shuffle(cardList);
    restart();
});

function cardClick(){
    let clickedCard = event.target
    checkMatch.splice(0, 0, clickedCard);
    changeCardClass(checkMatch, 'card match');
    checkMatchCards();
};

function checkMatchCards(){
    if (checkMatch[0] === checkMatch[1]){
        addToDeck;
        checkMatch.splice(0, 2);
    }else removeEventListener('click', cardClick)};

function addToDeck(){
    deck.splice(0, 0, checkMatch[0], checkMatch[1]);
    changeCardClass('card open show');  
};

function changeCardClass(arrey, newClassName){
        arrey.forEach(function(card){
        card.className = newClassName
    });
};

deck.addEventListener('click', cardClick)

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
