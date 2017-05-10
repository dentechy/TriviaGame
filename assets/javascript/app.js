//Start button is a click function that changes the content of the main center panel.
//When clicked, it starts a timer.
var timeRemaining = 46;

//Define a function that starts the timer.
function countDown() {
    intervalId = setInterval(decrement, 1000)
}

function decrement() {

    timeRemaining--;
    $("#timer").html("Time Remaining: " + timeRemaining + " seconds");

    if (timeRemaining === 0) {

    stop();

    alert("Time's Up!");
    }
}

function stop() {

    clearInterval(intervalId);
}




$("#startGame").click(function() {
    $("#startGame").remove();
    countDown();
})