// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    let takeOffButton = document.getElementById("takeoff");  
    let flightStatus = document.getElementById("flightStatus"); 
    let flightScreen = document.getElementById("shuttleBackground"); 
    let shuttleHeight = document.getElementById("spaceShuttleHeight"); 
    
    takeOffButton.addEventListener("click", function(){
        let shuttleStatus = confirm("Confirm that the shuttle is ready for takeoff.");
        if (shuttleStatus) {
            flightStatus.innerHTML = "Shuttle in flight."; 
            flightScreen.style.backgroundColor = "blue"; 
            shuttleHeight.innerHTML = 10000; 
        }
    }); 

    let landButton = document.getElementById("landing"); 

    landButton.addEventListener("click", function(){
        alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed."; 
        flightScreen.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0; 
    }); 

    let abortButton = document.getElementById("missionAbort"); 

    abortButton.addEventListener("click", function(){
        let abortStatus = confirm("Confirm that you want to abort the mission."); 
        if (abortStatus) {
            flightStatus.innerHTML = "Mission aborted.";
            flightScreen.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
        }
    }); 

    let upButton = document.getElementById("up"); 
    let downButton = document.getElementById("down"); 
    let leftButton = document.getElementById("left"); 
    let rightButton = document.getElementById("right"); 
    let img = document.getElementById("rocket"); 
    img.style.position = "absolute";
    img.style.bottom = "0px"; 
    img.style.left = "0px";  

    upButton.addEventListener("click", function(){ 
        img.style.bottom = parseInt(img.style.bottom) + 10 + "px";
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;  
    }); 

    downButton.addEventListener("click", function(){
        img.style.bottom = parseInt(img.style.bottom) - 10 + "px";
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000; 
    }); 

    leftButton.addEventListener("click", function(){
        img.style.left = parseInt(img.style.left) - 10 + "px";
    });  

    rightButton.addEventListener("click", function(){
        img.style.left = parseInt(img.style.left) + 10 + "px";  
        
    });  

// The rocket image should move 10 px in the direction of the button that was clicked.
// If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles

}); 