// Javascript for the agenda page
var db;

//document.addEventListener("deviceready", onDeviceReadyAgenda, false);
$(document).on("pageshow", "#agenda", onDeviceReadyAgenda);

function onDeviceReadyAgenda() {
	console.log("** On DeviceReadyAgenda ");
	db = window.openDatabase("panxamplaDB", "1.0", "CI Panxampla", 200000);
	console.log("database opened");
    db.transaction(getAgenda, transactionError);
}

function transactionError(tx, error) {
    alert("Database Error in Agenda: " + error);
}

function getAgenda(tx) {
	var sql = "select e.id, e.item from agenda e";
	tx.executeSql(sql, [], getAgendaSuccess);
} 

function getAgendaSuccess(tx, results) {
    var len = results.rows.length;
    for (var i=0; i<len; i++) {
    	var agenda = results.rows.item(i);
    	console.log("** adding agenda "+ agenda.item);
    	var lidef='<li><a href="agendaDetail.html?id='+ agenda.id + '" target="detail" data-rel="dialog" >' + agenda.item +'</a></li>';
		console.log("** "+lidef);
 		$('#listagenda').append(lidef);
    }
    $('#listagenda').listview("refresh");
    console.log("** #listagenda: "+ $("#listagenda").html() );
};

