//Script for pomodoro clock
//initializes and creates a function for the on.click
var startStudying
var startBreakTime
var stopTime
var stopBreakTime
var roundCount = 0;
function startPomodoro(){
    
        startStudying = setInterval(pomodoroClock, 1000);
        stopTime = new Date().getTime() + (1000 * 10);
        roundCount = roundCount + 1; 
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

function resetButton() {
        document.getElementById("round1").checked = false;
        document.getElementById("round2").checked = false;
        document.getElementById("round3").checked = false;
        document.getElementById("round4").checked = false;
        document.getElementById("whatYouShouldBeDoing").innerHTML = "";
        document.getElementById("demo").innerHTML = "";
        clearInterval(startStudying);
        clearInterval(startBreakTime);
}
function startBreak(){
    
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
        var minutes = Math.floor((bt % (1000 * 60 * 60)) / (1000 * 60)); 
        var seconds = Math.floor((bt % (1000 * 60)) / 1000); 
        //Display for Countdown and what you should be doing
        document.getElementById("demo").innerHTML = minutes + " Minutes and " + seconds + " Seconds"; 
        document.getElementById("whatYouShouldBeDoing").innerHTML = "Break"
            //What happens when timer hits 0
            if (bt < 0) { 
                clearInterval(startBreak); 
                //document.getElementById("whatYouShouldBeDoing").innerHTML = "Break Time"
                audio.play();
                //document.getElementById("round1").checked = true;
            } 
        }; 