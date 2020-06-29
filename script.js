//Script for pomodoro clock
//initializes and creates a function for the on.click
var startStudying
var startBreakTime
var stopTime
var stopBreakTime
var roundCount = 0;

//function attacked to the start button 
function startPomodoro(){
        //starts the timer for studying/working
        startStudying = setInterval(pomodoroClock, 1000);
        //creates the time that the timer should end
        stopTime = new Date().getTime() + (1000 * 60 * 25);
        //updates the variable that is checked to determine what round you re on
        roundCount = roundCount + 1; 
        //Temporary way to track how many of the 4 rounds you have done needs to be updated has a few issues
        if(roundCount === 0){
        }else if (roundCount === 1){
            document.getElementById("round1").checked = true;
        }else if (roundCount === 2){
            document.getElementById("round2").checked = true;
        }else if (roundCount === 3){
            document.getElementById("round3").checked = true;
        }else if (roundCount === 4){
            document.getElementById("round4").checked = true;
        }else {
            document.getElementById("round1").checked = false;
            document.getElementById("round2").checked = false;
            document.getElementById("round3").checked = false;
            document.getElementById("round4").checked = false;
        }  
      
}
//function attached to the reset button clears all active timers and the round indicators
function resetButton() {
        document.getElementById("round1").checked = false;
        document.getElementById("round2").checked = false;
        document.getElementById("round3").checked = false;
        document.getElementById("round4").checked = false;
        document.getElementById("whatYouShouldBeDoing").innerHTML = "";
        document.getElementById("demo").innerHTML = "";
        clearInterval(startStudying);
        clearInterval(startBreakTime);
        roundCount = 0;
}

//function attached to the break button starts the break timer
function startBreak(){
        //clears the timer for studying/working in case its still running
        clearInterval(startStudying);
        //starts the timer for break
        startBreakTime = setInterval(breakClock, 1000);
        //sets the end time for the break countdown
        stopBreakTime = new Date().getTime() + (1000 * 60 * 5);
}
//Timer length

//Audible chime to take a break
var audio = new Audio('bell.mp3');
//Actual Timer
function pomodoroClock() { 
    //Sets current time
    var now = new Date().getTime(); 
    //Countdown Variable
    var t = stopTime - now; 
    //Variables for displaying the time left
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((t % (1000 * 60)) / 1000); 
    //Display for Countdown and what you should be doing
    document.getElementById("demo").innerHTML = minutes + " Minutes and " + seconds + " Seconds"; 
    document.getElementById("whatYouShouldBeDoing").innerHTML = "Studying/Working"
        //What happens when timer hits 0
        if (t < 0) { 
            clearInterval(startStudying); 
            //document.getElementById("whatYouShouldBeDoing").innerHTML = "Break Time"
            audio.play();
            //document.getElementById("round1").checked = true;
            document.getElementById("whatYouShouldBeDoing").innerHTML = ""
            document.getElementById("demo").innerHTML = "Start Your Break";
            
        } 
    };

    function breakClock() { 
        //Sets current time
        var nowBreak = new Date().getTime(); 
        //Countdown Variable
        var bt = stopBreakTime - nowBreak; 
        //Variables for displaying the time left
        var bminutes = Math.floor((bt % (1000 * 60 * 60)) / (1000 * 60)); 
        var bseconds = Math.floor((bt % (1000 * 60)) / 1000); 
        //Display for Countdown and what you should be doing
        document.getElementById("demo").innerHTML = bminutes + " Minutes and " + bseconds + " Seconds"; 
        document.getElementById("whatYouShouldBeDoing").innerHTML = "Break"
            //What happens when timer hits 0
            if (bt < 0) { 
                clearInterval(startBreakTime); 
                //document.getElementById("whatYouShouldBeDoing").innerHTML = "Break Time"
                audio.play();
                //document.getElementById("round1").checked = true;
            } 
        }; 