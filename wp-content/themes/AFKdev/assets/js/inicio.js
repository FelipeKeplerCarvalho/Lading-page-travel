
var swiper = new Swiper(".tm-slide", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  loop: true,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var teste = new Swiper(".company-slider", {
  slidesPerView: 5,
  spaceBetween: 30,
  speed: 100,
  mousewheel: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  on: {

    init: function () {
      var activeIndex = this.activeIndex;
      var $inicial = this.slides[activeIndex + 2];

      $inicial.classList.add('ativo');


    },
    slideChange: function () {

      //remover
      this.slides.forEach(slide => {
        slide.classList.remove('ativo');
      });

      // Este evento é disparado sempre que o índice do slide muda
      var activeIndex = this.activeIndex;

      // Seleciona o slide atual usando o índice
      var currentSlide = this.slides[activeIndex + 2];

      // Adiciona a borda ao slide atual
      currentSlide.classList.add('ativo');
    },
  },
});