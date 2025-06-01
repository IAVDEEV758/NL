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

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('galleryModal');
  const modalImage = document.getElementById('modalImage');
  const closeButton = document.querySelector('.close-button');
  const galleryImages = document.querySelectorAll('.gallery-row img');

  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      console.log('Image clicked:', image.src); // Отладка
      // Открываем модальное окно
      modal.style.display = 'flex';
      modalImage.src = image.src;
      modalImage.alt = image.alt;

      // Останавливаем анимацию в соответствующей строке галереи
      const galleryRow = image.closest('.gallery-row');
      galleryRow.classList.add('paused');
      console.log('Paused row:', galleryRow.className); // Отладка
    });
  });

  const resumeAnimation = () => {
    modal.style.display = 'none';
    modalImage.src = '';
    modalImage.alt = '';

    // Возобновляем анимацию для всех строк галереи
    document.querySelectorAll('.gallery-row').forEach(row => {
      if (row.classList.contains('paused')) {
        row.classList.remove('paused');
        // Принудительно перезапускаем анимацию
        const track = row.querySelector('.track');
        track.style.animation = 'none';
        void track.offsetWidth; // Триггер reflow
        if (row.classList.contains('left')) {
          track.style.animation = 'scroll-left 15s linear infinite';
        } else if (row.classList.contains('right')) {
          track.style.animation = 'scroll-right 15s linear infinite';
        }
        console.log('Resumed animation for row:', row.className); // Отладка
      }
    });
  };

  closeButton.addEventListener('click', resumeAnimation);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      resumeAnimation();
    }
  });
});