//psudo code:
//goals:
//timer
$("#question").hide();
$("#answers").hide();
$("#winlose").hide();
$("#timer").hide();
var count = 20;
var x = 1;
var y = 1;
var counter = setInterval(timer, 1000);

var guess;
var score = 0;
var questions = {
        1: ["what is neo's given name?", "d"],
        2: ["How much time passes between the begining and the the end of The Matrix?", "c"],
        3:  ["What  Company did Neo work for before he was freed?", "a"],
        4: ["how many questions does neo ask in the first 45 minutes of The Matrix?", "b"], 
        5: ["Who almost played morpheus?", "d"],
        6: ["What nickname does switch give to Neo before he is freed?", "c"],
        7: ["Morpheus's ship was named the Nebuchadnezzar, what is this a reference to?", "a"],
        8: ["where was The Matrix Filmed?", "b"],
        9: ["Was Switch originally a man or a Woman?", "d"],
        10: ["What does the Oracle tell Trinity?", "c"],
        }
var options = {
    1: ["Bob Thorton", "Keanu Anderson", "Neo....like Cher", "Thomas Anderson"],
    2: ["1000000 milliseconds ",  "1 year", "18 months", "It doesn't. There is no such thing as time in the matrix"],
    3: ["MetaCortex",  "MoneySoft",  "Micro-Corp",  "Apple"],
    4: ["none. he just says: Whoah! alot.",  "44",  "22",  "10"],
    5: ["Samuel L. Jackson",  "Gary Oldman",  "Sean Connery",  "All of the above"],
    6: ["Energizer",  "Ted",  "Coppertop",  "Mr. Anderson"],
    7: ["The biblical king of Babylon",  "The Illiad",  "Willy Wonka's candy boat", "niether, it's just a made up word."],
    8: ["Ironically, inside a computer simulation",  "Sydney, Australia",  "Pittsburgh, Pa",  "All over Europe"],
    9: [ "man", "woman",  "neither, shes a machine",  "It depends on whether they are in the matrix or not"],
    10: ["That she could svae 15% or more by switching insurance providers",  "That she was going to Disney land",  "That she would fall in love with the one",  "That there is no spoon"],
};




function timer(){
    count = count-1;
    if (count <= 0){
            clearInterval(counter);
            $("#timer").html(count);
            $("#question").hide();
            $("#answers").hide();
            $("#timer").hide();
            $("#winlose").html("<h2>Times up!</h2>").show();
            setTimeout(reset, 2000);
    }
            else{
                $("#timer").html(count);
        }
    }

function display(){

    $("#start").hide();
    $("#winlose").hide();
    $("#question").show();
    $("#answers").show();
    $("#timer").show();

    $("#question").html(questions[y][0]);
    $("#a").html(options[x][0]);
    $("#b").html(options[x][1]);
    $("#c").html(options[x][2]);
    $("#d").html(options[x][3]);
    
};

function reset(){

if (x < 10){
        count=20;
        clearInterval(counter);
        x++;
        y++;
        display();
        counter = setInterval(timer, 1000);
        
    }
    else{
        $("#winlose").html("<h2>Quiz Over!</h2> \n <h3>Score: " + score + "/10 </h3>");
        $("#start").show();
        };    
};



function check(){
    if (guess == questions[y][1]){
        score++;
        $("#question").hide();
        $("#answers").hide();
        $("#timer").hide();
        $("#winlose").html("<h2>Good Guess!</h2>");
        $("#winlose").show();

        setTimeout(reset, 2000);
    }
    else {
        $("#question").hide();
        $("#answers").hide();
        $("#timer").hide();
        $("#winlose").html("<h2>Wrong!</h2>\n <h3> Correct Answer: " + questions[y][1]+"</h3>");
        $("#winlose").show();
        
        setTimeout(reset, 2000);
    };
    console.log(score);
    // console.log(answer);
};



$("#a").click(function(){
    guess = "a";
    console.log(guess);
    check();
    guess = null;
});
$("#b").click(function(){
    guess = "b";
    console.log(guess);
    check();
    guess = null;
});
$("#c").click(function(){
    guess = "c";
    console.log(guess)
    check();
    guess = null;
});
$("#d").click(function(){
    guess = "d";
    console.log(guess)
    check();
    guess = null;
});

$("#start").click(function(){
    display();
});











//create questions
//create answers
//link answers to buttons
//if the answer is right then display correct div and right++
//if the anser is wrong display incorrect div and wrong++

