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
    $("#trivia2").html("The best way to improve the performance of a laptop is:");
    $("#trivia3").html("Which of the following is an example of a private IP address?");
    $("#trivia4").html("The exact resolution of widescreen (16:9) 4K UHD is:");
    $("#trivia5").html("Which metal is the best conductor of electricity?");
}

function triviaResponses() {
    //Below are the responses to question 1
    var answers1 = ["Windows 10", "Android", "macOS", "Ubuntu Linux"];

    for (i = 0; i < answers1.length; i++) {
        $("#response1a").append("<input type='radio' name='response1a' value=" + answers1[i] + ">" + "<label>" + answers1[i] + "</label>");
    }

    // $("#response1a").append("<input type='radio' name='response1a' value='Windows 10'>" + "<label>" + "Windows 10" + "</label>");

    // $("#response1a").append("<input type='radio' name='response1a' value='Android'>" + "<label>" + "Android" + "</label>");

    // $("#response1a").append("<input type='radio' name='response1a' value='macOS'>" + "<label>" + "macOS" + "</label>");

    // $("#response1a").append("<input type='radio' name='response1a' value='Ubuntu Linux'>" + "<label>" + "Ubuntu Linux" + "</label>");

    var answers2 = ["Adding an SSD", "Using Power Saver Mode", "Adding a 5400RPM HDD", "Installing latest drivers"];

    for (i = 0; i < answers2.length; i++) {
        $("#response2a").append("<input type='radio' name='response2a' value=" + answers2[i] + ">" + "<label>" + answers2[i] + "</label>");
    }

    var answers3 = ["172.217.10.46", "216.155.129.35", "54.173.76.18", "192.168.0.100"];
	// google.com, us-east.privateinternetaccess.com, netflix.com, private IP address
	
	for (i = 0; i < answers3.length; i++) {
        $("#response3a").append("<input type='radio' name='response3a' value=" + answers3[i] + ">" + "<label>" + answers3[i] + "</label>");
    }

    var answers4 = ["1280x720", "2560x1440", "3840x2160", "1920x1080"]; 

    for (i = 0; i < answers4.length; i++) {
        $("#response4a").append("<input type='radio' name='response4a' value=" + answers4[i] + ">" + "<label>" + answers4[i] + "</label>");
    }

    var answers5 = ["Silver", "Copper", "Gold", "Iron"]; 

    for (i = 0; i < answers5.length; i++) {
        $("#response5a").append("<input type='radio' name='response5a' value=" + answers5[i] + ">" + "<label>" + answers5[i] + "</label>");
    }
}

$("#startGame").click(function() {
    $("#startGame").remove();
    countDown();
    setTimeout(function() {
        triviaQuestions();
        triviaResponses();
    }, 1000);
    })
