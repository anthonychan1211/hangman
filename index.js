const difficultyBtn = document.querySelectorAll(".difficultyBtn");
const homePageContainer = document.querySelector(".home-page-container");
const gameContainer = document.querySelector(".game-container");
const difficultyWord = document.querySelector(".difficultyTitle");

difficultyBtn.forEach((el) =>
  el.addEventListener("click", () => {
    difficultyWord.textContent = `Current Difficulty: ${el.textContent}`;
    homePageContainer.classList.add("hidden");
    gameContainer.classList.remove("hidden");
    createGame(el.textContent);
    scrollTo({
      top: 9999,
      behavior: "smooth",
    });
  })
);
