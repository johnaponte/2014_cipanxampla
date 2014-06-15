// Events for the scan

(function() {  
	$(document).on("pageshow", "#audioguia", function(e) {
		console.log("**On pageshow of #audioguia");

		$("#arnes").click(function() {
			console.log("** Click on #arnes");
			var media = new Media("audio/arnes.mp3",
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
	})
})();

