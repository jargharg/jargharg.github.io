$(document).ready(function(){
	$("a").click(function(){
		var newBGColor = $(this).attr("data-bgcolor")
		$("body").css("background",newBGColor)
	})
})