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
            const modal = document.getElementById('modal');
            const modalImg = document.getElementById('modalImg');
            const closeBtn = document.querySelector('.close');

            if (!modal || !modalImg || !closeBtn) {
                console.error('Modal elements not found');
                return;
            }

            document.querySelectorAll('.gallery img').forEach(img => {
                img.addEventListener('click', () => {
                    console.log('Image clicked:', img.src);
                    modal.style.display = 'flex'; // Используем flex для центрирования
                    modalImg.src = img.src;
                    setTimeout(() => {
                        modal.classList.add('active'); // Запускаем анимацию
                    }, 10); // Небольшая задержка для корректного старта анимации
                });
            });

            closeBtn.addEventListener('click', () => {
                modal.classList.remove('active'); // Убираем класс для анимации закрытия
                setTimeout(() => {
                    modal.style.display = 'none'; // Скрываем модальное окно после анимации
                }, 300); // Время должно совпадать с длительностью transition
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    setTimeout(() => {
                        modal.style.display = 'none';
                    }, 300);
                }
            });
        });