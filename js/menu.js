document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('.header');
  var headerHeight = header.clientHeight; // вычисляем высоту шапки
  var body = document.body;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      document.querySelector('.logo_in_about').classList.add('logo_in_about__resize');

      header.classList.add('header_fixed');
      document.querySelector('.first_block').style.paddingTop = headerHeight + 'px'; // делаем отступ у body, равный высоте шапки
      document.querySelector('.logo_in_header').classList.remove('is_none');

    } else {
      document.querySelector('.logo_in_about').classList.remove('logo_in_about__resize');

      header.classList.remove('header_fixed');
      document.querySelector('.first_block').style.paddingTop = '0'; // удаляем отступ у body
      document.querySelector('.logo_in_header').classList.add('is_none');
    }
  });
});




