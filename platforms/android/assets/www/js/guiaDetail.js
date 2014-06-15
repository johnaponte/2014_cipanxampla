// Javascript for the agendaDetails page
var db;
var id = getUrlVars()["id"];
var from = getUrlVars()["from"];
var srcAudio = "";
var platform;

$(document).ready(function() {
	console.log("** DocumentReady")
	document.addEventListener("deviceready", onDevicereadyGuiaDetail, false);
});

function onDevicereadyGuiaDetail() {
	console.log("** On DevicereadyGuiaDetail ");
	console.log("** id: " + id);
	console.log("** from: " + from);
	platform = device.platform;
	db = window.openDatabase("panxamplaDB", "1.0", "CI Panxampla", 200000);
	console.log("database opened");
	db.transaction(getGuiaDetail, transactionError);

};

function transactionError(tx, error) {
	alert("Database Error in guiaDetail: " + error);
};

function getGuiaDetail(tx) {
	console.log("** In getGuiaDetail");
	var sql = "select e.id, e.label, e.comment, e.audio, e.image, e.map from guia e where e.id=:id";
	tx.executeSql(sql, [id], getGuiaDetailSuccess);
};

function getGuiaDetailSuccess(tx, results) {
	console.log("** In getGuiaDetailSucess");
	var guiaDetail = results.rows.item(0);
	if (from == "audioguia") {
		$("#volverButton").attr({
			href : "audioguia.html",
			target : "#audioguia"
		});
		$("#volverLink").attr({
			href : "audioguia.html",
			target : "#audioguia"
		});
		$("#volverLink").html("Volver a la audioguia");
	}
	console.log("****************************************");
	console.log("**** guiaDetail.audio:" + guiaDetail.audio);
	console.log("**** guiaDetail.image:" + guiaDetail.image);
	console.log("**** guiaDetail.map:" + guiaDetail.map);
	console.log("****************************************");
	if (platform == "Android") {
		srcAudio = "/android_asset/audio/" + guiaDetail.audio;
	} else {
		scrAudio = "audio/" + guiaDetail.audio;
	}
	console.log("** Audio src: " + srcAudio);
	$("#label").html(guiaDetail.label);
	$("#comment").html(guiaDetail.comment);
	$("#imgguia").attr("src","audioguia/"+guiaDetail.image);
	$("#imgmap").attr("src","audioguia/"+guiaDetail.map);

	console.log("** #guiaDetail: " + guiaDetail.label + ", ");

	registerAudio();
};

function registerAudio() {
	console.log("** onRegisterAudio");
	console.log("** platform: " + platform);
	$("#audioButton").click(function() {
		console.log("** Click of audioFunction with srcAudio: " + srcAudio);
		var media = new Media(srcAudio,
		// sucess callback
		function() {
			console.log("** Sucess on audio: " + srcAudio);
		},
		// error calback
		function(err) {
			console.log("** Error on audio: [" + err.code + "], " + err.message);
		});
		media.play();
	});

};

function getUrlVars() {
	var vars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
};
