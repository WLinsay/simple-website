document.addEventListener("DOMContentLoaded", function () {
    // Initialize score from localStorage if available
    let score = parseInt(localStorage.getItem("clickScore")) || 0;

    const scoreDisplay = document.getElementById("score");
    const button = document.getElementById("clickButton");
    const restartButton = document.getElementById("restartButton");

    // Display the stored score
    scoreDisplay.textContent = score;

    button.addEventListener("click", function () {
        score++;
        scoreDisplay.textContent = score;
        localStorage.setItem("clickScore", score); // Save to localStorage
    });

    restartButton.addEventListener("click", function () {
        score = 0;
        scoreDisplay.textContent = score;
        localStorage.setItem("clickScore", score);
    });
});
