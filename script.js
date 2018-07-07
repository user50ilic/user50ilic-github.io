

$(document).ready(function(){
  $(window).scrollTop($('#pocetna').offset().top);
  $('.main-p').addClass('animated fadeInLeft')
  $('.fade-left-up').addClass('animated fadeOut')
  $('.fade-right-up').addClass('animated fadeOut')
  $('.fade-left-down').addClass('animated fadeOut')
  $('.fade-right-down').addClass('animated fadeOut')
})







//BUTTON animation
//________________


$(".saznaj").click(function() {
    $('html, body').animate({
        scrollTop: $(".left").offset().top
    }, 1000);
});


// ANIMATION ON SCROLL
// ___________________

$(window).scroll(function (event) {
    let scroll = $(window).scrollTop();
    console.log(scroll);






    if(scroll >=150){
      $('.nav-container').slideUp(200);
    }
    else{
      $('.nav-container').slideDown(200);
    }

    if(scroll >200){
      $('.fade-left-up').removeClass('animated fadeOut')
      $('.fade-right-up').removeClass('animated fadeOut')

      $('.fade-left-up').addClass('animated fadeInUp')
      $('.fade-right-up').addClass('animated fadeIn')
      }

    if(scroll >600){

      $('.fade-left-down').removeClass('animated fadeOut')
      $('.fade-right-down').removeClass('animated fadeOut')

      $('.fade-right-down').addClass('animated fadeIn')
      $('.fade-left-down').addClass('animated fadeInUp')
    }


});





// nav scroll

$('#privatni-nav').click(function() {
    $('html, body').animate({
        scrollTop: $('.saznaj').offset().top
    }, 1000);
});

$('#priprema').click(function() {
    $('html, body').animate({
        scrollTop: $('#pripreme').offset().top
    }, 1000);
});

$('.contact').click(function() {
    $('html, body').animate({
        scrollTop: $('.footer-container').offset().top
    }, 1000);
});
