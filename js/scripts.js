// plik scripts.js

function drawTree(levels) {

	for (var i=0; i<=levels; i++) {
		var star = "";
		for (var n=0; n<i*2-1; n++) {
			star += "*";
		}
		console.log(star);
	}
}
drawTree(5);
