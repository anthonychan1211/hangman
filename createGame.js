const easyWordList = [
  "piano",
  "apple",
  "heart",
  "music",
  "grape",
  "house",
  "phone",
  "brush",
  "happy",
  "black",
  "chair",
  "glass",
  "beach",
  "green",
  "knife",
  "light",
  "dream",
  "smile",
  "ocean",
  "tiger",
  "night",
  "zebra",
  "toast",
  "quiet",
  "spark",
  "juice",
  "fence",
  "lemon",
  "magic",
  "bloom",
  "space",
  "crown",
  "cloud",
  "heart",
  "spoon",
  "mouse",
  "pizza",
  "clock",
  "storm",
  "faith",
  "teeth",
  "wings",
  "music",
  "plant",
  "smoke",
  "skate",
  "beard",
  "grace",
  "honey",
];

const mediumWordList = [
  "freedom",
  "guitar",
  "journey",
  "fortune",
  "biscuit",
  "monster",
  "diamond",
  "sunrise",
  "evening",
  "sunset",
  "garden",
  "chicken",
  "message",
  "whisper",
  "sunlight",
  "crystal",
  "morning",
  "promise",
  "rainbow",
  "holiday",
  "chamber",
  "flaming",
  "passion",
  "success",
  "paradise",
  "writing",
  "inspire",
  "feather",
  "honesty",
  "balance",
  "beauty",
  "prairie",
  "journey",
  "history",
  "pumpkin",
  "company",
  "awesome",
  "charity",
  "fortune",
  "justice",
  "present",
  "compass",
  "dolphin",
  "freedom",
  "victory",
  "whistle",
  "wisdom",
  "fantasy",
  "silence",
  "healing",
];

const hardWordList = [
  "elephant",
  "creative",
  "laughter",
  "mountain",
  "delicate",
  "medicine",
  "favorite",
  "birthday",
  "surprise",
  "apartment",
  "confident",
  "birthday",
  "beautiful",
  "friendly",
  "wildlife",
  "marathon",
  "violinist",
  "alligator",
  "volunteer",
  "adventure",
  "snowflake",
  "chocolate",
  "vacation",
  "landscape",
  "breathing",
  "important",
  "sunflower",
  "wonderful",
  "sympathy",
  "magnolia",
  "creativity",
  "happiness",
  "whispering",
  "knowledge",
  "beginning",
  "passionate",
  "wandering",
  "confusion",
  "assistant",
  "celebrate",
  "beautiful",
  "meditation",
  "recovery",
  "butterfly",
  "influence",
  "harmonize",
  "serenity",
  "refreshing",
  "generation",
];

const wordContainer = document.querySelector(".word-container");
const submitBtn = document.querySelector("#submit");
const guess = document.querySelector("#guess");
const wrongList = [];
const wrongListNode = document.querySelector(".wrong-list");
const oldBoxes = document.querySelectorAll(".word-box");
function createGame(difficulty) {
  let list;
  let wrongCount = 0;
  let correctCount = 0;
  console.log(oldBoxes);
  //   Initiate the level and get a random word
  difficulty === "Easy"
    ? (list = easyWordList)
    : difficulty === "Medium"
    ? (list = mediumWordList)
    : (list = hardWordList);
  let word = list[Math.floor(Math.random() * list.length)];
  let wordArr = word.split("");
  console.log(word);
  //   Create the boxes and the letters
  for (let i = 0; i < wordArr.length; i++) {
    const box = document.createElement("div");
    box.className = "word-box";
    box.id = i;
    wordContainer.append(box);
    const letter = wordArr[i].toUpperCase();
    const pTag = document.createElement("p");
    pTag.textContent = letter;
    pTag.className = "letter hidden";
    pTag.id = `p${i}`;
    box.append(pTag);
  }

  //   Validate the input, must be a letter
  guess.addEventListener("input", () => {
    if (!guess.value.match(/[a-zA-Z]/)) {
      guess.value = "";
    } else {
      return;
    }
  });

  //   Handle Submit
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let appearLetter = [];
    for (let i = 0; i < wordArr.length; i++) {
      if (wordArr[i] === guess.value) {
        appearLetter.push(i);
      }
    }
    if (appearLetter.length === 0) {
      wrongCount++;
      if (wrongList.indexOf(guess.value) === -1) {
        wrongList.push(guess.value);
        let newWrongList = wrongList.join(`, `);
        wrongListNode.textContent = newWrongList;
      }
      updateSVG(wrongCount);
      if (wrongCount === 7) {
        alert("Game Over");
        const homePage = document.querySelector(".home-page-container");
        homePage.classList.remove("hidden");
        scrollTo(0, 0);
        window.location.reload();
      }
    } else {
      for (let i = 0; i < appearLetter.length; i++) {
        const currLetter = document.querySelector(`#p${appearLetter[i]}`);
        currLetter.classList.remove("hidden");
        correctCount += appearLetter.length;
        if (correctCount === wordArr.length) {
          alert("Congratz! You Won!");
          window.location.reload();
        }
      }
    }
    guess.value = "";
  });
}

function updateSVG(count) {
  const gallowList = document.querySelectorAll(".gallow");
  const head = document.querySelector(".head");
  const body = document.querySelector(".body");
  const leftArm = document.querySelector(".left-arm");
  const rightArm = document.querySelector(".right-arm");
  const leftLeg = document.querySelector(".left-leg");
  const rightLeg = document.querySelector(".right-leg");
  switch (count) {
    case 1:
      gallowList.forEach((el) => (el.style.stroke = "black"));
      break;
    case 2:
      head.style.stroke = "black";
      break;
    case 3:
      body.style.stroke = "black";
      break;
    case 4:
      leftArm.style.stroke = "black";
      break;
    case 5:
      rightArm.style.stroke = "black";
      break;
    case 6:
      leftLeg.style.stroke = "black";
      break;
    case 7:
      rightLeg.style.stroke = "black";
      break;
  }
}
