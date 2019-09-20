function exportJsonSimple(gender, nom, firstName, race, age, hobbies, job, power, story, image){
    var json = {
		id: 1,
        gender: gender,
        name: nom,
        firstName: firstName,
        race: race,
        age: age,
        hobbies: hobbies,
        job: job,
        power: power,
        story: story,
        image: image
    }
    var blob = new Blob([JSON.stringify(json, null, 2)], { type: "application/json" });
    saveAs(blob, `${json.firstName}${json.name}.rplus.json`);
}

function exportMdSimple(gender, nom, firstName, race, age, hobbies, job, power, story, image){
    var json = {
        gender: gender,
        name: nom,
        firstName: firstName,
        race: race,
        age: age,
        hobbies: hobbies,
        job: job,
        power: power,
        story: story,
        image: image
    }
    var text = `
**Sexe** : ${json.gender}

**Nom** : ${json.name}

**Prénom** : ${json.firstName}

**Race** : ${json.race}

**Age** : ${json.age}

**Hobbies** : ${json.hobbies}

**Métier** : ${json.job}

**Pouvoir / Spécialisation** : ${json.power}

**Histoire** : ${json.story}

**Image** : ${json.image}
    `
    var blob = new Blob([text], {type : "text/markdown"});
    saveAs(blob, `${json.name}${json.firstName}.rplus.md`)
}

function exportJsonComplex(gender, name, firstname, race, age, hobbies, job, power, add_info, tastes, forces, weaknesses, story, image){
    var json = {
        id: 2,
        gender: gender,
        name: name,
        firstname: firstname,
        race: race,
        age: age,
        hobbies: hobbies,
        job: job,
        power: power,
        addinfo: add_info,
        tastes: tastes,
        strenghts: forces,
        weaknesses: weaknesses,
        story: story,
        image: image,
    };
    var blob = new Blob([JSON.stringify(json, null, 2)], { type: "application/json" });
    saveAs(blob, `${json.firstName}${json.name}.rplus.json`);
}

function exportMdComplex(gender, name, firstname, race, age, hobbies, job, power, add_info, tastes, forces, weaknesses, story, image){
    var json = {
        id: 2,
        gender: gender,
        name: name,
        firstname: firstname,
        race: race,
        age: age,
        hobbies: hobbies,
        job: job,
        power: power,
        addinfo: add_info,
        tastes: tastes,
        strenghts: forces,
        weaknesses: weaknesses,
        story: story,
        image: image,
    };
    var md = `
**Sexe** : ${json.gender}

**Nom** : ${json.name}

**Prénom** : ${json.firstname}

**Race** : ${json.race}

**Age** : ${json.age}

**hobbie(s)** : ${json.hobbies}

**Métier** : ${json.job}

**Pouvoir/Spécialisation** : ${json.power}

**Annecdote sur le personnage** : ${json.addinfo}

**Goûts** : ${json.tastes}

**Forces** : ${json.strenghts}

**Faiblesses** : ${json.weaknesses}

**Histoire** : ${json.story}

**Image** : ${json.image}
`;
    var blob = new Blob([md], {type: "text/markdown"});
    saveAs(blob, `${json.firstname}${json.name}.rplus.md`);
}