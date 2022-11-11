let infoContainer = document.getElementById("information-container");
const allButtons = document.getElementsByClassName("menu-btn");

var menuBtnAdjustStyle = function(e) {
    let id = e.target.id;

    for (let i = 0; i < allButtons.length; i++) {
        let b = allButtons[i];
        let updatedStyle;
        const isClickedBtn = (b.id == id);
        
        if(isClickedBtn) {
            updatedStyle = '2px transparent grey';
        }
        else {
            updatedStyle = '0px';
        }

        b.style.border = updatedStyle;
    }
}

var updateInfo = function(e) {
    let id = e.target.id;

    switchInfoVisibility("projectsInfo", id == "projectsBtn");
    switchInfoVisibility("experienceInfo", id == "experienceBtn");
    switchInfoVisibility("servicesInfo", id == "servicesBtn");
}

var switchInfoVisibility = function(infoId, visible=false) {
    document.getElementById(infoId).style.visibility = visible ? "visible" : "hidden";
}

var switchBtnAnimation = function(e) {
    let id = e.target.id;
    let animActivate = "btn-activate";
    let animDeactivate = "btn-deactivate";

    for (btn of allButtons) {
        let is_pressed = (id == btn.id);

        if (is_pressed) {
            // As long as we've used this button before,
            // we will toggle the two animations.
            // On the first go, we just toggle one to on
            if (btn.classList.contains(animActivate) ||
                btn.classList.contains(animDeactivate)) {
                btn.classList.toggle(animDeactivate);
            }

            btn.classList.toggle(animActivate);
        }
        else {
            if (btn.classList.contains(animActivate)) {
                btn.classList.toggle(animActivate)
                btn.classList.toggle(animDeactivate)
            }
        }

    }
}

for (const btn of allButtons) {
    btn.addEventListener('click', updateInfo);
    btn.addEventListener('click', switchBtnAnimation);
}