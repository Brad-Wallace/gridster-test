(function($) {
    $( window ).resize(function() {
        var wWidth = $(window).width();

        if(wWidth < 500){

        	$("#item1").attr("data-col", "1");
        	$("#item1").attr("data-row", "4");

        	$("#item2").attr("data-col", "1");
        	$("#item2").attr("data-row", "5");

        	$("#item3").attr("data-col", "2");
        	$("#item3").attr("data-row", "1");

        	$("#item4").attr("data-col", "1");
        	$("#item4").attr("data-row", "7");

        	$("#item5").attr("data-col", "2");
        	$("#item5").attr("data-row", "2");

        	$("#item6").attr("data-col", "2");
        	$("#item6").attr("data-row", "3");

        	$("#item7").attr("data-col", "3");
        	$("#item7").attr("data-row", "1");

        	$("#item8").attr("data-col", "3");
        	$("#item8").attr("data-row", "2");

        	$("#item9").attr("data-col", "3");
        	$("#item9").attr("data-row", "3");

        }
        if(wWidth < 750 && wWidth > 500){

        	$("#item1").attr("data-col", "2");
        	$("#item1").attr("data-row", "2");

        	$("#item2").attr("data-col", "2");
        	$("#item2").attr("data-row", "3");

        	$("#item3").attr("data-col", "1");
        	$("#item3").attr("data-row", "4");

        	$("#item4").attr("data-col", "1");
        	$("#item4").attr("data-row", "5");

        	$("#item5").attr("data-col", "2");
        	$("#item5").attr("data-row", "1");

        	$("#item6").attr("data-col", "3");
        	$("#item6").attr("data-row", "1");

        	$("#item7").attr("data-col", "4");
        	$("#item7").attr("data-row", "1");

        	$("#item8").attr("data-col", "4");
        	$("#item8").attr("data-row", "2");

        	$("#item9").attr("data-col", "4");
        	$("#item9").attr("data-row", "3");

        }
        if(wWidth > 750){       	

        	$("#item1").attr("data-col", "2");
        	$("#item1").attr("data-row", "1");

        	$("#item2").attr("data-col", "2");
        	$("#item2").attr("data-row", "2");

        	$("#item3").attr("data-col", "4");
        	$("#item3").attr("data-row", "1");

        	$("#item4").attr("data-col", "4");
        	$("#item4").attr("data-row", "2");

        	$("#item5").attr("data-col", "4");
        	$("#item5").attr("data-row", "3");

        	$("#item6").attr("data-col", "5");
        	$("#item6").attr("data-row", "1");

        	$("#item7").attr("data-col", "5");
        	$("#item7").attr("data-row", "3");

        	$("#item8").attr("data-col", "6");
        	$("#item8").attr("data-row", "1");

        	$("#item9").attr("data-col", "6");
        	$("#item9").attr("data-row", "2");

        }
    })
})(jQuery);