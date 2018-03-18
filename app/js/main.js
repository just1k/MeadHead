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

$('img').click(function() {
    $(this).colorbox({
        href: $(this).attr('src'),
        opacity: "0.60",
        rel:'gal'
    });
});

})

