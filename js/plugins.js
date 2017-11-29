$(document).ready(function(){
	// Show Color Option Div When Click On The Gear
	$(".gear-check").click(function(){
		$(".color-option").fadeToggle(); 
	}); 
	// Change Theme Color On Click 
	var colorLi = $(".color-option ul li");
	colorLi
		.eq(0).css("backgroundColor", "#E41B17").end()
		.eq(1).css("backgroundColor", "plum").end()
		.eq(2).css("backgroundColor", "skyblue").end()
		.eq(3).css("backgroundColor", "greenyellow").end()
		.eq(4).css("backgroundColor", "hotpink");
	colorLi.click(function(){
		// console.log($(this).attr("data-value"))
		// $("link[href*='theme']").remove();
		$("link[href*='theme']").attr("href", $(this).attr("data-value")); 
	});
});