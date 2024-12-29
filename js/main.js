
$(document).ready(function(){
  setTimeout(() => {
    $('.logo').hide();
  }, 2500);

  $("#header-toggle").click(function(){
      $(".nav").addClass("show");
      $(this).addClass("bx-x");
  });
  $(".click_hide, .nav__list li , #night").click(function(){
    $(".nav").removeClass("show");
    $("#header-toggle").removeClass("bx-x");
  });
  
  $('#show').click(function(){
  var show = $('.customer #show').attr("class");
  if(show == "bx bx-chevron-down"){
  $('.customer_show').css("display","flex");
    $(this).removeClass("bx-chevron-down");
    $(this).addClass("bx-chevron-up");
  }
  else{
    $('.customer_show').css("display","none");
    $(this).addClass("bx-chevron-down");
    $(this).removeClass("bx-chevron-up");
  }
  });

  
  $('#night').click(function(){
    var night = $('#night').attr("class");
    if(night == "bx bx-moon"){
      $(this).removeClass(" bx-moon");
      $(this).addClass("bx-sun").addClass("n_sun");
      $('header,.main_nav').addClass("n_header");
      $('.nav__list li a , .d_link').addClass("n_header_li");
      $('.d_link').addClass("n_link");
      $('.h1_works').addClass("n_h1_works");
      $('body ,.customer .row ,.works , .works .row , footer').addClass("n_body");
      $(".about ").addClass("n_about");
      $("footer ").addClass("n_footer");
      $(".main_form button").addClass("n_button");
      $(".about .titlepage h2 , footer .wrapper .content h2").css("color", "#A1F1C3FF");
      $(".about .titlepage p ,footer .wrapper .content p ,.customer .row h1").css("color", "#fdfdfd");
      $("footer .wrapper .content ul li a ,footer .wrapper .content ol li").css("color","#09B909FF");
      $(".nav__menu .wrapper .content .social-media .bxl-tiktok , footer .wrapper .content ol li .bxl-tiktok ").css("color", "#FFFFFFFF");
      
      $(".nav__item a ").hover(function(){
        $(this).addClass("n_link");
      },
      function(){
        $(this).removeClass("n_link");
      }
    
    );
      
    }
    else{
      $(this).addClass("bx-moon");
      $(this).removeClass("bx-sun").removeClass("n_sun");
      $('header,.main_nav').removeClass("n_header");
      $('.nav__list li a , .d_link').removeClass("n_header_li");
      $('.d_link').removeClass("n_link");
      $('.h1_works').removeClass("n_h1_works");
      $('body ,.customer .row ,.works , .works .row , footer').removeClass("n_body");
      $(".about").removeClass("n_about");
      $("footer").removeClass("n_footer");

      $(".about .titlepage h2 ,footer .wrapper .content h2").css("color", "#360707");
      $(".about .titlepage p ,footer .wrapper .content p ,.customer .row h1").css("color", "#110909");
      $("footer .wrapper .content ul li a ,footer .wrapper .content ol li").css("color"," #0349b3");
      $(".nav__menu .wrapper .content .social-media .bxl-tiktok , footer .wrapper .content ol li .bxl-tiktok ").css("color", "black");
      
      $(".main_form button").removeClass("n_button");
      
    }
  });
  
  
});


