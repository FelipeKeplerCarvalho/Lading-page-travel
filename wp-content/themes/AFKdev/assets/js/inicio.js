
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



// Código JavaScript: Para enviar os dados do formulário via AJAX. No caso PARAR o processo de atualizar na pagina

//Por padrão, quando um formulário é enviado, o navegador recarrega a página. 
//Com JavaScript, você pode "interceptar" esse envio, evitar o recarregamento e manipular os dados do formulário de forma assíncrona.

jQuery(document).ready(function($) {
  $('#news-form').on('submit', function(e) {
      e.preventDefault(); //para o envio

      let form = $(this);
      let formData = form.serialize(); // Serializa os dados do formulário


      //inicio da parte do AJAX
      $.ajax({
          type: "POST",
          url: form.attr('action'), // Admin URL
          data: formData,
          success: function(response) {
              if (response.success) {
                  $('#form-response').html('<p>' + response.data.message + '</p>');
                  form[0].reset(); // Limpa o formulário
              } else {
                  $('#form-response').html('<p>' + response.data.message + '</p>');
              }
          },
          error: function() {
              $('#form-response').html('<p>Erro ao enviar o formulário. Tente novamente mais tarde.</p>');
          }
      });
  });
});