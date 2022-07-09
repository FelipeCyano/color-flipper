// Variável que armazena cores disponíveis:
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Variáveis que armazenam os valores de dois elementos que quero manipular na tela:
// 1. O span com o código da cor;
// 2. O botão "Click Me".
const colorCode = document.querySelector(".color-code");
const clickMeButton = document.getElementById("btn");

// Função que retorna número aleatório entre 0 e 3:
function getRandomNumber() {
  return Math.floor((Math.random() * colors.length));
};

// Função que guarda em uma variável o valor de um número aleatório gerado ao chamar getRandomNumber() e depois utiliza o valor armazenado como índice do array $colors[] para mudar a cor do background via <body> e também alterar o respectivo código da cor mostrado via <span>, cujo valor está armazenado em $colorCode:
function changeBgColorAndColorCode() { 
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  colorCode.textContent = colors[randomNumber];
  // console.log(randomNumber); 
};

// Manipulação do clique no botão "Click Me":
clickMeButton.addEventListener("click", changeBgColorAndColorCode);