(function($)
{
	$.extend($.fn, {
		slideyoutube : function()
		{
			var video = this;
			if ($(this).data('videosite') == "youtube") {
				var regex = /(\?v=|\&v=|\/\d\/|\/embed\/|\/v\/|\.be\/)([a-zA-Z0-9\-\_]+)/;
				var id_first_youtube_url = $(this).first().data('videourl');
				var regex_first_youtubeurl = id_first_youtube_url.match(regex);
				var url_demo = 'http://www.youtube.com/embed/' + regex_first_youtubeurl[2];
			} else if($(this).data('videosite') == "vimeo") {
				var regex1 = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
				var id_first_vimeo_url = $(this).first().data('videourl');
				var regex_first_vimeurl = id_first_vimeo_url.match(regex);
				var url_demo = 'http://player.vimeo.com/video/' + regex_first_vimeurl[5];
			}
			video.click(function()
			{
				if ($(this).data('videosite') == "youtube") {
					var id_youtube_url =  $(this).data('videourl');
					var regexyoutubeurl = id_youtube_url.match(regex);
					var url = 'http://www.youtube.com/embed/' + regexyoutubeurl[2] + '?autoplay=1';
				} else if($(this).data('videosite') == "vimeo") {
					var id_vimeo_url =  $(this).data('videourl');
					var regexvimeourl = id_vimeo_url.match(regex1);
					var url = 'http://player.vimeo.com/video/' + regexvimeourl[5] + '?autoplay=1';
				}
				$('#end_slide_youtube').attr('src', url);
				return false;
			});
			$('#end_slide_youtube').attr('src', url_demo);
			return false;
		}
	});
})(jQuery);

(function($)
{
	$.slideyoutube = function(options, video)
	{
		return $(video).slideyoutube();
	}
})(jQuery);