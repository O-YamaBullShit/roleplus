// variables des lancers et evenements
var output = document.getElementById("result");
var easyBtn = document.getElementById("easyBtn").addEventListener("click", function(){
    var lancer2 = Math.floor(Math.random() * 100) +1;
    var lancer3 = Math.floor(Math.random() * 100) +1;
    var final = [true];

    if(lancer2 >= 50){
        final[1] = true;
    } else {
        final[1] = false;
    }

    if(lancer3 >= 50){
        final[2] = true;
    } else {
        final[2] = false;
    }

    var res = 0;

    for(i in final){
        if(final[i]){
            res++;
        }
    }

    if(res == 0){
        newOutput("Echec critique !");
    } else if(res == 1){
        newOutput("Echec !");
    } else if(res == 2){
        newOutput("Réussite !");
    } else{
        newOutput("Réussite critique !")
    }
});
var normalBtn = document.getElementById("normalBtn").addEventListener("click", function(){
    var lancer1 = Math.floor(Math.random() * 100) +1;
    var lancer2 = Math.floor(Math.random() * 100) +1;
    var lancer3 = Math.floor(Math.random() * 100) +1;
    var final = [];

    if(lancer1 >= 50){
        final[0] = true;
    } else {
        final[0] = false;
    }

    if(lancer2 >= 50){
        final[1] = true;
    } else {
        final[1] = false;
    }

    if(lancer3 >= 50){
        final[2] = true;
    } else {
        final[2] = false;
    }

    var res = 0;

    for(i in final){
        if(final[i]){
            res++;
        }
    }

    if(res == 0){
        newOutput("Echec critique !");
    } else if(res == 1){
        newOutput("Echec !");
    } else if(res == 2){
        newOutput("Réussite !");
    } else{
        newOutput("Réussite critique !")
    }
});
var hardBtn = document.getElementById("hardBtn").addEventListener("click", function(){
    var lancer2 = Math.floor(Math.random() * 100) +1;
    var lancer3 = Math.floor(Math.random() * 100) +1;
    var final = [false];

    if(lancer2 >= 50){
        final[1] = true;
    } else {
        final[1] = false;
    }

    if(lancer3 >= 50){
        final[2] = true;
    } else {
        final[2] = false;
    }

    var res = 0;

    for(i in final){
        if(final[i]){
            res++;
        }
    }

    if(res == 0){
        newOutput("Echec critique !");
    } else if(res == 1){
        newOutput("Echec !");
    } else if(res == 2){
        newOutput("Réussite !");
    } else{
        newOutput("Réussite critique !")
    }
});
var coinFlip = document.getElementById("coinFlip").addEventListener("click", function(){
    var coin = Math.floor(Math.random() * 2) +1;
    if(coin == 1){
        newOutput("Pile");
    } else {
        newOutput("Face");
    }
});

function newOutput(param){
    output.innerText = "";
    output.innerHTML = param;
}