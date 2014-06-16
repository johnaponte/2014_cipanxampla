
$(document).ready(function() {
	console.log("** DocumentReady Ubicacion");
	document.addEventListener("deviceready", onDevicereadyUbicacion, false);
});


function onDevicereadyUbicacion() {
	console.log("** onDevicereadyUbicacion");
	var lat= 40.87415;
	var lng= 0.4003222;
	initGoogleMaps(lat,lng);
}


function initGoogleMaps(lat,lng){
	latlng = new google.maps.LatLng(lat,lng);
	console.log("in initGoogleMaps Latlng:" + latlng);
	// Default google maps options 
	var options= {
		zoom: 15,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var map = new google.maps.Map(document.getElementById('map_canvas'),options);
	
	// Add a marker to the map position 
	new google.maps.Marker({
		map: map,
		animation: google.maps.Animation.DROP,
		position:latlng
	});
	
	console.log("initGoogleMaps finalized!!");
}
