
/*
 Student Name: Pasquale V. Palazzolo
 Class: Programming Web Applications I
 Date: 1/21/2015
 Assignment: Week #3 :: { Homework } - ANALYZE Duel #3
 */


(function(){
    console.log("FIGHT!!!"); //printing to console FIGHT!!!
    /* *********************************************************************************************************
     First create an object with three properties(keys) for both fighters
     ********************************************************************************************************* */

    var players = [
        firstPlayer = { name:"Ernie", damage:20, health:100},  //This is the object for the first player at index 0
        secondPlayer = { name:"Peter", damage:20, health:100}  //This is the object for the second player at index 1
    ];

    /* *********************************************************************************************************
     Start off the first round of the fight
     ********************************************************************************************************* */

    var whichRound = 0; //This variable holds the current fight round. It begins at zero and will increase as the fight goes on using a ++ iterator within a function later in our code.

    /* *********************************************************************************************************
     Variable for the fight button
     ********************************************************************************************************* */
    var button = document.querySelector(".buttonblue");

    /* *********************************************************************************************************
     Replace alerts by showing health via  innerHTML
     ********************************************************************************************************* */
    document.getElementById("playerOne").innerHTML = players[0].name + ": " + players[0].health;
    document.getElementById("playerTwo").innerHTML = players[1].name + ": " + players[1].health;

    //The fight function starts below this comment
    function fight() {
        /* *********************************************************************************************************
         Lay out all the rules for each round of the fight
         ********************************************************************************************************* */

        var minDamage1 = players[0].damage * .5; // This variable takes player one's max dmg (20) and multiplies it by .5 then stores it.
        var minDamage2 = players[1].damage * .5; // This variable takes player two's max dmg (20) and multiplies it by .5 then stores it.

        //The variable below uses the rule of PEMDAS to first subtract player one's minimum damage (11) from the max damage (22). It multiplies that by a random number and then adds it to the minimum damage amount while rounding down to the next integer. The result of the equation is stored in the f1 variable.
        var f1 = Math.floor(Math.random() * (players[0].damage - minDamage1) + minDamage1);

        //The variable below uses the rule of PEMDAS to first subtract player two's minimum damage (10) from the max damage (20). It multiplies that by a random number and then adds it to the minimum damage amount while rounding down to the next integer. The result of the equation is stored in the f2 variable.
        var f2 = Math.floor(Math.random() * (players[1].damage - minDamage2) + minDamage2);

        players[0].health = players[0].health - f1; // This updates our original health for player 1 with the new result of the f1 variable
        players[1].health = players[1].health - f2; // This updates our original health for player 2 with the new result of the f2 variable

        // This variable calls the winnerCheck function below and stores whether or not a winner has been determined yet.
        var finalOutcome = winnerCheck();
        updateBackground();

        console.log(finalOutcome); // This prints the outcome thus far to the console

            if (finalOutcome === "no winner yet") {
                whichRound++;
                document.getElementById("playerOne").innerHTML = players[0].name + ": " + players[0].health;
                document.getElementById("playerTwo").innerHTML = players[1].name + ": " + players[1].health;
                document.getElementById("roundUpdate").innerHTML = "Round " + whichRound + ": COMPLETE!";
            } else {
                document.getElementById("scores").innerHTML = finalOutcome;
                document.getElementById("scores").style.textAlign = "center";
                document.getElementById("roundUpdate").innerHTML = finalOutcome;

                button.innerHTML = "Finished!!!";
                button.setAttribute('onclick', null);
            };
    }; //This is where the fight function ends

    /* *********************************************************************************************************
     Figure out if there is a winner for the fight
     ********************************************************************************************************* */

    // This is where the winnerCheck function begins
    function winnerCheck(){
        console.log("in winnerCheck function"); // This line prints to the console to show that this function has started to run

        var result = "no winner yet"; // This variable holds a string with a notification that neither player has won.

        // The if statement below says that if player one and player two have both reached a level of health less than one then they have both died.
        if (players[0].health < 1 && players[1].health < 1) {
            result="Both players have died!"; // Here is the result where both players die
        } else if (players[0].health < 1) {  // This else if says that if only player one has health less than one that player two wins
            result = players[1].name + " Wins!!!" // This is the result where player two wins
        } else if (players[1].health < 1) { // This else if says that if only player two has health less than one that player one wins
            result = players[0].name + " Wins!!!"  // Here is the result where player one wins
        }

        return result; //This returns the result based on the if statement above to winnerCheck()
    };
    // This is where the winnerCheck function ends

    /* *********************************************************************************************************
         This function changes the background images
     ********************************************************************************************************* */

    function updateBackground(){

        var background = "images/PGfight_bg.png";

        if (players[0].health < 20 && players[1].health < 20) {
            background = "images/peterErnie2.jpg";
        } else if (players[0].health < 40 && players[1].health < 40) {
            background = "images/peterErnie3.png";
        } else if (players[0].health < 60 && players[1].health < 60) {
            background = "images/peterErnie4.png";
        } else if (players[0].health < 80 && players[1].health < 80) {
            background = "images/peterErnie5.png";
        }

        document.getElementById("bgChange").src = background;

    };


    button.onclick = function(e) {
        fight();
        e.preventDefault();
        return false;
    };
})();