/*
Student Name: Pasquale V. Palazzolo
Class: Programming Web Applications I
Date: 1/9/2015
Assignment: Week #1 :: { Homework } - ANALYZE Duel #1
 */

/* Please note that in order to make this assignment my own, I have established the necessary criteria as outlined on the FSO platform
and rubric but I added some of my own embellishments.

As requested, I created the three variables per player but one major feature of my own is instead of a hard coded name for each, I prompt
the users to enter names of their choice and verify that names were entered using an if statement.
 */


/* *********************************************************************************************************
    First establish the health and maximum damage for player one
    Next, prompt the player asking them to enter their name and store it in a variable
 ********************************************************************************************************* */

//The three variables that follow this comment are specifically for player one
var firstPlayerHealth = 100;    //This the max health for player one
var firstPlayerDmg = 22; //This is the maximum amount of damage that player one can do can do to player two
var firstPlayerName = prompt("First Player: What is your name?");  //This asks player one for their name and stores it



/* *********************************************************************************************************
    Make sure that the second player enters some kind of value when prompted.
 ********************************************************************************************************* */

// The if statement below verifies that Player one entered a value and reloads the whole program if not.
if (firstPlayerName === "null" || firstPlayerName === "") {
    alert("Player One must choose a name!");
    location.reload(true);
};


/* *********************************************************************************************************
    Do the same for player two. Establish the health and maximum damage.
    Prompt player in the same way as player one asking for their name and store it in a variable
 ********************************************************************************************************* */

//The three variable that follow this comment are for player two
var secondPlayerHealth = 100; //This is the max health for player two
var secondPlayerDmg = 20; //This is the maximum amount of damage that player two can do to player one
var secondPlayerName = prompt("Second Player: What is your name?");  //This asks player two for their name



/* *********************************************************************************************************
 Make sure that the second player enters some kind of value when prompted.
 ********************************************************************************************************* */

// The if statement below verifies that Player two entered a value and reloads the whole program if not.
if (secondPlayerName === "null" || secondPlayerName === "") {
    alert("Player Two must choose a name!");
    location.reload(true);
};


/* *********************************************************************************************************
    Start off the first round of the fight
 ********************************************************************************************************* */

var whichRound = 0; //This variable holds the current fight round. It begins at zero and will increase as the fight goes on using a ++ iterator within a function later in our code.



/* *********************************************************************************************************
    Lay out all the rules for each round of the fight
 ********************************************************************************************************* */

//The function below this comment contains all the elements of the fight action
function fight(){
    console.log("In the fight function"); // This line just puts a notification in the console that the function has started to run.

    // The alert below this comment concatenates several of our variables to show the user that the fight has started. It also shows them the two player names that were collected in the variables above and shows the starting health levels of each respective player.
    alert(firstPlayerName + ": " + firstPlayerHealth + " ***FIGHT*** " + secondPlayerName + ": " + secondPlayerHealth);

    // This FOR area tells the browser that if "i" is equal to 0 and still less than ten to increase by one. This is what will take our whichRound variable from above and increase it to 1 for the first round.
    for (var i = 0; i < 10; i++) {

        var minDamage1 = firstPlayerDmg * .5; // This variable takes player one's max dmg (22) and multiplies it by .5 then stores it.
        var minDamage2 = secondPlayerDmg * .5; // This variable takes player two's max dmg (22) and multiplies it by .5 then stores it.

        //The variable below uses the rule of PEMDAS to first subtract player one's minimum damage (11) from the max damage (22). It multiplies that by a random number and then adds it to the minimum damage amount while rounding down to the next integer. The result of the equation is stored in the f1 variable.
        var f1 = Math.floor(Math.random() * (firstPlayerDmg - minDamage1) + minDamage1);

        //The variable below uses the rule of PEMDAS to first subtract player two's minimum damage (10) from the max damage (20). It multiplies that by a random number and then adds it to the minimum damage amount while rounding down to the next integer. The result of the equation is stored in the f2 variable.
        var f2 = Math.floor(Math.random() * (secondPlayerDmg - minDamage2) + minDamage2);

        firstPlayerHealth -= f1; // This updates our original health for player 1 with the new result of the f1 variable
        secondPlayerHealth -= f2; // This updates our original health for player 2 with the new result of the f2 variable

        // The line below prints the results of the function thus far to the console.
        console.log(firstPlayerName + ": " + firstPlayerHealth + " ****** " + secondPlayerName + ": " + secondPlayerHealth);

        // This variable calls the winnerCheck function below and stores whether or not a winner has been determined yet.
        var finalOutcome = winnerCheck();

        console.log(finalOutcome); // This prints the outcome thus far to the console

        // The if statement that follows is set up to see if the winnerCheck function results in "no winner yet" and increases the round if there is no winner and alerts with an concatenated string that contains an update of each player's remaining health and that the round has ended.  If the finalOutcome variable is anything but "no winner yet", this if statement alerts with an update of the finalOutcome variable and breaks the function so it does not run again.
        if (finalOutcome === "no winner yet") {
            whichRound++;
            alert(firstPlayerName + ": " + firstPlayerHealth + " ***ROUND: " + whichRound + " Complete*** " + secondPlayerName + ": " + secondPlayerHealth);
        } else {
            alert(finalOutcome);
            break;
        };
    };
};

/* *********************************************************************************************************
    Figure out if there is a winner for the fight
 ********************************************************************************************************* */


//The function below this comment checks to see if a winner has been determined
function winnerCheck(){
    console.log("in winnerCheck function"); // This line prints to the console to show that this function has started to run

    var result = "no winner yet"; // This variable holds a string with a notification that neither player has won.

    // The if statement below says that if player one and player two have both reached a level of health less than one then they have both died.
    if (firstPlayerHealth < 1 && secondPlayerHealth < 1) {
        result="Both players have died!"; // Here is the result where both players die
    } else if (firstPlayerHealth < 1) {  // This else if says that if only player one has health less than one that player two wins
        result = secondPlayerName + " Wins!!!" // This is the result where player two wins
    } else if (secondPlayerHealth < 1) { // This else if says that if only player two has health less than one that player one wins
        result = firstPlayerName + " Wins!!!"  // Here is the result where player one wins
    };

    return result; //This returns the result based on the if statement above to winnerCheck()

};

/********* The program starts below ********/
console.log("program starts"); // This sends a message to the console saying the program has started
fight(); //This executes the fight function from above