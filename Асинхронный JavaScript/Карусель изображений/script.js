const slider = document.querySelector('.slider'),
    prevBtn = document.querySelector('.slider-btns__prev'),
    nextBtn = document.querySelector('.slider-btns__next'),
    slides = Array.from(slider.querySelectorAll('img'));
let slideIndex = 0;

prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    updateSlider();
} );
nextBtn.addEventListener('click', showNextSlide);
function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  updateSlider();
// const slideCount = slides.length;
// let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
// prevButton.addEventListener('click', showPreviousSlide);
// nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
//   slideIndex = (slideIndex - 1 + slideCount) % slideCount;
//   updateSlider();
}

// Функция для показа следующего слайда

setInterval(() => {
    showNextSlide();
}, 3000)
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    updateSlider();
    
}

// Функция для обновления отображения слайдера
// function updateSlider() {
//   slides.forEach((slide, index) => {
//     if (index === slideIndex) {
//       slide.style.display = 'block';
//     } else {
//       slide.style.display = 'none';
//     }
//   });
// }

// Инициализация слайдера
updateSlider();