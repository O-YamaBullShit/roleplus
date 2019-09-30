var prompteur = document.getElementById("onlineChar").addEventListener("click", function(){
    var lien = prompt("Lien de la fiche perso");
    load(lien);
})
function load(file){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            $("#personnage").empty();
            if(this.response.id == 1){
                $("#personnage").empty();
                $('#personnage').append(`<br /> <br /><input class="textBox" id="gender" placeholder="Sexe" type="text" value="${this.response.gender}" /> <br /> <br />`);
                $('#personnage').append(`<input class="textBox" id="name" placeholder="Nom" type="text" value="${this.response.name}" /> <br /> <br />`);
                $('#personnage').append(`<input class="textBox" id="firstName" placeholder="Prénom" type="text" value="${this.response.firstName}" /> <br /> <br />`);
                $('#personnage').append(`<input class="textBox" id="race" placeholder="Race" type="text" value="${this.response.race}" /> <br /> <br />`);
                $('#personnage').append(`<input class="textBox" id="age" placeholder="Age" type="number" value="${this.response.age}"/> <br /> <br />`);
                $('#personnage').append(`<input class="textBox" id="hobbies" placeholder="Hobbie(s)" type="text" value="${this.response.hobbies}" /> <br /> <br />`);
                $('#personnage').append(`<input class="textBox" id="job" placeholder="Métier" type="text" value="${this.response.job}" /> <br /> <br />`);
                $('#personnage').append(`<input class="textBox" id="power" placeholder="Pouvoir/spécialisation" type="text" value="${this.response.power}" /> <br /> <br />`);
                $('#personnage').append(`<textarea class="textAreaBox" id="story" placeholder="Histoire" type="text">${this.response.story}</textarea> <br /> <br />`);
                $("#personnage").append(`<button class="shinyButton" onclick="export()">Exporter le personnage au format .rplus.json</button>`);
                $("#personnage").append(`<button class="shinyButton" onclick="export()">Exporter le personnage au format Markdown</button>`)
            } else if (this.response.id == 2) {
                $("#personnage").empty();
                /*var forces = this.response.strenghts.replace(/\n/g, "<br />");
                var faiblesses = this.response.weaknesses.replace(/\n/g, "<br />");
                var objets = this.response.objects.replace(/\n/g, "<br />");*/
                var forces = this.response.strenghts;
                var faiblesses = this.response.weaknesses;
                var objets = this.response.objects;
                $('#personnage').append(`<br /> <br /><input class="textBox" id="gender" placeholder="Sexe" type="text" value="${this.response.gender}" /> <br /> <br />`);
                $('#personnage').append(`<input class="textBox" id="name" placeholder="Nom" type="text" value="${this.response.name}" /> <br /> <br />`);
                $('#personnage').append(`<input class="textBox" id="firstname" placeholder="Prénom" type="text" value="${this.response.firstname}" /> <br /> <br />`);
                $('#personnage').append(`<input class="textBox" id="race" placeholder="Race" type="text" value="${this.response.race}" /> <br /> <br />`);
                $('#personnage').append(`<input class="textBox" id="age" placeholder="Age" type="number" value="${this.response.age}"/> <br /> <br />`);
                $('#personnage').append(`<input class="textBox" id="hobbies" placeholder="Hobbie(s)" type="text" value="${this.response.hobbies}" /> <br /> <br />`);
                $('#personnage').append(`<input class="textBox" id="job" placeholder="Métier" type="text" value="${this.response.job}" /> <br /> <br />`);
                $('#personnage').append(`<input class="textBox" id="power" placeholder="Pouvoir/spécialisation" type="text" value="${this.response.power}" /> <br /> <br />`);
                $('#personnage').append(`<input class="textBox" id="addinfo" placeholder="Anecdote sur le personnage" type="text" value="${this.response.addinfo}" /> <br /> <br />`);
                $('#personnage').append(`<input class="textBox" id="tastes" placeholder="Goûts" type="text" value="${this.response.tastes}" /> <br /> <br />`);
                $('#personnage').append(`<textarea class="textAreaBox" id="strenghts" placeholder="Forces" type="text">${forces}</textarea> <br /> <br />`);
                $('#personnage').append(`<textarea class="textAreaBox" id="weaknesses" placeholder="Faiblesses" type="text">${faiblesses}</textarea> <br /> <br />`);
                $('#personnage').append(`<textarea class="textAreaBox" id="objects" placeholder="Objets" type="text">${objets}</textarea> <br /> <br />`);
                $('#personnage').append(`<textarea class="textAreaBox" id="story" placeholder="Histoire" type="text">${this.response.story}</textarea> <br /> <br />`);
                $("#personnage").append(`<button class="shinyButton" onclick="export()">Exporter en .rplus.json</button>`);
                $("#personnage").append(`<br /><br /><button class="shinyButton" onclick="export()">Exporter en Markdown</button>`)
            } else {
                alert("Erreur fichier non reconnu !");
            }
        } else if (this.readyState == 4 && this.status == 404) {
            console.log("Erreur")
        }
    }

    xhr.open("GET", file, true);
    xhr.responseType = "json"
    xhr.send();
}

/**
 * 
 * Thanks to King Stone for his help !a
 * https://stackoverflow.com/questions/55890193/how-to-read-json-file-after-putting-it-in-a-input-type-file
 *  
 */

function processText(text) {
    try {
        var response = JSON.parse(text);
        /*var forces = response.strenghts.replace(/\n/g, "<br />");
        var faiblesses = response.weaknesses.replace(/\n/g, "<br />");
        var objets = response.objects.replace(/\n/g, "<br />");*/
        $("#personnage").empty();
        if (response.id == 1) {
            $('#personnage').append(`<br /> <br /><input type="text" class="textBox" id="gender" placeholder="Sexe" value="${response.gender}" /> <br /> <br />`);
            $('#personnage').append(`<input type="text" class="textBox" id="name" placeholder="Nom" value="${response.name}" /> <br /> <br />`);
            $('#personnage').append(`<input type="text" class="textBox" id="firstName" placeholder="Prénom" value="${response.firstName}" /> <br /> <br />`);
            $('#personnage').append(`<input type="text" class="textBox" id="race" placeholder="Race" value="${response.race}" /> <br /> <br />`);
            $('#personnage').append(`<input type="Number" class="textBox" id="age" placeholder="Age" value="${response.age}" /> <br /> <br />`);
            $('#personnage').append(`<input type="text" class="textBox" id="hobbies" placeholder="Hobbie(s)" value="${response.hobbies}" /> <br /> <br />`);
            $('#personnage').append(`<input type="text" class="textBox" id="job" placeholder="Métier" value="${response.job}" /> <br /> <br />`);
            $('#personnage').append(`<input type="text" class="textBox" id="power" placeholder="Pouvoir/spéicalisation" value="${response.power}" /> <br /> <br />`);
            $('#personnage').append(`<textarea class="textAreaBox" id="story" placeholder="Histoire">${response.story}</textarea> <br /> <br />`);
            $("#personnage").append(`<button class="shinyButton" onclick="exportJsonSimpleChar()">Exporter en .rplus.json</button>`);
            $("#personnage").append(`<br><br><button class="shinyButton" onclick="exportMdSimpleChar()">Exporter en Markdown</button>`)
        } else if (response.id == 2) {
            $('#personnage').append(`<br /> <br /><input type="text" id="gender" placeholder="Sexe" class="textBox" value="${response.gender}" /> <br /> <br />`);
            $('#personnage').append(`<input type="text" id="name" placeholder="Nom" class="textBox" value="${response.name}" /> <br /> <br />`);
            $('#personnage').append(`<input type="text" id="firstname" placeholder="Prénom" class="textBox" value="${response.firstname}" /> <br /> <br />`);
            $('#personnage').append(`<input type="text" id="race" placeholder="Race" class="textBox" value="${response.race}" /> <br /> <br />`);
            $('#personnage').append(`<input type="text" id="age" placeholder="Age" class="textBox" value="${response.age}" /> <br /> <br />`);
            $('#personnage').append(`<input type="text" id="hobbies" placeholder="Hobbie(s)" class="textBox" value="${response.hobbies}" /> <br /> <br />`);
            $('#personnage').append(`<input type="text" id="job" placeholder="Métier" class="textBox" value="${response.job}" /> <br /> <br />`);
            $('#personnage').append(`<input type="text" id="power" placeholder="Pouvoir/spéicalisation" class="textBox" value="${response.power}" /> <br /> <br />`);
            $('#personnage').append(`<input type="text" id="addinfo" placeholder="Anecdote sur le personnage" class="textBox" value="${response.addinfo}" /> <br /> <br />`);
            $('#personnage').append(`<input type="text" id="tastes" placeholder="Goûts" class="textBox" value="${response.tastes}" /> <br /> <br />`);
            $('#personnage').append(`<textarea placeholder="Forces" id="strenghts" placeholder="Forces" class="textAreaBox">${response.strenghts}</textarea> <br /> <br />`);
            $('#personnage').append(`<textarea placeholder="Faiblesses" id="weaknesses" placeholder="Faiblesses" class="textAreaBox">${response.weaknesses}</textarea> <br /> <br />`);
            $('#personnage').append(`<textarea placeholder="Objets" id="objects" placeholder="Objets" class="textAreaBox">${response.objects}</textarea> <br /> <br />`);
            $('#personnage').append(`<textarea placeholder="Histoire" id="story" placeholder="Histoire" class="textAreaBox">${response.story}</textarea> <br /> <br />`);
            $("#personnage").append(`<button class="shinyButton" onclick="exportJsonComplexChar()">Exporter en .rplus.json</button>`);
            $("#personnage").append(`<br /><br /><button class="shinyButton" onclick="exportMdComplexChar()">Exporter en Markdown</button>`)
        } else {
            alert("Erreur fichier non reconnu !");
        }
    } catch (error) {
        $('#personnage').append(`<p>ERREUR : ${error.Message} </p>`);
    }
}
function handleFileSelect(evt) {
    $("#personnage").empty();
    var files = evt.target.files;

    if (files == null || files.length == 0) return;
    var file = files[0];
    var reader = new FileReader();

    reader.onload = (function (theFile) {
        return function (e) {
            processText(e.target.result)

        };
    })(file);

    // Read in the image file as a data URL.
    reader.readAsText(file);
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);


function exportJsonSimpleChar(){
	var gender;
var name;
var firstName;
var race;
var age;
var hobbies;
var job;
var power;
var story;

gender = document.getElementById("gender").value;
name = document.getElementById("name").value;
firstName = document.getElementById("firstName").value;
race =document.getElementById('race').value;
age = document.getElementById("age").value;
hobbies = document.getElementById("hobbies").value;
job = document.getElementById("job").value;
power = document.getElementById("power").value;
story = document.getElementById("story").value;
exportJsonSimple(gender, name, firstName, race, age, hobbies, job, power, story);
}

function exportMdSimpleChar() {
        var gender;
var name;
var firstName;
var race;
var age;
var hobbies;
var job;
var power;
var story;

gender = document.getElementById("gender").value;
name = document.getElementById("name").value;
firstName = document.getElementById("firstName").value;
race =document.getElementById('race').value;
age = document.getElementById("age").value;
hobbies = document.getElementById("hobbies").value;
job = document.getElementById("job").value;
power = document.getElementById("power").value;
story = document.getElementById("story").value;
exportMdSimple(gender, name, firstName, race, age, hobbies, job, power, story);

}

function exportJsonComplexChar(){
var gender;
var name;
var firstname;
var race;
var age;
var hobbies;
var job;
var power;
var add_info;
var tastes
var forces;
var weaknesses;
var objects;
var story;
gender = document.getElementById("gender").value;
    name = document.getElementById("name").value;
    firstname = document.getElementById("firstname").value;
    race = document.getElementById("race").value;
    age = document.getElementById("age").value;
    hobbies = document.getElementById("hobbies").value;
    job = document.getElementById("job").value;
    power = document.getElementById("power").value;
    add_info = document.getElementById("addinfo").value;
    tastes = document.getElementById("tastes").value;
    forces = document.getElementById("strenghts").value;
    weaknesses = document.getElementById("weaknesses").value;
    objects = document.getElementById("objects").value;
    story = document.getElementById("story").value;

exportJsonComplex(gender, name, firstname, race, age, hobbies, job, power, add_info, tastes, forces, weaknesses, objects, story);
}

function exportMdComplexChar(){
var gender;
var name;
var firstname;
var race;
var age;
var hobbies;
var job;
var power;
var add_info;
var tastes
var forces;
var weaknesses;
var objects;
var story;
gender = document.getElementById("gender").value;
    name = document.getElementById("name").value;
    firstname = document.getElementById("firstname").value;
    race = document.getElementById("race").value;
    age = document.getElementById("age").value;
    hobbies = document.getElementById("hobbies").value;
    job = document.getElementById("job").value;
    power = document.getElementById("power").value;
    add_info = document.getElementById("addinfo").value;
    tastes = document.getElementById("tastes").value;
    forces = document.getElementById("strenghts").value;
    weaknesses = document.getElementById("weaknesses").value;
    objects = document.getElementById("objects").value;
    story = document.getElementById("story").value;

exportMdComplex(gender, name, firstname, race, age, hobbies, job, power, add_info, tastes, forces, weaknesses, objects, story);
}