function switchTheme() {
    var body = document.getElementsByTagName("body");
    var aboutArea = document.getElementsByClassName("about")
    var themeSwitchButton = document.getElementById("themeSwitcherButton");
    if (themeSwitchButton.innerHTML == "Light") {
        body[0].style.backgroundColor = "var(--dark-bg)";
        aboutArea[0].style.color = "var(--primary)";
        themeSwitchButton.innerHTML = "Dark";       
    }

    else if (themeSwitchButton.innerHTML == "Dark") {
        body[0].style.backgroundColor = "var(--light-bg)";
        aboutArea[0].style.color = "var(--primary)";
        themeSwitchButton.innerHTML = "Light";
    }
}

function linksPosition(){
    console.log("Activated");
    if (window.screen.width < 1000) {
        document.getElementById("personalize").innerHTML = "above";
    }

    else {
        document.getElementById("personalize").innerHTML = "beside";
    }
}