// Events for the scan

(function() {
	$(document).on("pageshow", "#scan", function(e) {
		console.log("**On pageshow of #scan");

		$("#startScan").click(function() {
			cordova.plugins.barcodeScanner.scan(function(result) {
				var s = "Result: " + result.text + "<br/>" + "Format: " + result.format + "<br/>" + "Cancelled: " + result.cancelled;
				console.log("Scan success " + s);
				$("#scanResult").html(s);
			}, function(error) {
				console.log("Scan fail:" + error)
				alert("Scanning failed: " + error);
			});

		});
	})
})();

