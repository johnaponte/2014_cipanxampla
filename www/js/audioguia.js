// Events for the scan
function onLoad(){
	console.log("**On Load of audiogia");
	document.addEventListener("deviceready", onDeviceReadyAudioguia, false);
}

function onDeviceReadyAudioguia() {
	console.log("**On OnDeviceReadyAudioguia");
		$("#arnes").click(function() {
			var src="Undefined source";
			console.log("** Click on #arnes: " + device.platform);
			if (   device.platform=="Android") {
				console.log("** Android device");
				src= "/android_asset/audio/arnes.mp3";
			}
			else {
				src="audio/arnes.mp3";
			}
			console.log("_**The src is: "+src);
			var media = new Media(src,
			 // sucess callback
			 function() {
			 	console.log("** Sucess on arnes.mp3");
			 },
			 // error calback
			 function(err) {
			 	console.log("** Error on arnes.mp3: ["+ err.code+"], " +  err.message);
			 });
			 media.play();
		});
};




