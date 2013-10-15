(function($) {

	var urlWeber = { "url" : "http://www.e-weber.com/" };

//	if (window.navigator.language === "fr"){
//		urlWeber = { "url" : "http://www.e-weber.com/fr" };
//	}
	
	var rootUrlWeber = "http://www.e-weber.com/";
	
	$(document).ready(function(){
		getWeberFlags( urlWeber );
		$('.box').fadeIn('slow');
		$('.box2').slideDown('slow');
		
		$('#logo').on('click',function(){
			$('.box2').toggle('slow');
		});
	});
	
	// Recuperation de la liste des drapeaux
	function getWeberFlags(data){

		$.get(data.url, function(html){
			var flux = $(html);
			var items = flux.find('div.like_select_option');
			items = items.html();

			$("div.loader").hide();
			$("div#linksByFlags").append(items);
			$('p').remove();
			$('#linksByFlags>ul>li>img').each(function(){
				$(this).attr('src', rootUrlWeber + $(this).attr('src'));
			});
			$('#linksByFlags>ul>li>a').each(function(){
				$(this).attr('href', rootUrlWeber+$(this).attr('href'));
			});
		});
	}
	
})(jQuery);
