// change l'image une fois l'input file rempli
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

// permet a l'utilisateur d'avoir une image stockée en ligne
var onlineimg = document.getElementById("onlineImg").addEventListener("click", function(e) {
    var img = document.getElementById("img");   
    var link = prompt("Lien de l'image");
    if(link === ""){
        img.setAttribute("src", "../assets/fill.png")
    } else {
        img.setAttribute("src", link)
    }
});

var uploadBtn = document.getElementById("uploadButton");
var currentImg = document.getElementById("img");

uploadBtn.addEventListener("click", function() {
    if(currentImg.getAttribute("src") == "../assets/fill.png" || currentImg.getAttribute("src") == ""){
        alert("Veuillez mettre une image.");
    } else {
        
    }
});