$(document).ready(function(){
	$(".menu_icon").on("click", function(){

		if($(this).hasClass("ion-navicon-round")){
			$(this).removeClass("ion-navicon-round");
			$(this).addClass("ion-close-round").show()
			$(".navBar").show("slide");
		}else{
			$(this).addClass("ion-navicon-round");
			$(this).removeClass("ion-close-round");
			$(".navBar").hide("slide");
		}

	});
});