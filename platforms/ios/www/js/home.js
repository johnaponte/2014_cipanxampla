//Anonym function that register the devicerady event
(function() {
	document.addEventListener("deviceready", onDeviceReady, false);
//	document.addEventListener('DOMContentLoaded', fotogallery, false);

})();

//function fotogallery() {
//	console.log("Called fotogallery");
//	var options = {}, instance = PhotoSwipe.attach(window.document.querySelectorAll('#Gallery a'), options);
//
//}

// device APIs are available
function onDeviceReady() {
	// Now safe to use device APIs
	console.log("** Device Ready **");
	navigator.splashscreen.hide();
//
//	$(document).on("pageshow", "#galeria", function(e) {
//		console.log("** On pageshow of #galeria");
//		e.preventDefault();
//		var currentPage = $(e.target), options = {
//			allowUserZoom : false
//		}, photoSwipeInstance = $("ul.gallery a", e.target).photoSwipe(options, currentPage.attr('id'));
//		return true;
//	});
//
//	$(document).on("pagehide", "#galeria", function(e) {
//		console.log("** On pagehide of #galeria");
//		var currentPage = $(e.target), photoSwipeInstance = PhotoSwipe.getInstance(currentPage.attr('id'));
//
//		if ( typeof photoSwipeInstance != "undefined" && photoSwipeInstance != null) {
//			PhotoSwipe.detatch(photoSwipeInstance);
//		}
//
//		return true;
//	});

};

