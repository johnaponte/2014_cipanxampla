// Events for the scan
var db;
var toQuery;

$(document).ready(function() {
	console.log("** DocumentReady scan");
	document.addEventListener("deviceready", onDevicereadyScan, false);
});

function onDevicereadyScan() {
	console.log("** On scan ready of #scan");
	db = window.openDatabase("panxamplaDB", "1.0", "CI Panxampla", 200000);
	$("#startScan").click(cordova.plugins.barcodeScanner.scan(sucessScan,errorScan));
};

function sucessScan(result) {
	var s = "Result: " + result.text + "<br/>" + "Format: " + result.format + "<br/>" + "Cancelled: " + result.cancelled;
	console.log("Scan success " + s);
	$("#scanResult").html(s);
	toQuery=result.text;
	console.log("** toQuery:" + toQuery);
    db.transaction(getCode, transactionError);
};

function errorScan(error) {
	console.log("Scan fail:" + error);
		alert("Scanning failed: " + error);
};

function getCode(tx) {
	console.log("** on getCode with toQuery: "+ toQuery);
	var sql = "select e.id, e.label from guia e where e.label = :toQuery";
	tx.executeSql(sql, [toQuery], getCodeSuccess);
} 

function getCodeSuccess(tx, results) {
	console.log("** On getCodeSucesss"); 	
    var len = results.rows.length;
    console.log("** len number of results:" + len);
    if (len==1) {
    	var guia = results.rows.item(0);
    	var href= 'guiaDetail.html?id='+guia.id+'&from=scan' ;
		console.log("** href:"+href);
		$.mobile.changePage('guiaDetail.html',
		 { dataUrl : href, data : { 'id' : guia.id , 'from':'scan'},
		 pageContainer:"#guiadetail"});		
    }
};

function transactionError(tx, error) {
    alert("Database Error in Agenda: " + error);
}

