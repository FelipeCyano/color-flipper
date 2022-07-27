// --- //
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// --- //
const hexCode = document.querySelector(".hex-code");
const clickMeButton = document.getElementById("btn");

// --- //
function getRandomIndex() {
  let randomIndex = Math.floor(Math.random() * hex.length);
  // return hex.splice(randomIndex, 1)[0];
  return randomIndex;
}

console.log(`${getRandomIndex()} - pega um índice aleatório`);

// --- //
function changeBgColorAndHexCode(){
  let newHexCode = '#';
  for (let i = 0;  i < 6; i++) {
    newHexCode += hex[getRandomIndex()];
  }
  document.body.style.backgroundColor = newHexCode;
  hexCode.textContent = newHexCode;
  return newHexCode;
  // return console.log(newHexCode);
}

console.log(`${changeBgColorAndHexCode()} - mudou hex code e bg`);

// --- //
clickMeButton.addEventListener("click", changeBgColorAndHexCode);

