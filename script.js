var gameState = false;
var counter = 0;
var timer = 60;
var highScore = 0;
var highScoreList = []
function hide(){
    document.getElementsByClassName("question")[counter].style.display = "none";
}
function show(){
    document.getElementsByClassName("question")[counter].style.display = "flex";
}
function increment(){
    if (counter < 4){
        counter++
    }
}
show();
function init(){
    gameState = true; 
    hide();
    increment();
    show();
    var quizTimer = setInterval(function(){
        document.getElementById("timer").innerHTML = timer;
        timer--;
        if(timer <= 0){
            clearInterval(quizTimer);
            document.getElementById("timer").innerHTML = "Out of time";
            alert("You are out of time");
        }
    },1000);
}
function wrongAnswer(){
    timer = timer - 15;
}
function correctAnswer(){
    highScore = highScore + 15;
    hide();
    increment();
    show();

}