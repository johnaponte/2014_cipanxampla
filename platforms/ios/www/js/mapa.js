// Events for the map
(function() {
	$(document).on("pageshow", "#map", function(e) {
		console.log("** On pageshow of #map");
		$('img[usemap]').rwdImageMaps();
		// Callback function for
		$('area').on('click', function() {
			var msg = $(this).attr('alt');
			$("#location").text(msg);
			console.log("* Click on " + msg);
			//	alert(msg);
		});
	});
})();
