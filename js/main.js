// $('.fa-hover a').children().before();

$(document).ready(function(){
	$(function(){ //Make sure it is inside DOM ready
	     var $div = $('.fa-hover > a');
	     $div.before(function () {
	          return $(this).children();
	          console.log(div);
	    });
	});
	
});