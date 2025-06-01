document.addEventListener('DOMContentLoaded', () => {
  // Здесь будет JavaScript код, когда потребуется добавить интерактивность
});

const textArray = [
  "Дизайн любой сложности",
  "Маникюр",
  "Покрытие",
  "Снятие",
  "Ремонт ногтя"
];

let textIndex = 0;
const textElement = document.getElementById("changing-text");

function changeText() {
  textElement.textContent = textArray[textIndex];
  textIndex = (textIndex + 1) % textArray.length;
}

setInterval(changeText, 2000);
changeText(); // Чтобы сразу отобразился первый текст
