$(document).ready(function(){
	$(function(){ //Make sure it is inside DOM ready
		var $parent = $('.fa-hover > a');
		$parent.before(function () {
				return $(this).children();
				console.log(parent);
		});

		$parent.click(function(){
			return false;
		});

		var faInput;
		var faClass;

		$parent.each(function(){
			faClass = $(this).text().trim();
			faInput = '<input class="selectOnClick" type="text" value="' + faClass +'" readonly="readonly">'
			return $(this).parent().append(faInput);
		}).promise().done(function(){
			console.log('its done.');
			$(".fa-hover").click(function(){
					// Select input field contents
					$(".fa-hover").removeClass('active');
					$(this).toggleClass('active');
					$(this).find('.selectOnClick').select();
					console.log("clicked");
			});
		});
	});


	$('.nav-link').click(function(){
		var source = $(this).attr('href');
		var destination = $(source).offset().top - 50;
		console.log(destination.top + ' and ' + source);
		// window.scrollTo(0, destination);
		// window.scroll(0, destination);

		$('html,body').animate({
			scrollTop: destination
		}, 1000);

		return false;
	});

	$('body').addClass('black');

	$('#makeWhite').click(function(){
		if ($('body').hasClass('black')) {
			$('body').removeClass('black').addClass('white');
		}
	});
	$('#makeBlack').click(function(){
		if ($('body').hasClass('white')) {
			$('body').removeClass('white').addClass('black');
		}
	});
	$('body').attr('data-size','3');

	var size = $('body').data('size'); 

	$('#makeLarger').click(function(){
		if (size < 5) {
			size = size + 1;
			$('body').attr('data-size',size);
			console.log(size);
		}
		return false;
		// $('body').attr('class','').addClass('.size-' + size);
	});

	$('#makeSmaller').click(function(){
		if (size >= 1) {
			size = size - 1;
			$('body').attr('data-size',size);
			console.log(size);
		}
		return false;
		// $('body').attr('class','').addClass('.size-' + size);
	});

	$('.nav').addClass('closed');
	$('#slideOut').click(function(){
		$('.nav').toggleClass('closed');
		if ($(this).hasClass('fa-arrow-left')) {
			$(this).removeClass('fa-arrow-left').addClass('fa-arrow-right');
		} else {
			$(this).removeClass('fa-arrow-right').addClass('fa-arrow-left');
		}
		return false;
	});


	
	// $(window).scroll(function(){
	// 	var source = $('.nav-link').attr('href');
	// 	var destination = $(source).offset().top;

	// 	if($(source).offset().top > destination) {
	// 		console.log('less than');
	// 	}

	// 	// if ($('.nav-link').offset())
	// });
});