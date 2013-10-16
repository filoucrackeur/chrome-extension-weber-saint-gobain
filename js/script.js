(function($) {

	var urlWeber = { "url" : "http://www.e-weber.com/" };
	
	$(document).ready(function(){
		getWeberFlags( urlWeber );
		$('.box').fadeIn('slow');
		$('.box2').slideDown('slow');
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
				$(this).attr('src', urlWeber.url + $(this).attr('src'));
			});
			$('#linksByFlags>ul>li>a').each(function(){
				$(this).attr('href', urlWeber.url+$(this).attr('href'));
			});
		});
	}
	
})(jQuery);
