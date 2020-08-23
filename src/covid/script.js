function loadScript(callback) {
	var script = document.createElement('script'); 
	script.src =  "http://localhost:5010/eel.js";
	script.onreadystatechange = callback;
    script.onload = callback;
	document.head.appendChild(script);
}

var jsCode = function() {
	
}

loadScript(jsCode);