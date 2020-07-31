var script = document.createElement('script'); 
script.src =  "http://localhost:5010/eel.js";
document.head.appendChild(script);
eel.expose(parseContent);
function parseContent(data) {
	console.log(data);
}
