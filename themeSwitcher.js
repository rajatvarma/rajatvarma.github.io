function switchTheme() {
    var body = document.getElementsByTagName("body");
    var aboutArea = document.getElementsByClassName("about")
    var themeSwitchButton = document.getElementById("themeSwitcherButton");
    if (themeSwitchButton.innerHTML == "Day") {
        body[0].style.backgroundColor = "var(--dark-bg)";
        aboutArea[0].style.color = "var(--primary)";
        themeSwitchButton.innerHTML = "Night";       
    }

    else if (themeSwitchButton.innerHTML == "Night") {
        body[0].style.backgroundColor = "var(--light-bg)";
        aboutArea[0].style.color = "var(--primary)";
        themeSwitchButton.innerHTML = "Day";
    }
}