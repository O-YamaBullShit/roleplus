// parser le bouton de sauvegarde et en faire un élément
var saveBtn = document.getElementById("save-button");
saveBtn.addEventListener("click", out);

// variables du perso
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
var image;

// fonction de sortie
function out(){
    gender = document.getElementById("gender").value;
    name = document.getElementById("name").value;
    firstname = document.getElementById("firstname").value;
    race = document.getElementById("race").value;
    age = document.getElementById("numberBox").value;
    hobbies = document.getElementById("hobbies").value;
    job = document.getElementById("job").value;
    power = document.getElementById("power").value;
    add_info = document.getElementById("addinfo").value;
    tastes = document.getElementById("tastes").value;
    forces = document.getElementById("strenghts").value;
    weaknesses = document.getElementById("weaknesses").value;
    objects = document.getElementById("objects").value;
    story = document.getElementById("story").value;

    //image
    image = document.getElementById("img").getAttribute("src");
    if(image.startsWith("../")){
        image = "Pas d'images chargée !";
    } else if(image.startsWith("http")) {
        image = document.getElementById("img").getAttribute("src");
    } else {
        image = "Image locale";
    }

    var screenSize = screen.width;
    if(screenSize <= 700){
        var div = document.querySelector(".imgForm");
        div.style.right = "10px";
    } else {
        var div = document.querySelector(".imgForm");
        div.style.right = "-145%";
    }
    
    // output
    var out = document.getElementById("output");
    out.innerHTML = `
    <p>Sexe : ${gender}</p>
    <p>Nom : ${name}</p>
    <p>Prénom : ${firstname}</p>
    <p>Race : ${race}</p>
    <p>Age : ${age}</p>
    <p>Hobbies : ${hobbies}</p>
    <p>Métier : ${job}</p>
    <p>Pouvoir/Spécialisation : ${power}</p>
    <p>Annecdote sur le personnage : ${add_info}</p>
    <p>Goûts : ${tastes.replace(/\n/g, '<br />')}</p>
    <p>Forces : ${forces.replace(/\n/g, '<br />')}</p>
    <p>Faiblesses : ${weaknesses.replace(/\n/g, '<br />')}</p>
    <p>Objets : ${objects.replace(/\n/g, '<br />')}</p>
    <p>Histoire : ${story}</p>
    <p>Image : ${image}</p>
    <br>
    <br>
    <button onclick="saveJson()" class="charFormButton">Exporter au format .rplus.json.</button> <br /> <br />
    <button onclick="exportMd()" class="charFormButton">Exporter au format Markdown.</button> <br /> <br />
    `
}

function saveJson(){
    exportJsonComplex(gender, name, firstname, race, age, hobbies, job, power, add_info, tastes, forces, weaknesses, objects, story, image);
}

function exportMd(){
    exportMdComplex(gender, name, firstname, race, age, hobbies, job, power, add_info, tastes, forces, weaknesses, objects, story, image);
}