document.addEventListener("DOMContentLoaded", function () {
    let score = parseInt(localStorage.getItem("clickScore")) || 0;

    const scoreDisplay = document.getElementById("score");
    const button = document.getElementById("clickButton");
    const restartButton = document.getElementById("restartButton");

    scoreDisplay.textContent = score;

    button.addEventListener("click", function () {
        score++;
        scoreDisplay.textContent = score;
        localStorage.setItem("clickScore", score); 
    });

    restartButton.addEventListener("click", function () {
        score = 0;
        scoreDisplay.textContent = score;
        localStorage.setItem("clickScore", score);
    });
});
