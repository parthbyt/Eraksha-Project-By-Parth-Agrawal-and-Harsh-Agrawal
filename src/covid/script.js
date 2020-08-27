
function parseCovid(data) {
	var States = ["AN", "AP", "AR", "AS", "BR", "CH", "CT", "DL", "DN", "GA", "GJ", "HP", "HR", "JH", "JK", "KA", "KL", "LA", "MH", "ML", "MN",
				 "MP", "MZ", "NL", "OR", "PB", "PY", "RJ", "SK", "TG", "TN", "TR", "UP", "UT", "WB"]
	var i;
	for (i=0; i < States.length; i++ ) {
		var n = States[i];
		document.getElementById(n + "c").innerHTML =  data[n].total.confirmed;
		document.getElementById(n + "a").innerHTML =  data[n].total.confirmed - (data[n].total.recovered + data[n].total.deceased);
		document.getElementById(n + "r").innerHTML =  data[n].total.recovered;
		document.getElementById(n + "d").innerHTML =  data[n].total.deceased;
	}
}