

$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeToggle(3000);
     //   $("#div2").fadeToggle("slow");
      //  $("#div3").fadeToggle(3000);
    });
});









/*nav function*/
$(function () {
    var okno = $(window);
    var menu = $('#main-nav');

   if (okno.scrollTop() >= 100) {
      menu.addClass('scroll');
   }

   okno.scroll(function () {

      if (okno.scrollTop() >= 100) {
            menu.addClass('scroll');
       } else {
            menu.removeClass('scroll');
        }
  });

    /*Smoth scroll*/

    $(document).on('click', 'a[href^="#"]', function(event) {
       event.preventDefault();
var menuHeight = $('#main-nav').height();
       $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - menuHeight
        }, 500);
  });


});


/*myBtn scrollTop*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("end").style.display = "block";
    } else {
        document.getElementById("end").style.display = "none";
    }
}


    $('#end').on('click',function(){
    $('html, body').animate({
        scrollTop: $('header').offset().top
    }, 1000);
})
