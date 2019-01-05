var random;
var lost = 0;
var wins = 0;
var values = [];
var total = 0;
var goal

console.log(goal);



function reset(){
    values=[];
    total=0;
    goal = Math.floor(Math.random() * 69) +30;
    $("#selector").text('Goal: ' + goal);
    $("#score").text('Current Score: ' + total);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + lost);
    for(var i = 0; i < 4; i++){
        var random = Math.floor(Math.random() * 19) +1;
        values.push(random)
        console.log(values)
    };
    
};

function check(){
    if (total == goal){
        wins++;
        console.log("you win!");
        reset();
    };
    if (total < goal){
        console.log("keep guessing");
    };
    if ( total > goal){
        lost++;
        console.log("you lose!");
        reset();
    };
};

reset();


$("#trap").on('click', function() {
    total = total + (values[0])
    $("#score").text('Current Score: ' + total);
    console.log(total);
    check();
});
$("#pent").on('click', function() {
    total = total + (values[1])
    $("#score").text('Current Score: ' + total);
    console.log(total);
    check();
});
$("#triangle").on('click', function() {
    total = total + (values[2])
    $("#score").text('Current Score: ' + total);
    console.log(total);
    check();
});
$("#diamond").on('click', function() {
    total = total + (values[3])
    $("#score").text('Current Score: ' + total);
    console.log(total);
    check();
});


$("#score").text('Current Score: ' + total);
//4 crystals with random values. 1-20
//look  into for eaach
//new reandom goal on win or lose
//new unique # assigned to each crystal if win or lose changes
//on click of crystal adds its value to previous result or total points
//until it equals random goal
//if its greater than goal lost = i--
//if it is equal then wins = i++ 