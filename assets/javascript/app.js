//Start button is a click function that changes the content of the main center panel.
//When clicked, it starts a timer.
var timeRemaining = 31;
var correctOnes = 0;
var incorrectOnes = 0;
var unansweredOnes = 0;
var answers1 = ["Windows 10", "Android", "macOS", "Ubuntu Linux"];
var answers2 = ["Adding an SSD", "Using Power Saver Mode", "Adding a 5400RPM HDD", "Installing latest drivers"];
var answers3 = ["172.217.10.46", "216.155.129.35", "54.173.76.18", "192.168.0.100"];
// google.com, us-east.privateinternetaccess.com, netflix.com, private IP address
var answers4 = ["1280x720", "2560x1440", "3840x2160", "1920x1080"]; 
var answers5 = ["Silver", "Copper", "Gold", "Iron"]; 



//Define a function that starts the timer.
function countDown() {
    intervalId = setInterval(decrement, 1000)
}

function decrement() {

    timeRemaining--;
    $("#timer").html("Time Remaining: " + timeRemaining + " seconds");
    checkResponses();
    checkBlanks();

    if (timeRemaining === 0) {

    stop();
    //Also need to run a different function that changes the page again and shows game stats.
    alert("Time's Up!");
    thirdPage(); //erases the contents of page and replaces them with game stats
    }
}

function stop() {

    clearInterval(intervalId);
}

function thirdPage() {
        var removeSections = ["#timer", "#trivia1", "#trivia2", "#trivia3", "#trivia4", "#trivia5", "#response1a", "#response2a", "#response3a", "#response4a", "#response5a"];
        for (i = 0; i < removeSections.length; i++) {
        $(removeSections[i]).remove();
        }
        var addStats = ["#Finished", "#correctOnes", "#incorrectOnes", "#unansweredOnes", "#triviaTitle"];
        $(addStats[0]).html("Finished!");
        $(addStats[1]).html("Correct Answers: " + correctOnes);
        $(addStats[2]).html("Incorrect Answers: " + incorrectOnes);
        $(addStats[3]).html("Unanswered: " + unansweredOnes);
        $(addStats[3]).css("padding-bottom", "50px");
        $(addStats[4]).css("padding-bottom", "10px");
}

//As the name implies, this function below keeps track of the user's responses to the trivia questions. As of now, it has no way to track if no answer was clicked.
function checkResponses() {
    $("input[type=radio][name=response1a]").change(function(){
        if (this.value == "Android" && this.checked) {
            correctOnes++;
        }
        else if (this.checked) {
            incorrectOnes++;
        }
    });
    $("input[type=radio][name=response2a]").change(function(){
        if (this.value == "Adding an SSD" && this.checked) {
            correctOnes++;
        }
        else if (this.checked) {
            incorrectOnes++;
        }
    });
    $("input[type=radio][name=response3a]").change(function(){
        if (this.value == "192.168.0.100" && this.checked) {
            correctOnes++;
        }
        else if (this.checked) {
            incorrectOnes++;
        }
    });
    $("input[type=radio][name=response4a]").change(function(){
        if (this.value == "3840x2160" && this.checked) {
            correctOnes++;
        }
        else if (this.checked) {
            incorrectOnes++;
        }
    });
    $("input[type=radio][name=response5a]").change(function(){
        if (this.value == "Silver" && this.checked) {
            correctOnes++;
        }
        else if (this.checked) {
            incorrectOnes++;
        }
    });
}

function checkBlanks() {
    
}

function triviaQuestions() {
    $("#trivia1").html("What is the most widely used operating system in the world?");
    $("#trivia2").html("The best way to improve the performance of a laptop is:");
    $("#trivia3").html("Which of the following is an example of a private IP address?");
    $("#trivia4").html("The exact resolution of widescreen (16:9) 4K UHD is:");
    $("#trivia5").html("Which metal is the best conductor of electricity?");
}

function triviaResponses() {


    for (i = 0; i < answers1.length; i++) {
        $("#response1a").append("<input type='radio' name='response1a' value=" + answers1[i] + ">" + "<label>" + answers1[i] + "</label>");
    }


    for (i = 0; i < answers2.length; i++) {
        $("#response2a").append("<input type='radio' name='response2a' value=" + answers2[i] + ">" + "<label>" + answers2[i] + "</label>");
    }

	
    for (i = 0; i < answers3.length; i++) {
        $("#response3a").append("<input type='radio' name='response3a' value=" + answers3[i] + ">" + "<label>" + answers3[i] + "</label>");
    }


    for (i = 0; i < answers4.length; i++) {
        $("#response4a").append("<input type='radio' name='response4a' value=" + answers4[i] + ">" + "<label>" + answers4[i] + "</label>");
    }


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
