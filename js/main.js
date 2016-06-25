

$(document).ready(function(){

	// add item to "need" list
	$("form").submit(function(event) {
		event.preventDefault();
		var input = $("#needed").val();
		$(".need > ul").append("<li>"+input+"</li>");
	});

	// on hover, show the version with the "x" button

	$("#lists").on("mouseenter", "li", function() {
		var deleteButton = "<button class='deletebutton'>&#10006</button>"
		$(this).append(deleteButton);
	})
	.on("mouseout", "li", function() {
		$(".deletebutton").remove();
	});

});


// if the "x" button is selected, remove the item entirely

// if the item is clicked, transfer between list