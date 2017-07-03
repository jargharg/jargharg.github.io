$(document).ready(function(){
	$("a").click(function(){
		var newBGColor = $("a").attr("data-bgcolor")
		$("body").css("background",newBGColor)
	})
})