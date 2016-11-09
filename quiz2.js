// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function($){
	$('.links li a').on('click', function(e) {
		e.preventDefault()
		alert('you clicked a link, good for you');
	});
	console.log("this is a message for you!!!")
})(jQuery);

(function($) {
	$('ol li').html('other');
	$('ol li').css('color', 'red');
})(jQuery);

function fadeout() {
	$('body').fadeOut('slow');
	$('body').html('<h1>GOOD BYE</h1>');
}

function accordion() {
	if($('#accordion').css('height') < '300px') {
		$('#accordion').css('height', '300px');
	}
	else {
		$('#accordion').css('height', '20px');
	}
}

function makesMeHappy() {
	alert("This alert was triggered by you clicking that button");
	$('body').html("<h1>LOL aren't alerts supper fun!</h1>");
}
