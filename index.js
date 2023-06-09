const difficultyBtn = document.querySelectorAll(".difficultyBtn");
const homePageContainer = document.querySelector(".home-page-container");
const gameContainer = document.querySelector(".game-container");
const difficultyWord = document.querySelector(".difficultyTitle");
const restartBtn = document.querySelector(".restart");
difficultyBtn.forEach((el) =>
  el.addEventListener("click", () => {
    difficultyWord.textContent = `Current Difficulty: ${el.textContent}`;
    homePageContainer.classList.add("hidden");
    gameContainer.classList.remove("hidden");
    createGame(el.textContent);
    setTimeout(() => scrollTo({ top: 999, behavior: "smooth" }), 100);
  })
);

restartBtn.addEventListener("click", () => {
  window.location.reload();
});
