//Script for pomodoro clock
//initializes and creates a function for the on.click
var startStudying

function startPomodoro(){
    startStudying = setInterval(pomodoroClock, 1000);
}
//Timer length
var stopTime = new Date().getTime() + (1000 * 60 *25); 
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
            document.getElementById("whatYouShouldBeDoing").innerHTML = "Break Time"
            audio.play();
            //document.getElementById("round1").checked = true;
        } 
    };




        