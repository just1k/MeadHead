$(document).ready(function () {

	$("#photo-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      singleItem: true,
      margin: 5,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3,
            loop:true
        }
    }
	});

$('.photo-item img').click(function() {
    $(this).colorbox({
        href: $(this).attr('src'),
        opacity: "0.60",
        rel:'gal'
    });
});

})

$(document).ready(function() { // вся магия после загрузки страницы
     $('a#go').click( function(event){ // ловим клик по ссылки с id="go"
         event.preventDefault(); // выключаем стандартную роль элемента
         $('body').css('overflow', 'hidden'); // выключаем скролл
         $('.popup').css('display', 'block');
         $('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
             function(){ // после выполнения предъидущей анимации
                 $('.modal_form') 
                     .css('display', 'block') // убираем у модального окна display: none;
                     .animate({opacity: 1, top: '15%', bottom: '10%'}, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
         });
     });
     /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
     $('#modal_close, #overlay').click( function(){ // ловим клик по крестику или подложке
         $('body').css('overflow', 'auto'); // включаем скролл
         $('.popup').css('display', 'none');
         $('.modal_form')
             .animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
                 function(){ // после анимации
                     $(this).css('display', 'none'); // делаем ему display: none;
                     $('#overlay').fadeOut(400); // скрываем подложку
                 }
             );
     });
});

$(document).ready(function () {
   
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-58;
        $('body,html').animate({scrollTop: top}, 1000);
        $('.navbar-collapse').removeClass('in');
    });
});

jQuery(document).ready(function($) {  
$(window).scroll(function(){
    if  ($(window).scrollTop() > 300)
        $('#slidebox').animate({'left':'0px'},500);
        else
        $('#slidebox').stop(true).animate({'left':'-230px'},500);   
    });
    $('#slidebox .close').bind('click',function(){
        $(this).parent().remove();  
    });
    });
    

