// add item to "need" list

$(document).ready(function(){

	$(".inputbox").submit(function(event){
		event.preventdefault();
		var input = $("addition").val();
		console.log("submitted");

	});
});

// on hover, show the version with the "x" button

// if the "x" button is selected, remove the item entirely

// if the item is clicked, transfer between list