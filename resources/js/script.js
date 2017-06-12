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

	$(".menu_icon_mobile").on("click", function(){
		if($(this).hasClass("ion-navicon-round")){
			$(this).removeClass("ion-navicon-round");
			$(this).addClass("ion-close-round").show()
			$(".mobile-nav").show("blind");
		}else{
			$(this).addClass("ion-navicon-round");
			$(this).removeClass("ion-close-round");
			$(".mobile-nav").hide("blind");
		}
	});

	/* SLIDER */

	  //width of each individual slide
  var innerSliderW = $(".innerSlider").first().width();
  console.log("innerSlider width = " + innerSliderW);
  
  
  //number of slides
  var innerSliderCount = innerSliderCounter($(".innerSlider"));
  console.log("innerSlider count = " + innerSliderCount);
    
  //seting slider to have correct width
  $(".slider").eq(0).css("width", innerSliderW*innerSliderCount);
  console.log("slider width = " + $(".slider").eq(0).css("width"));
  
  //slider width
  var slider = $(".slider").eq(0);
  var sliderW = slider.width();
  
  //pixels to move when clicking the buttons
  var pixelsToMove = sliderW/innerSliderCount;
  console.log("pixelsToMove = " + pixelsToMove);
  
  console.log((innerSliderCount-1)*pixelsToMove*-1);
  
  //setting slider to show first slide (wich is technically not the first)
  $(".slider").first().css("marginLeft", -pixelsToMove);
  
  //handling events
  $("#right").on("click", function(){
    if(parseInt($(".slider").first().css("marginLeft")) !== (innerSliderCount-1)*pixelsToMove*-1){
      $(".slider").animate({marginLeft: "-=" + pixelsToMove + "px"});
      console.log(parseInt($(".slider").first().css("marginLeft")));
    }else{
      $(".slider").first().css("marginLeft", -pixelsToMove);
      $(".slider").animate({marginLeft: "-=" + pixelsToMove + "px"});
    }  
  }); 
  
    $("#left").on("click", function(){
    console.log(parseInt($(".slider").first().css("marginLeft")));
    if(parseInt($(".slider").first().css("marginLeft")) !== 0){
      $(".slider").animate({marginLeft: "+=" + pixelsToMove + "px"});
    }else{
      $(".slider").first().css("marginLeft", (innerSliderCount-2)*pixelsToMove*-1);
      $(".slider").animate({marginLeft: "+=" + pixelsToMove + "px"});
    }  
  }); 
  
  
 //resize event on slider
 $(window).on("resize", function(){
   innerSliderW = $(".innerSlider").first().width();
   console.log("innerSlider width after resize = " + innerSliderW);
    $(".slider").eq(0).css("width", innerSliderW*innerSliderCount);
   sliderW = $(".slider").eq(0).width();
    console.log("slider width after resize = " + $(".slider").eq(0).css("width"));
   pixelsToMove = sliderW/innerSliderCount;
   console.log("pixelsToMove after resize = " + pixelsToMove)
   $(".slider").first().css("marginLeft", -pixelsToMove);
 });
 
});

//little function to count number of slides in the page
function innerSliderCounter(objectArray){
  var count;
  for(var i = 0; i <= objectArray.length; i++){
   count = i;
  }
  return count;
}
