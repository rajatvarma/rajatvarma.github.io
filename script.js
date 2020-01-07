var isDark = false;

function switchTheme() {
    isDark = !isDark
    let root = document.documentElement;
    console.log(isDark);
    var body = document.getElementsByTagName("body");
    var aboutArea = document.getElementsByClassName("about")
    var themeSwitchButton = document.getElementById("themeSwitcherButton");
    if (isDark == true) {
        root.style.setProperty('--primary', "#DF2935");
        body[0].style.backgroundColor = "var(--dark-bg)";
        aboutArea[0].style.color = "var(--primary)";
        themeSwitchButton.innerHTML = "Dark";       
    }

    else if (isDark == false) {
        root.style.setProperty('--primary', "#DC5F67");
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

switchTheme();