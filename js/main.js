

$(document).ready(function(){

	// add item to "need" list    &#10004
	$("form").submit(function(event) {
		event.preventDefault();
		var input = $("#needed").val();
		$(".need > ul").append("<li>"+input+"</li>");
		$("#needed").val(" ");
	});

	// on hover, show the version with the "x" button
	$("#lists").on("mouseenter", "li", function() {
		var deleteButton = "<button id='deleteButton'>&#10006</button>"
		$(this).append(deleteButton);
		var checkMark = "<button id='checkMark'>&#10004</button>"
		$(this).prepend(checkMark);
	})
	.on("mouseleave", "li", function() {
	$("#deleteButton").remove();
	$("#checkMark").remove();
	})
	//delete the item on click of the button
	.on("click", "#deleteButton", function(){
		$(this).closest("li").remove();

	})
	// if the item is clicked, transfer between list
	.on("click", "#checkMark", function(){
		$(this).closest("li").appendTo(".have").css("list-style", "none");
	});
});




