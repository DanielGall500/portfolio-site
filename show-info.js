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

for (const btn of allButtons) {
    btn.addEventListener('click', updateInfo);
}