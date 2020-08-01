function loadScript(callback) {
	var script = document.createElement('script'); 
	script.src =  "http://localhost:5010/eel.js";
	script.onreadystatechange = callback;
    script.onload = callback;
	document.head.appendChild(script);
}

var jsCode = function() {
	eel.expose(parseContent);
	function parseContent(data) {
		var i;
		for (i=0; i < data.articles.length; i++) {
			curnews = i + 1;
			num = curnews.toString()
			n = data.articles[i].title;
			document.getElementById("n" + num).innerHTML = n;
			a = data.articles[i].author;
			document.getElementById("a" + num).innerHTML = a;
			s = data.articles[i].source.name;
			document.getElementById("s" + num).innerHTML = s;
			d = data.articles[i].description;
			document.getElementById("d" + num).innerHTML = d;
			u = data.articles[i].url;
			document.getElementById("u" + num).setAttribute('href', u);
			document.getElementById("u" + num).innerHTML = "Get News";
			im = data.articles[i].urlToImage;
			document.getElementById("i" + num).src = im;
		}
	}
}

loadScript(jsCode);