// eventos para la galeria de fotos
(function() {
	$(document).on("pageshow", "#galeria", function(e) {
		console.log("** On pageshow of #galeria");
		e.preventDefault();
		var currentPage = $(e.target), options = {
			allowUserZoom : false
		}, photoSwipeInstance = $("ul.gallery a", e.target).photoSwipe(options, currentPage.attr('id'));
		return true;
	});

	$(document).on("pagehide", "#galeria", function(e) {
		console.log("** On pagehide of #galeria");
		var currentPage = $(e.target), photoSwipeInstance = PhotoSwipe.getInstance(currentPage.attr('id'));

		if ( typeof photoSwipeInstance != "undefined" && photoSwipeInstance != null) {
			PhotoSwipe.detatch(photoSwipeInstance);
		}

		return true;
	});
})();
