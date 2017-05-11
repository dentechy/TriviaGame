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
    //Also need to run a different function that changes the page again and shows game stats.
    alert("Time's Up!");
    }
}

function stop() {

    clearInterval(intervalId);
}

function triviaQuestions() {
    $("#trivia1").html("What is the most widely used operating system in the world?");
}


$("#startGame").click(function() {
    $("#startGame").remove();
    countDown();
    setTimeout(function() {
        triviaQuestions();
    }, 1000);
    })