

        function rotateButton(){
    restartButton.style.cssText = '-ms-transform: rotate(720deg); -webkit-transform: rotate(720deg); transform: rotate(720deg);'
}



};

function checkMatchCards(){
    if (checkMatch[0].className === checkMatch[1].className){
        addToOpenDeck;
        checkMatch.splice(0, 2);
    }else (checkMatch[0].parentElement.className = 'card');
};

function addToOpenDeck(){
    openCards.splice(0, 0, checkMatch[0].parentElement, checkMatch[1].parentElement);
    changeCardClass('card open show');  
};