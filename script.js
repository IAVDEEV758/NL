document.addEventListener('DOMContentLoaded', () => {
  // === Меняющийся текст ===
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
    if (!textElement) return;
    textElement.classList.remove("fade-in");
    void textElement.offsetWidth; // перезапуск анимации
    textElement.textContent = textArray[textIndex];
    textElement.classList.add("fade-in");
    textIndex = (textIndex + 1) % textArray.length;
  }

  setInterval(changeText, 3000);
  changeText();

  // === Гамбургер-меню ===
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
      console.log('☰ Гамбургер кликнут');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }

  // === Модальное окно для изображений ===
  const modal = document.getElementById('imageModal');
  const modalImg = modal?.querySelector('img');
  const closeBtn = modal?.querySelector('.close-button');

  if (modal && modalImg && closeBtn) {
    document.querySelectorAll('.gallery img').forEach(img => {
      img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
        modal.classList.add('active');
      });
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      setTimeout(() => {
        modal.style.display = 'none';
        modalImg.src = '';
      }, 300);
    });
  }
});
