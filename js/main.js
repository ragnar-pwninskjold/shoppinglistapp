

$(document).ready(function(){

	// add item to "need" list    &#10004
	$("form").submit(function(event) {
		event.preventDefault();
		var input = $("#needed").val();
		$(".need > ul").append("<li><span>"+input+"</span></li>");
		$("#needed").val(" ");
	});

	// on hover, show the version with the "x" button
	$("#lists").on("mouseenter", "li", function() {
		var deleteButton = "<button id='deleteButton'>&#10006</button>"
		$(this).append(deleteButton);
		if($(this).closest("div").hasClass("need")) {
		var checkMark = "<button id='checkMark'>&#10004</button>"
		$(this).prepend(checkMark).css("padding-right", "0");
		}
		else {
		var checkMark = "<button id='checkMark'>&#8592</button>"
		$(this).prepend(checkMark);
		}
		$(this).children("span").css("margin-left", "-5.7px")
		

	})
	.on("mouseleave", "li", function() {
	$("#deleteButton").remove();
	$("#checkMark").remove();
	$(this).children("span").css("margin-left", "5.7px")
	})
	//delete the item on click of the button
	.on("click", "#deleteButton", function(){
		$(this).closest("li").remove();

	})
	// if the item is clicked, transfer between list
	.on("click", "#checkMark", function(){
		if($(this).closest("div").hasClass("need")) {
		$(this).closest("li").appendTo(".have").css("list-style", "none");
		}
		else {
		$(this).closest("li").appendTo(".need").css("list-style", "none");
		}	
	});

	$("body").click(function(){
		$("#needed").focus();

	});
});




