// elements
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var textBox = document.getElementById("numberBox");

// age variable
var age = textBox.value;

// events listeners
plus.addEventListener("click", stepUp);
minus.addEventListener("click", stepDown);
textBox.addEventListener("focusout", verifyText);
textBox.addEventListener("click", clickClear);

// add 1 to text box
function stepUp(e){
    e.preventDefault();
    age++;
    textBox.value = age.toString();
    console.log("added 1")
}

// take 1 to text box
function stepDown(e){
    e.preventDefault();
    if(age == 0) {
        alert("Vous ne pouvez pas aller en dessous de 0 !");
    } else {
        age--;
        textBox.value = age.toString();
    }
}


function verifyText(e){
    e.preventDefault();
    var query = textBox.value
    // check if the text box doesn't contain a character non allowed like letters
    var isNumeric=query.match(/^\d+$/);
    if(!isNumeric){
        alert("Veuillez ne pas mettre de caractères autres que des chiffres s'il vous plaît.");
        textBox.value = "0"
        age = 0;
    }else{
        // no code here ¯\_(ツ)_/¯
    }
}

function clickClear(e) {
    e.preventDefault();
    if(textBox.value == "0") {
        textBox.value = "";
    }
}