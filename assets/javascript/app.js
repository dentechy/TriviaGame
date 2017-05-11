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
    $("#trivia2").html("The easiest way to improve the performance of a laptop is:");
}

function triviaResponses() {
    //Below are the respones to question 1
    var answers1 = ["Windows 10", "Android", "macOS", "Ubuntu Linux"];

    for (i = 0; i < answers1.length; i++) {
        $("#response1a").append("<input type='radio' name='reponse1a' value=" + answers1[i] + ">" + "<label>" + answers1[i] + "</label>");
    }

    // $("#response1a").append("<input type='radio' name='response1a' value='Windows 10'>" + "<label>" + "Windows 10" + "</label>");

    // $("#response1a").append("<input type='radio' name='response1a' value='Android'>" + "<label>" + "Android" + "</label>");

    // $("#response1a").append("<input type='radio' name='response1a' value='macOS'>" + "<label>" + "macOS" + "</label>");

    // $("#response1a").append("<input type='radio' name='response1a' value='Ubuntu Linux'>" + "<label>" + "Ubuntu Linux" + "</label>");

  
}

$("#startGame").click(function() {
    $("#startGame").remove();
    countDown();
    setTimeout(function() {
        triviaQuestions();
        triviaResponses();
    }, 1000);
    })