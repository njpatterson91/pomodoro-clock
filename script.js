var stopTime = new Date().getTime() + (1000 * 60 * 25); 
var audio = new Audio('bell.mp3');

var x = setInterval(pomodoroClock, 1000);

function pomodoroClock() { 
    var now = new Date().getTime(); 
    var t = stopTime - now; 
     
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((t % (1000 * 60)) / 1000); 
    document.getElementById("demo").innerHTML = minutes + " Minutes and " + seconds + " Seconds"; 
        if (t < 0) { 
            clearInterval(x); 
            document.getElementById("demo").innerHTML = "Time for a break";
            audio.play();
        } 
    };




        