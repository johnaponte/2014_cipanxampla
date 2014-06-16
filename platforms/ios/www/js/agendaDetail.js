// Javascript for the agendaDetails page
var db;

var id = getUrlVars()["id"];


//document.addEventListener("deviceready", onDeviceReadyAgenda, false);
$(document).on("pageshow", "#detail", onDeviceReadyAgendaDetail);

function onDeviceReadyAgendaDetail() {
	console.log("** On DeviceReadyAgendaDetail ");
	db = window.openDatabase("panxamplaDB", "1.0", "CI Panxampla", 200000);
	console.log("database opened");
    db.transaction(getAgendaDetail, transactionError);
}

function transactionError(tx, error) {
    alert("Database Error in Agenda: " + error);
}

function getAgendaDetail(tx) {
	var sql = "select e.id, e.item, e.detail from agenda e where e.id=:id";
	tx.executeSql(sql, [id], getAgendaDetailSuccess);
} 

function getAgendaDetailSuccess(tx, results) {
	var agendaDetail= results.rows.item(0);
	$("#agendaTitle").html(agendaDetail.item);
	$("#agendaDetail").html(agendaDetail.detail);
    console.log("** #agenda: "+ agendaDetail.item+", " + agendaDetail.detail);
};



function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
