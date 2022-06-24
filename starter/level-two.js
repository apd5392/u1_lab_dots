/*
 * DOTS: Level Two
 *
 */

let ball = document.querySelector(".js-ball");
let scoreDisplay = document.querySelector(".js-score")
let levelWinner = document.querySelector(".level-winner")

let score = 0;


const elements = document.querySelectorAll('.js-ball');
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function() {
        score += 10
        scoreDisplay.innerText = score
        if (score >= 100) {
            levelWinner.style.opacity = 1
    }  });
};

ball.addEventListener('click', increaseScore)


