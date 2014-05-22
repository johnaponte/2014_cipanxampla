//Anonym function that register the devicerady event
(function() {
	document.addEventListener("deviceready", onDeviceReady, false);

})();

// device APIs are available
function onDeviceReady() {
	// Now safe to use device APIs
	console.log("** Device Ready **");
	navigator.splashscreen.hide();
	
};

