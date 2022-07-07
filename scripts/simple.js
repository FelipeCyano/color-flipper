// Cores disponíveis:
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Variáveis que armazenam os valores de dois elementos que quero manipular na tela:
// 1. O span com o código da cor;
// 2. O botão "Click Me".
const colorCode = document.querySelector(".color-code");
const clickMeButton = document.getElementById("btn");

// Manipulação do clique do botão "Click Me":
clickMeButton.addEventListener("click", changeColor);

// Função que guarda o valor de um número aleatório gerado na função getRandomNumber(), usando ele para mudar cor do body e alterar código do span de acordo com o mesmo número gerado:
function changeColor() {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  colorCode.textContent = colors[randomNumber];
  // console.log(randomNumber); 
};

// Função que retorna número aleatório entre 0 e 3:
function getRandomNumber() {
  return Math.floor((Math.random() * colors.length));
};