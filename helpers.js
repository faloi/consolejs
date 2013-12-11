function printf(message) {
	var div = document.createElement("DIV");
	div.appendChild(document.createTextNode(message));
	
	document.getElementsByTagName("body")[0].appendChild(div);
};

document.onreadystatechange = function () {
  	if (document.readyState == "complete") {
    	main();
	}
}