// on crée une variable array qui contiendra toutes les entrées au clavier et une variable now qui compte combien de touches ont étés rentrées.
var code = new Array();
var now = 0;

// konami code
// ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft", "ArrowRight","ArrowLeft", "ArrowRight", "b", "a"]

// on prend la fenetre et on fait un event avec une fonction anonyme
var doc = document
doc.addEventListener("keydown", function(evt){
	code[now] = evt.key;
	now++;

	if(now == 10){
		var trueCode = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft", "ArrowRight","ArrowLeft", "ArrowRight", "b", "a"].toString();
		if(code.toString() == trueCode){
			easter();
		}
	}
});

var easter = () => {
	// open the console
		
}