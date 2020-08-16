// on crée une variable array qui contiendra toutes les entrées au clavier et une variable now qui compte combien de touches ont étés rentrées.
var code = new Array();
var now = 0;

// konami code
// up up down down left right left right b a

// on prend la fenetre et on fait un event avec une
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
	// play sound
	
	//chargement de l'audio
	let sound = new Audio("../assets/easter_sound.mp3");
	
	// reset de l'audio
	sound.pause();
	sound.currentTime = 0;

	// reset array
	code = [];

	// lecture de l'audio
	sound.play();

	
}