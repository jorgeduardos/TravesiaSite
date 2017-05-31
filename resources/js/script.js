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

	/* SLIDER */

	  var innerSliderW = $(".innerSlider").first().width();
	  console.log(innerSliderW);
	  //number of inner sliders
	  var innerSliderCount = innerSliderCounter($(".innerSlider"));
	  console.log(innerSliderCount);
	    
	  // slider width
	  $(".slider").eq(0).css("width", innerSliderW*innerSliderCount);
	  console.log($(".slider").eq(0).css("width"));
	  
	  //innerSlider width
	  var slider = $(".slider").eq(0);
	  var sliderW = slider.width();
	  
	  var pixelsToMove = sliderW/innerSliderCount;
	  console.log(pixelsToMove);
	  //
	  console.log((innerSliderCount-1)*pixelsToMove*-1);
	  $("#button").on("click", function(){
	    console.log(parseInt($(".slider").first().css("marginLeft")));
	    if(parseInt($(".slider").first().css("marginLeft")) !== (innerSliderCount-1)*pixelsToMove*-1){
	      $(".slider").animate({marginLeft: "-=" + pixelsToMove + "px"});
	    }else{
	      $(".slider").first().css("marginLeft", "0px");
	      $(".slider").animate({marginLeft: "-=" + pixelsToMove + "px"});
	    }  
	  });  

});

function innerSliderCounter(objectArray){
  var count;
  for(var i = 0; i <= objectArray.length; i++){
   count = i;
  }
  return count;
}