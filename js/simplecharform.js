var save = document.getElementById("save-button");

save.addEventListener("click", createOut);

var gender;
var name;
var firstName;
var race;
var age;
var hobbies;
var job;
var power;
var story;
var image;

function createOut(){
    gender = document.getElementById("gender").value;
    name = document.getElementById("name").value;
    firstName = document.getElementById("firstName").value;
    race =document.getElementById('race').value;
    age = document.getElementById("numberBox").value;
    hobbies = document.getElementById("hobbies").value;
    job = document.getElementById("job").value;
    power = document.getElementById("power").value;
    story = document.getElementById("story").value;
    image = $("#img").attr("src");

    if(image.startsWith("../")){
        image = "Pas d'image chargée !";
    } else if(image.startsWith("http") || image.startsWith("https")) {
        image = "Image hebergée sur internet (" + image + ")";
    } else {
        image = "Image locale.";
    }

    var screenSize = screen.width;
    if(screenSize <= 700){
        var div = document.querySelector(".imgForm");
        div.style.right = "10px";
    } else {
        var div = document.querySelector(".imgForm");
        div.style.right = "-145%";
    }

    var out = document.getElementById("output");
    out.innerHTML = `
    <div class="outputText">
    <p>Sexe : ${gender}</p>
    <p>Nom : ${name}</p>
    <p>Prénom : ${firstName}</p>
    <p>Race : ${race}</p>
    <p>Age : ${age}</p>
    <p>Hobbies : ${hobbies}</p>
    <p>Métier : ${job}</p>
    <p>Pouvoir/Spécialisation : ${power}</p>
    <p>Métier : ${story}</p>
    <p>Lien de l'image : ${image}</p>
    </div>
    <button onclick="saveJson()" class="charFormButton">Exporter au format .rplus.json.</button> <br /> <br />
    <button onclick="exportMd()" class="charFormButton">Exporter au format Markdown.</button> <br /> <br />
    `
}

function saveJson(){
    exportJsonSimple(gender, name, firstName, race, age, hobbies, job, power, story, image)
}

function exportMd(){
    exportMdSimple(gender, name, firstName, race, age, hobbies, job, power, story, image)
}