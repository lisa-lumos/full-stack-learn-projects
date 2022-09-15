var buttonColors = ["red", "blue", "green", "yellow"];
var playerPattern = [];
var gamePattern = [];
var level = 0;
var started = false;

// when player clicks a button, compare with ground truth
$(".btn").click(function() {
    var playerColor = $(this).attr("id");
    playerPattern.push(playerColor);

    playSound(playerColor);
    animatePress(playerColor);

    checkAnswer(playerPattern.length - 1);
});

$(document).keypress(function() {
    if (!started) {
        nextSequence();
        $("#level-title").text("Level " + level);
        started = true;
    }

});

$(".btn-start").click(function() {
    if (!started) {
        $(".btn-start").addClass("hidden-text");
        nextSequence();
        $("#level-title").text("Level " + level);
        started = true;
    }

});

// generate next color for the pattern, reset playerPattern
function nextSequence() {
    playerPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    var randNum = Math.floor(Math.random() * 4);
    var randColor = buttonColors[randNum];

    playSound(randColor);
    $("#" + randColor).fadeIn(100).fadeOut(100).fadeIn(100);

    gamePattern.push(randColor);
}

// play the sound for the corresponding color
function playSound(color) {
    var audioPath = "assets/sounds/" + color + ".mp3";
    var audio = new Audio(audioPath);
    audio.play();
}

function animatePress(currentColor) {
    var colorId = "#" + currentColor;
    $(colorId).addClass("pressed");

    setTimeout(function() {
        $(colorId).removeClass("pressed");
    }, 100);
}

// check current click with ground truth, if it is last of pattern, go to next level 
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === playerPattern[currentLevel]) {
        console.log("success");
        if (playerPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
            playerPattern = [];
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $(".btn-start").text("RESTART");
        $(".btn-start").removeClass("hidden-text");
        starterOver();
    }
}

// reset game parameters
function starterOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
