// plik scripts.js



function rysujChoinke (j) {

	for (var i=0; i<=j; i++) {
		var star = "";
		for (var n=0; n<i*2-1; n++) {
			star += "*";
		}
		console.log(star);
	}
}
rysujChoinke(5);
