// on cree la variable xhr

// on cree les variables de réponse
var res;
var ver = "1.0.1.2";

var xhr1 = new XMLHttpRequest();

xhr1.onreadystatechange = function() {
    if(this.responseText != ver){
        alert("Une nouvelle version de Role + est disponible !")
    }
}

var url = "https://raw.githubusercontent.com/O-YamaBullShit/roleplus/master/assets/version";

xhr1.open("GET", url, true)
xhr1.responseType = "text/plain";
xhr1.send();