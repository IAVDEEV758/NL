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

         // Плавная прокрука
    document.querySelectorAll('.main-nav a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for fixed nav height
            behavior: 'smooth'
          });
        }
      });
    });


    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
      // Prevent scrolling when menu is open
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });

    // Gallery modal functionality
    const modal = document.getElementById('imageModal');
    const modalImg = modal.querySelector('img');
    const closeBtn = modal.querySelector('.close-button');
    
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
      }, 300);
    });

    // Pause gallery animation on hover
    document.querySelectorAll('.gallery-row').forEach(row => {
      row.addEventListener('mouseenter', () => {
        row.classList.add('paused');
      });
      row.addEventListener('mouseleave', () => {
        row.classList.remove('paused');
      });
    });

function toggleMenu() {
    document.querySelector('.mobile-nav').classList.toggle('active');
  }