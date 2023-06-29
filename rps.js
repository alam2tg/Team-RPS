//Prompt - Start Game "enter areana" - window(prompt)

//Prompt - Make Move ( R, P, S ) - window(prompt) 

//window(prompt) - ""

// Steps of making a Rock Paper Scissors in Javascript

var wins = 0
var loss = 0
var tie = 0


var move = ["R", "P", "S"];
var userChoice = prompt("Type in 'R', 'P', 'S'");

var random = Math.floor(Math.random() * move.length);


var bot = move[random]    //how to make a bot choose an option
console.log(userChoice);
console.log(bot);


var result = ["Win", "Loss", "Draw"];
if (userC===bot) {
    window.alert("It's a tie!");
    tie++;
}
else if()




//function determineWinner() {
//     win = 
//     loss = 
//     Draw = 
// 

