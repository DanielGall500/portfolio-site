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
    let btn = document.getElementById(id);
    let animationForward = "menu-btn-movement";
    let animationBack = "menu-btn-move-back";

    // As long as we've used this button before,
    // we will toggle the two animations.
    // On the first go, we just toggle one to on
    if (btn.classList.contains(animationForward) ||
        btn.classList.contains(animationBack)) {
        document.getElementById(id).classList.toggle('menu-btn-move-back');
    }

    document.getElementById(id).classList.toggle('menu-btn-movement');
}

for (const btn of allButtons) {
    btn.addEventListener('click', updateInfo);
    btn.addEventListener('click', switchBtnAnimation);
}