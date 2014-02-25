(function($) {
    $( window ).resize(function() {
        var wWidth = $(window).width();

        if(wWidth < 750){
        	$("#item1").attr("data-col", "1");
        	$("#item2").attr("data-col", "1");
        	$("#item3").attr("data-col", "1");
        	$("#item4").attr("data-col", "1");
        }
    })
})(jQuery);