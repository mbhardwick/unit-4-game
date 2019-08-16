$(document).ready(function() {
var characters = {
    "Rey": {
        name: "Rey",
        health: 120,
        attack: 8,
        imageUrl: "assets/images/rey.jpg",
        enemyAttackBack: 15
    },
    "Finn": {
        name: "Finn",
        health: 100,
        attack: 14,
        imageUrl: "assets/images/finn.jpg",
        enemyAttackBack: 5
    },
    "Kylo-Ren": {
        name: "Kylo-Ren",
        health: 150,
        attack: 8,
        imageUrl: "assets/images/kylo-ren.jpg",
        enemyAttackBack: 5
    },
    "Captain Phasma": {
        name: "Captain Phasma",
        health: 180,
        attack: 7,
        imageUrl: "assets/images/captain-phasma.jpg",
        enemyAttackBack: 25
    }
};
console.log(characters);

var renderOne = function(character, renderArea) {
    var charDiv = $("<div class='character' data-name=' " + character.name + "'>");
    var charName = $("<div class='character-name'>").text(character.name);
    var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
    var charHealth = $("<div class='character-health'>").text(character.health);
    charDiv.append(charName).append(charImage).append(charHealth);
    $(renderArea).append(charDiv);
};
var renderCharacters = function(charObj, areaRender){
    if(areaRender === "#characters-section") {
        $(areaRender).empty();
        for(var key in charObj) {
            if(charObj.hasOwnProperty(key)) {
                renderOne(charObj[key], areaRender);
            }
        }
    }
};
renderCharacters(characters, "#characters-section");
//Functions




});






//Game 