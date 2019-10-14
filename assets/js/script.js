const cards = document.querySelectorAll('.cardGame')

let hasFlippedCard = false;
let firstCard, secondCard;
let boardLock = false;



flipCard = function(){
	if(boardLock) return;

	
	this.classList.add('clicked')

	if(!hasFlippedCard){
		hasFlippedCard = true;
		firstCard = this;
		// console.log({hasFlippedCard, firstCard})
	}
	else{
		hasFlippedCard = false;
		secondCard = this;
		matchChecking();	
	}




}

matchChecking = function(){

		if(firstCard.dataset.name === secondCard.dataset.name){
			sameCards();
		}

		else{
			differentCards();
		}
}

sameCards = function(){
		firstCard.removeEventListener('click', flipCard);
		secondCard.removeEventListener('click', flipCard);
}

differentCards = function(){
	boardLock = true;
		setTimeout(() => {
			firstCard.classList.remove('clicked');
			secondCard.classList.remove('clicked');
			boardLock = false;
		}, 1500)	
		
}

shuffle = function(){
	cards.forEach(card => {
		let randomPos = Math.floor(Math.random() *12);
		card.style.order = randomPos;
	})
}
cards.forEach(card => card.addEventListener('click', flipCard));
shuffle()