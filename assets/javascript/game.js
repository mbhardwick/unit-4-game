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
    var selectedFighter;
    var combatants = [];



    var renderOne = function(character, renderArea, charStatus) {
        var charDiv = $("<div class='character' data-name=' " + character.name + "'>");
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
        var charHealth = $("<div class='character-health'>").text(character.health);
        charDiv.append(charName).append(charImage).append(charHealth);
        $(renderArea).append(charDiv);

        if (charStatus === "enemy") {
            $(charDiv).addClass(".enemy");
        }
    }
    var renderCharacters = function(charObj, areaRender){
        if (areaRender === "#characters-section") {
            $(areaRender).empty();
            for (var key in charObj) {
                if (charObj.hasOwnProperty(key)) {
                    renderOne(charObj[key], areaRender, "");
                }
            }
        }

        // if (areaRender === "#selected-character") {
        //     renderOne(charObj, areaRender, "");
        // }

        // if (areaRender === "#available-enemies") {
        //     for(var i = 0; i < charObj.length; i++) {
        //         renderOne(charObj[i], areaRender, "enemy");
        //     }

        //     // on click event for each enemy
        //     $(document).on("click", ".enemy", function() {
        //         var name = ($(this).attr("data-name"));
        //         // if no enemy clicked character will become
        //         if($("#enemy").children().length ===0) {
        //             renderCharacters(name, "#enemy");
        //             $(this).hide();
        //         }
        //     });

        // }
    };
    //render characters to page at start
    renderCharacters(characters, "#characters-section");

    //selecting character
    $(document).on("click", ".character", function() {
        var name = $(this).attr("data-name");
        console.log(name)
        if (!selectedFighter) {
            console.log("selected fighter got run!")
            selectedFighter = characters[name];
            console.log("selected fighter ="+selectedFighter)
            for (var key in characters) {

                if (key !== name) {
                    combatants.push(characters[key]);
                }
            }
            //Hide character select div
            $("#characters-section").hide();
            //render selected character and combatants
            renderCharacters(selectedFighter, "#selected-character");
            renderCharacters(combatants, "#available-enemies");
        }
        console.log(combatants);
    });
        

})






