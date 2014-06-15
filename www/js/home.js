// Javascrypt for home
var db;
var dbVersion;
var dbCurrentVersion = 1;

document.addEventListener("deviceready", onDeviceReadyHome, false);

// device APIs are available
function onDeviceReadyHome() {
	// Now safe to use device APIs
	console.log("** Device Ready Home **");
	navigator.splashscreen.hide();
	db = window.openDatabase("panxamplaDB", "1.0", "CI Panxampla", 200000);
	// Get the version number saved in the database. if not equal populate again
	db.transaction(getVersion, transaction_error);
	if (dbVersion=dbCurrentVersion) {
		console.log("** Database already created");
	} else {
		console.log("** Database need to be created and populated");
		db.transaction(populateDB, transaction_error, populateDB_success);
	}

};

function transaction_error(tx, error) {
	alert("Database Error: " + error);
}

function populateDB_success() {
	console.log("** Database populate success");
	dbCreated = true;
}

function populateDB(tx) {
	var sql;
	// This is the current version of the database. Change in need to update content
	sql="DROP TABLE IF EXISTS dbversion";
	console.log(sql);
	tx.executeSql(sql);

	sql="INSERT INTO dbversion (version) VALUES (1)";
	console.log(sql);
	tx.executeSql(sql);

	sql="CREATE TABLE IF NOT EXISTS  dbversion (id INTEGER PRIMARY KEY AUTOINCREMENT, version INTEGER); ";
	console.log(sql);
	tx.executeSql(sql);

	// The agenda 
	sql = "DROP TABLE IF EXISTS agenda";
	console.log(sql);
	tx.executeSql(sql);

	sql = "CREATE TABLE IF NOT EXISTS agenda ( id INTEGER PRIMARY KEY AUTOINCREMENT, item VARCHAR(50), detail TEXT)";
	console.log(sql);
	tx.executeSql(sql);

	sql = "INSERT INTO agenda (item,detail) VALUES ('Exposició permanent', '<p> En aquest museu municipal podem trobar una exposició permanent de fotografies referents a la Vall del Toscar, on es destaca natura, història i industria del municipi. </p> <p> La natura, podem trobar diverses especies de fauna i flora  com ara el porc senglar, cabra hispànica, diferents aus rapinyaires, margalló, teix, etc... </p> <p> La industria del municipi al barranc de la Conca que va ser el que va portar empenta al poble perquè s’hi van establir una sèrie de molins, manufactures per fer teixits, fàbriques per fer papers... i això va fer que la població del municipi pugés i visqués una època d’esplendor. </p> <p> Dintre aquesta exposició a part de les fotografies podem trobar exposades esteles funeràries discoïdals provinents del poblat de Carles, ceràmica d’un antic poblament d’origen romà, així com diferents materials de la vida quotidiana al camp. </p> <p> També, trobem un apartat dedicat a l’artesania del margalló que elaboraven les dones del municipi sobre els anys 50, amb la elaboració de utensilis per al camp i ara mes recaient peces ornamentals. </p>')";
	console.log(sql);
	tx.executeSql(sql);

	sql = "INSERT INTO agenda (item,detail) VALUES ('Ruta de Panxampla','<p>Alfara de Carles, un petit poble de muntanya situat a 334m d’altura, al bell mig del Parc Natural dels Ports. Envoltat de muntanyes, valls i barrancs i situat sobre guixos i calcàries de la època del Triàsic, on afloren els sediments més antics dels Ports, amb una extensió de 6.400 hectàrees. </p>')";
	console.log(sql);
	tx.executeSql(sql);

	sql = "INSERT INTO agenda (item,detail) VALUES ('Cursa de Panxampla','<p>Iniciarem la cursa a la zona esportiva de la població (322 m) i els nostres primers passos ens ajudaran a escalfar la “maquinària” mentre ens adrecem a la sendera GR-7. Aquesta sendera amunt ens conduirà fins al Corral de Marí (60 0m), i un cop aquí un gir a l’esquerra ens portarà a la sendera que passa per la Cova del Vidre (634 m). Continuarem endavant fins arribar als Bassis.(548 m). Des d’aquest darrer punt agafarem forces ja que ens espera un pendent pronunciat fins arribar a la Punta de l’Espina (1.182 m). Aquest any fins a la cima en vistes a les Roques de Benet d’Horta de Sant Joan.</p><p>Vençut aquest desnivell seguirem avall fins a l’era del Corral del Maraco, i com a novetat, la cursa transcorrerà per la cresta de la muntanya amb boniques vistes a les dues valls, fins arribar a una tartera (baixa molt tècnica) que ens deixarà a peu de la sendera de Carrer Ample (913 m).</p><p>Enfilarem el recorregut fins enllaçar amb el GR de les Rases del Maraco (102 0m),i les fantàstiques vistes com a testimonis de la nosta gesta ens plantaran al Colldels Corralets (1054 m); on ens llençarem per segon cop tartera avall (baixada tècnica)i sense deixar la sendera ben aviat veurem enfront la Cova dels Adells (790 m).</p><p>Ràpidament el trajecte ens portarà fins al Coll de Morera (575 m), un senderol fins a la Font del Ferro i a escassos metres trobarem l’ombra refrescant de les Fonts del Toscà (508 m).</p><p>En aquest punt introduïm una altra novetat a l’antic recorregut per trepitjar indrets diferents i a la vegada creiem que més atractius que ens endinsaran pels racons del Toscar, fins al de Villaubí 600 m.  Des d’aquest punt la sendera deixa a mà dreta la vall del Barranc Cervera, i correm avall fins topar-nos amb el Carrascot (476 m). Amb les cames cansades i sense parar arribarem a creuar el barranc de la Conca pel Pas de Peret (245 m).</p><p>Emprenem la darrera pujada creuant la carretera local que condueix al poble , i un senderol ens deixarà en vistes d’Alfara de Carles i solament restarà 1 Km fins a l’arribada (322 m).</p>')";
	console.log(sql);
	tx.executeSql(sql);
	
	// The Audiguide
	sql = "DROP TABLE IF EXISTS audiguia";
	console.log(sql);
	tx.executeSql(sql);
	
	sql = "CREATE TABLE IF NOT EXISTS audioguia (id INTEGER PRIMARY KEY AUTOINCREMENT, label VARCHAR(50), comment TEXT, image varchar(50), map varchar(50))";	
	console.log(sql);
	tx.executeSql(sql);
	
	sql = "INSERT INTO audiogia (label, comment, audio, image, map) values ('Arnés','Arnès de Abellas','arnes.jpg' , 'anrnes.mp3', 'planolarnes.jpg')";
	console.log(sql);
	tx.executeSql(sql);
		
	sql = "INSERT INTO audiogia (label, comment, audio, image, map) values ('Margalló','El Margalló','margallo.jpg' , 'margallo.mp3', 'planolmargallo.jpg')";
	console.log(sql);
	tx.executeSql(sql);

	sql = "INSERT INTO audiogia (label, comment, audio, image, map) values ('Esteles funeràries','Les Esteles funeràries','esteles.jpg' , 'esteles.mp3', 'planolesteles.jpg')";
	console.log(sql);
	tx.executeSql(sql);

	sql = "INSERT INTO audiogia (label, comment, audio, image, map) values ('Eines per conrear','Las Eines per conrear','eines.jpg' , 'eines.mp3', 'planoleines.jpg')";
	console.log(sql);
	tx.executeSql(sql);


};

function getVersion(tx) {
	console.log("** In getVersion");
	sql="SELECT max(version) from dbversion";
	console.log(sql);
	tx.executeSql(sql,[],getVersionSucess);
}

function getVersionSucess(tx,result){
	console.log("** IN getVersionSucess");
	var versions= result.rows.item(0);
	dbVersion=versions.version;
	console.log("** Value of dbVersion");
}
