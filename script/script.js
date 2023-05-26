// const flipsCountDisplay = document.querySelector('.flips-count');
// const cards = document.querySelectorAll('.card');
// const refreshBtn = document.querySelector('.refresh-btn');
// const countDownDisplay = document.querySelector('.count-down');//other class


// let matchedCard = 0;
// let flipsCount = 0;
// let timeSecond = 60; //other class
// let timerId;
// let cardOne, cardTwo;
// let disableDeck = false;

// function flipCard(e) {
//     if (timeSecond === 0) {
//         disableDeck = true;
//     } else {
//         let clickedCard = e.target;
//         if (flipsCount === 0) {
//             timerId = setInterval(countDown, 1000);
//         }
//         flipsCount++;
//         flipsCountDisplay.textContent = 'Flips: ' + flipsCount;
//         if (clickedCard !== cardOne && !disableDeck) {
//             clickedCard.classList.add('flip');
//             if (!cardOne) {
//                 return cardOne = clickedCard;
//             }
//             cardTwo = clickedCard;
//             disableDeck = true;
//             let cardOneImg = cardOne.querySelector("img").src;
//             let cardTwoImg = cardTwo.querySelector("img").src;
//             matchCards(cardOneImg, cardTwoImg);
//         }
//     }
// }

// function matchCards(img1, img2) {
//     if (img1 === img2) {
//         matchedCard++;
//         if (matchedCard == 8) {
//             setTimeout(() => {
//                 return shuffleCard();
//             }, 1000);//calling shuffleeCard function after 1 sec
//         }
//         cardOne.removeEventListener('click', flipCard);
//         cardTwo.removeEventListener('click', flipCard);
//         cardOne = cardTwo = "";//setting both card value to blank
//         return disableDeck = false;//returning if the two cards are matched so the bottom code wont run
//     }
//     setTimeout(() => {
//         cardOne.classList.add('shake');
//         cardTwo.classList.add('shake');
//     }, 400);

//     setTimeout(() => {
//         cardOne.classList.remove('shake', 'flip');
//         cardTwo.classList.remove('shake', 'flip');
//         cardOne = cardTwo = "";//setting both card value to blank
//         disableDeck = false;
//     }, 1200);
// };

// function shuffleCard() {
//     matchedCard = 0;
//     flipsCount = 0;
//     cardOne = cardTwo = "";
//     disableDeck = false;
//     //creating array of 16 items and each item is repeated twice
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
//     arr.sort(() => Math.random() > 0.5 ? 1 : -1); //sorting array item randomly
//     // removing flip class from all cards and passing random image to each card 
//     cards.forEach((card, index) => {
//         card.classList.remove('flip');
//         let imgTag = card.querySelector('img');
//         imgTag.src = `./images/card${arr[index]}.jpeg`
//         card.addEventListener('click', flipCard);
//     });
// };

// function countDown() {
//     timeSecond--;
//     countDownDisplay.textContent = 'Time: ' + timeSecond + 's';
//     if (timeSecond === 0) {
//         clearInterval(timerId);
//         countDownDisplay.textContent = 'Time: ' + timeSecond + 's';
//     };
// };

// function refreshGame() {
//     refreshBtn.addEventListener('click', function () {
//         shuffleCard();
//         clearInterval(timerId);
//         timeSecond = 30;
//         countDownDisplay.textContent = 'Time: ' + timeSecond + 's';
//         flipsCountDisplay.textContent = 'Flips: ' + flipsCount;
//     })
// }

// cards.forEach(card => {// adding click event for all cards
//     card.addEventListener('click', flipCard);
// });

// shuffleCard();
// refreshGame();