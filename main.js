var value = "mostruns";
function changeforachange(){
    value = document.getElementById("Stat").value;
    if(value == "mostruns"){
        document.getElementById("mostruns").style.display  = "block";
        document.getElementById("mostwickets").style.display  = "none";
        document.getElementById("highestscore").style.display  = "none";
        document.getElementById("mostfifties").style.display  = "none";
        document.getElementById("mostcenturies").style.display  = "none";
        document.getElementById("highestaverage").style.display  = "none";
        document.getElementById("bestbowling").style.display  = "none";
        document.getElementById("besteconomy").style.display  = "none";
        document.getElementById("mostfourwickets").style.display  = "none";
        document.getElementById("mostmaidens").style.display  = "none";
    }
    if(value == "mostwickets"){
        document.getElementById("mostwickets").style.display  = "block";
        document.getElementById("mostruns").style.display  = "none";
        document.getElementById("highestscore").style.display  = "none";
        document.getElementById("mostfifties").style.display  = "none";
        document.getElementById("mostcenturies").style.display  = "none";
        document.getElementById("highestaverage").style.display  = "none";
        document.getElementById("bestbowling").style.display  = "none";
        document.getElementById("besteconomy").style.display  = "none";
        document.getElementById("mostfourwickets").style.display  = "none";
        document.getElementById("mostmaidens").style.display  = "none";
    }
    if(value == "highestscore"){
        document.getElementById("highestscore").style.display  = "block";
        document.getElementById("mostruns").style.display  = "none";
        document.getElementById("mostwickets").style.display  = "none";
        document.getElementById("mostfifties").style.display  = "none";
        document.getElementById("mostcenturies").style.display  = "none";
        document.getElementById("highestaverage").style.display  = "none";
        document.getElementById("bestbowling").style.display  = "none";
        document.getElementById("besteconomy").style.display  = "none";
        document.getElementById("mostfourwickets").style.display  = "none";
        document.getElementById("mostmaidens").style.display  = "none";
    }
    if(value == "mostfifties"){
        document.getElementById("mostfifties").style.display  = "block";
        document.getElementById("mostruns").style.display  = "none";
        document.getElementById("highestscore").style.display  = "none";
        document.getElementById("mostwickets").style.display  = "none";
        document.getElementById("mostcenturies").style.display  = "none";
        document.getElementById("highestaverage").style.display  = "none";
        document.getElementById("bestbowling").style.display  = "none";
        document.getElementById("besteconomy").style.display  = "none";
        document.getElementById("mostfourwickets").style.display  = "none";
        document.getElementById("mostmaidens").style.display  = "none";
    }
    if(value == "mostcenturies"){
        document.getElementById("mostcenturies").style.display  = "block";
        document.getElementById("mostruns").style.display  = "none";
        document.getElementById("highestscore").style.display  = "none";
        document.getElementById("mostwickets").style.display  = "none";
        document.getElementById("mostfifties").style.display  = "none";
        document.getElementById("highestaverage").style.display  = "none";
        document.getElementById("bestbowling").style.display  = "none";
        document.getElementById("besteconomy").style.display  = "none";
        document.getElementById("mostfourwickets").style.display  = "none";
        document.getElementById("mostmaidens").style.display  = "none";
    }
    if(value == "highestaverage"){
        document.getElementById("highestaverage").style.display  = "block";
        document.getElementById("mostruns").style.display  = "none";
        document.getElementById("highestscore").style.display  = "none";
        document.getElementById("mostwickets").style.display  = "none";
        document.getElementById("mostfifties").style.display  = "none";
        document.getElementById("mostcenturies").style.display  = "none";
        document.getElementById("bestbowling").style.display  = "none";
        document.getElementById("besteconomy").style.display  = "none";
        document.getElementById("mostfourwickets").style.display  = "none";
        document.getElementById("mostmaidens").style.display  = "none";
    }
    if(value == "bestbowling"){
        document.getElementById("highestaverage").style.display  = "none";
        document.getElementById("mostruns").style.display  = "none";
        document.getElementById("highestscore").style.display  = "none";
        document.getElementById("mostwickets").style.display  = "none";
        document.getElementById("mostfifties").style.display  = "none";
        document.getElementById("mostcenturies").style.display  = "none";
        document.getElementById("bestbowling").style.display  = "block";
        document.getElementById("besteconomy").style.display  = "none";
        document.getElementById("mostfourwickets").style.display  = "none";
        document.getElementById("mostmaidens").style.display  = "none";
    }
    if(value == "besteconomy"){
        document.getElementById("highestaverage").style.display  = "none";
        document.getElementById("mostruns").style.display  = "none";
        document.getElementById("highestscore").style.display  = "none";
        document.getElementById("mostwickets").style.display  = "none";
        document.getElementById("mostfifties").style.display  = "none";
        document.getElementById("mostcenturies").style.display  = "none";
        document.getElementById("bestbowling").style.display  = "none";
        document.getElementById("besteconomy").style.display  = "block";
        document.getElementById("mostfourwickets").style.display  = "none";
        document.getElementById("mostmaidens").style.display  = "none";
    }
    if(value == "mostfourwickets"){
        document.getElementById("highestaverage").style.display  = "none";
        document.getElementById("mostruns").style.display  = "none";
        document.getElementById("highestscore").style.display  = "none";
        document.getElementById("mostwickets").style.display  = "none";
        document.getElementById("mostfifties").style.display  = "none";
        document.getElementById("mostcenturies").style.display  = "none";
        document.getElementById("bestbowling").style.display  = "none";
        document.getElementById("besteconomy").style.display  = "none";
        document.getElementById("mostfourwickets").style.display  = "block";
        document.getElementById("mostmaidens").style.display  = "none";
    }
    if(value == "mostmaidens"){
        document.getElementById("highestaverage").style.display  = "none";
        document.getElementById("mostruns").style.display  = "none";
        document.getElementById("highestscore").style.display  = "none";
        document.getElementById("mostwickets").style.display  = "none";
        document.getElementById("mostfifties").style.display  = "none";
        document.getElementById("mostcenturies").style.display  = "none";
        document.getElementById("bestbowling").style.display  = "none";
        document.getElementById("besteconomy").style.display  = "none";
        document.getElementById("mostfourwickets").style.display  = "none";
        document.getElementById("mostmaidens").style.display  = "block";
    }
}