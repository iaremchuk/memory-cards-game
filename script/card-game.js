class CardGame {
    constructor() {
        this.cards = document.querySelectorAll('.card');
        this.flipsCountDisplay = document.querySelector('.flips-count');
        this.refreshBtn = document.querySelector('.refresh-btn');
        this.matchedCard = 0;
        this.flipsCount = 0;
        this.cardOne = null;
        this.cardTwo = null;
        this.disableDeck = false;
        this.countDown = new CountDown();
        this.shuffleCard = this.shuffleCard.bind(this);
        this.refreshGame = this.refreshGame.bind(this);
        this.flipCard = this.flipCard.bind(this);
        this.cards.forEach(card => {// adding click event for all cards
            card.addEventListener('click', this.flipCard);
        });
        this.shuffleCard();
        this.refreshGame();
    }

    flipCard(e) {
        if (this.countDown.timeSecond === 0) {
            this.disableDeck = true;
        } else {
            let clickedCard = e.target;
            if (this.flipsCount === 0) {
                this.countDown.timerId = setInterval(this.countDown.startCountDown, 1000);
            };
            this.flipsCount++;
            this.flipsCountDisplay.textContent = 'Flips: ' + this.flipsCount;
            if (clickedCard !== this.cardOne && !this.disableDeck) {
                clickedCard.classList.add('flip');
                if (!this.cardOne) {
                    //return the cardOne value of the clickedCard
                    return this.cardOne = clickedCard;
                };
                this.cardTwo = clickedCard;
                this.disableDeck = true;
                let cardOneImg = this.cardOne.querySelector("img").src;
                let cardTwoImg = this.cardTwo.querySelector("img").src;
                this.matchCards(cardOneImg, cardTwoImg);
            };
        };
    }

    matchCards(img1, img2) {
        if (img1 === img2) {//if two cards images match
            this.matchedCard++;
            if (this.matchedCard == 8) {
                clearInterval(this.countDown.timerId);
                setTimeout(() => {
                    return this.updateGameState();
                }, 4000);//calling shuffleCard function after 2 sec
            };
            this.cardOne.removeEventListener('click', this.flipCard);
            this.cardTwo.removeEventListener('click', this.flipCard);
            // this.cardOne = this.cardTwo = "";//setting both card value to blank
            this.cardOne = null;
            this.cardTwo = null;
            return this.disableDeck = false;
        };
        //if two cards do not match
        setTimeout(() => {
            //adding shake class to both card after 300ms
            this.cardOne.classList.add('shake');
            this.cardTwo.classList.add('shake');
        }, 300);

        setTimeout(() => {
            //remove both shake and flip classes from both cards after 900ms
            this.cardOne.classList.remove('shake', 'flip');
            this.cardTwo.classList.remove('shake', 'flip');
            // this.cardOne = cardTwo = "";//setting both card value to blank
            this.cardOne = null;
            this.cardTwo = null;
            this.disableDeck = false;
        }, 900);
    }

    shuffleCard() {
        this.matchedCard = 0;
        this.flipsCount = 0;
        // this.cardOne = this.cardTwo = "";
        this.cardOne = null;
        this.cardTwo = null;
        this.disableDeck = false;
        //creating array of 16 items and each item is repeated twice
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
        arr.sort(() => Math.random() > 0.5 ? 1 : -1); //sorting array item randomly
        // removing flip class from all cards and passing random image to each card 
        this.cards.forEach((card, index) => {
            card.classList.remove('flip');
            let imgTag = card.querySelector('img');
            imgTag.src = `./images/card${arr[index]}.jpeg`;
            card.addEventListener('click', this.flipCard);
        });
    }

    updateGameState() {
        this.shuffleCard();
        clearInterval(this.countDown.timerId);
        this.countDown.timeSecond = 60;
        this.countDown.countDownDisplay.textContent = 'Time: ' + this.countDown.timeSecond + 's';
        this.flipsCountDisplay.textContent = 'Flips: ' + this.flipsCount;
    }

    refreshGame() {
        this.refreshBtn.addEventListener('click', () => {
            this.updateGameState();
        });
    }
}
new CardGame();