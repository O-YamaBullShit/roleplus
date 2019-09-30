var prompteur = document.getElementById("onlineChar").addEventListener("click", function(){
    var lien = prompt("Lien de la fiche perso");
    load(lien);
})
function load(file){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        console.log(this);
        if(this.readyState == 4 && this.status == 200) {
            $("#personnage").empty();
            if(this.response.id == 1){
                                $('#personnage').append(`<p>Sexe : ${this.response.gender} </p>`);
                $('#personnage').append(`<p>Nom : ${this.response.name} </p>`);
                $('#personnage').append(`<p>Prenom : ${this.response.firstName} </p>`);
                $('#personnage').append(`<p>Race : ${this.response.race} </p>`);
                $('#personnage').append(`<p>Age : ${this.response.age} </p>`);
                $('#personnage').append(`<p>Hobbies : ${this.response.hobbies} </p>`);
                $('#personnage').append(`<p>Metier : ${this.response.job} </p>`);
                $('#personnage').append(`<p>Pouvoir/spécialisation : ${this.response.power} </p>`);
                $('#personnage').append(`<p>Histoire : ${this.response.story} </p>`);
            } else if (this.response.id == 2) {
                var forces = this.response.strenghts.replace(/\n/g, "<br />");
                var faiblesses = this.response.weaknesses.replace(/\n/g, "<br />");
                var objets = this.response.objects.replace(/\n/g, "<br />");
                $('#personnage').append(`<p>Sexe : ${this.response.gender} </p>`);
                $('#personnage').append(`<p>Nom : ${this.response.name} </p>`);
                $('#personnage').append(`<p>Prenom : ${this.response.firstname} </p>`);
                $('#personnage').append(`<p>Race : ${this.response.race} </p>`);
                $('#personnage').append(`<p>Age : ${this.response.age} </p>`);
                $('#personnage').append(`<p>Hobbies : ${this.response.hobbies} </p>`);
                $('#personnage').append(`<p>Metier : ${this.response.job} </p>`);
                $('#personnage').append(`<p>Pouvoir/spécialisation : ${this.response.power} </p>`);
                $('#personnage').append(`<p>Anecdote sur le personnage : ${this.response.addinfo} </p>`);
                $('#personnage').append(`<p>Goûts : ${this.response.tastes} </p>`);
                $('#personnage').append(`<p>Forces : ${forces} </p>`);
                $('#personnage').append(`<p>Faiblesses : ${faiblesses} </p>`);
                $('#personnage').append(`<p>Objets : ${objets} </p>`);
                $('#personnage').append(`<p>Histoire : ${this.response.story} </p>`);
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
 * Thanks to King Stone for his help !
 * https://stackoverflow.com/questions/55890193/how-to-read-json-file-after-putting-it-in-a-input-type-file
 *  
 */

function processText(text) {
    try {
        var response = JSON.parse(text);
        var forces = response.strenghts.replace(/\n/g, "<br />");
        var faiblesses = response.weaknesses.replace(/\n/g, "<br />");
        var objets = response.objects.replace(/\n/g, "<br />");
        $("#personnage").empty();
        if (response.id == 1) {
            $('#personnage').append(`<p>Sexe : ${response.gender} </p>`);
            $('#personnage').append(`<p>Nom : ${response.name} </p>`);
            $('#personnage').append(`<p>Prenom : ${response.firstName} </p>`);
            $('#personnage').append(`<p>Race : ${response.race} </p>`);
            $('#personnage').append(`<p>Age : ${response.age} </p>`);
            $('#personnage').append(`<p>Hobbies : ${response.hobbies} </p>`);
            $('#personnage').append(`<p>Metier : ${response.job} </p>`);
            $('#personnage').append(`<p>Pouvoir/spécialisation : ${response.power} </p>`);
            $('#personnage').append(`<p>Histoire : ${response.story} </p>`);
        } else if (response.id == 2) {
            $('#personnage').append(`<p>Sexe : ${response.gender} </p>`);
            $('#personnage').append(`<p>Nom : ${response.name} </p>`);
            $('#personnage').append(`<p>Prenom : ${response.firstname} </p>`);
            $('#personnage').append(`<p>Race : ${response.race} </p>`);
            $('#personnage').append(`<p>Age : ${response.age} </p>`);
            $('#personnage').append(`<p>Hobbies : ${response.hobbies} </p>`);
            $('#personnage').append(`<p>Metier : ${response.job} </p>`);
            $('#personnage').append(`<p>Pouvoir/spécialisation : ${response.power} </p>`);
            $('#personnage').append(`<p>Anecdote sur le personnage : ${response.addinfo} </p>`);
            $('#personnage').append(`<p>Goûts : ${response.tastes} </p>`);
            $('#personnage').append(`<p>Forces : ${forces} </p>`);
            $('#personnage').append(`<p>Faiblesses : ${faiblesses} </p>`);
            $('#personnage').append(`<p>Objets : ${objets} </p>`);
            $('#personnage').append(`<p>Histoire : ${response.story} </p>`);
        } else {
            alert("Erreur fichier non reconnu !");
        }
    } catch (error) {
        $('#personnage').append(`<p>ERREUR : ${error.Message} </p>`);
    }
}
function handleFileSelect(evt) {
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
