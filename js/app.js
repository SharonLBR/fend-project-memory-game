/*
 * Create a list that holds all of your cards
 */
let cardList = document.querySelectorAll('.card');
let card;
let openCards = [];
let checkMatch = [];
const restartButton = document.querySelector('.restart');

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
};

function changeCardClass(arrey, newClassName){
        arrey.forEach(function(card){
        card.className = newClassName
    });
};

restartButton.addEventListener('click', function(){
    changeCardClass(cardList, 'card');
    shuffle(cardList);
    addEvent();
    checkMatch = [];
    openCards = [];
});

function addEvent(){
cardList.forEach(function(card){
    card.addEventListener('click', cardClick)
})};

function cardClick(event){
    event.target.className = 'card match';
    let symbol = event.target.querySelector('i');
    checkMatch.splice(0, 0, symbol);
    event.target.removeEventListener('click', cardClick);
};

if (checkMatch.length === 2){
        if (checkMatch[0].className === checkMatch[1].className){
            openCards.splice(0, 0, checkMatch[0].parentElement checkMatch[1].parentElement);
        }else (checkMatch = [];)
}


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
