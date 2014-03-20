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
});