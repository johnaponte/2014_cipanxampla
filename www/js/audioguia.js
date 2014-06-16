var db;

$(document).on("pageshow", "#audioguia", onDeviceReadyAudioguia);

function onDeviceReadyAudioguia() {
	console.log("** On DeviceReadyAudioguia ");
	db = window.openDatabase("panxamplaDB", "1.0", "CI Panxampla", 200000);
	console.log("database opened");
    db.transaction(getAudioguia, transactionError);
}

function transactionError(tx, error) {
    alert("Database Error in Agenda: " + error);
}

function getAudioguia(tx) {
	var sql = "select e.id, e.label from guia e";
	tx.executeSql(sql, [], getAudioguiaSuccess);
} 

function getAudioguiaSuccess(tx, results) {
    var len = results.rows.length;
    for (var i=0; i<len; i++) {
    	var guia = results.rows.item(i);
    	console.log("** adding guia "+ guia.label);
    	var lidef='<li><a href="guiaDetail.html?id='+guia.id+'&from=audioguia" target="guiadetail" >' + guia.label +'</a></li>';
		console.log("** "+lidef);
 		$('#listaudioguia').append(lidef);
    }
    $('#listaudioguia').listview("refresh");
    console.log("** #listaudioguia: "+ $("#listaudioguia").html() );
};



