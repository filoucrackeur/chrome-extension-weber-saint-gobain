(function($) {

	var urlWeber = { "url" : "http://www.e-weber.com/" };

	$(document).ready(function(){
		getWeberFlags( urlWeber );

		$('.countries').slideDown("slow")();
	});


	// Recuperation de la liste des drapeaux
	function getWeberFlags(data){

		$.get(data.url, function(html){
			var flux = $(html);
			var items = flux.find('div.like_select_option');
			items = items.html();

			$("div.loader").hide();
			$("div#links-by-flags").append(items);
			$('p').remove();
			$('#links-by-flags>ul>li>img').each(function(){
				$(this).attr('src', urlWeber.url + $(this).attr('src'));
			});
			$('#links-by-flags>ul>li>a').each(function(){
				$(this).attr('href', urlWeber.url+$(this).attr('href'));
			});
		});
	}
	
})(jQuery);
