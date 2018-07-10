

$(document).ready(function(){
  $(window).scrollTop($('#pocetna').offset().top);
  // $('.main-p').addClass('animated fadeInLeft')

  $('.main-p').css({
  transition:'all 1s ease 0.40s',
  opacity:1,
  transform:'translateX(0px)'
})

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



    if(scroll >300){
      $('.fade-left-up').removeClass('animated fadeOut')
      $('.fade-right-up').removeClass('animated fadeOut')

      $('.fade-left-up').addClass('animated fadeInUp')
      $('.fade-right-up').addClass('animated fadeIn')
      }

    if(scroll >700){

      $('.fade-left-down').removeClass('animated fadeOut')
      $('.fade-right-down').removeClass('animated fadeOut')

      $('.fade-right-down').addClass('animated fadeIn')
      $('.fade-left-down').addClass('animated fadeInUp')
    }


});


// Scroll on click

$("#privatni-nav").click(function() {
  $('html,body').animate({ scrollTop: 800 } ,1000);
});

$('#priprema').click(function() {
    $('html, body').animate({
        scrollTop: $('#pripreme').offset().top
    }, 1400);
});

$(".contact").click(function() {
  $('html,body').animate({ scrollTop: 1500 } ,1200);
});
