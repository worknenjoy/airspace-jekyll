$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });

});

$(function () {

    // Global Variables //

    var ulList = $('.ulList'),
        ulImg  = $('.ulList .ulImg'),
        ulTxt  = $('.ulList .ulTxt'),
        liList = $('.liList'),
        liDiv  = $('.liList .li'),
        liImg  = $('.liList .li img');

    // Hide Li List When Toggle UL List And Click Away It //

    ulList.on('click', function (e) {
        liList.toggle();
        e.stopPropagation(); // stope Li List Toggle Event For Run The Dom Event (Click Away Li List)
        $(document).on('click', function () { // Function To Hide Li List When Click Any Place in Dom
            liList.hide();
        });
    });


    // Put Li List Img And Text In Ul List //

    liDiv.on('click', selectingCountry);

    function selectingCountry() {
        ulImg.attr('src', $(this).children('img').attr('src')).show();
        ulTxt.text($(this).text());
    }
});




