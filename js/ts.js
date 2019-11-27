function ts(i) {
	var ts = document.createElement("span");
	var body = document.getElementsByTagName("body");
	ts.classList.add("ts")
	ts.innerHTML = i;
	document.body.appendChild(ts);
	$(".ts").hide();
	$(".ts").fadeIn(500);
	setTimeout(function() {
		$(".ts").fadeOut(500);
		setTimeout(function() {
			document.body.removeChild(ts);
		},500)
	}, 1500);
}
