function initHeader () {
    let navigationBar = document.createElement("nav");
    navigationBar.className = "navbar navbar-expand-lg navbar-light bg-light";
    createLogo(navigationBar);
    mobileNavigationBar(navigationBar);
    document.getElementById("root").appendChild(navigationBar);
}

// Function that creates logo and appends it to relevant node
function createLogo(parentNode) {
    let logo = document.createElement("a");
    logo.className = "navbar-brand";
    logo.href = "#";
    logo.innerText = "wsiw";
    parentNode.appendChild(logo);
}

// Function that enables collapsability for navigation bar for mobile viewing
function mobileNavigationBar(parentNode){
    // let mobileNavigationBar = document.createElement("button");
    let mobileNavigationBar = createButton("navbar-toggler");
    // mobileNavigationBar.className = "navbar-toggler";
    // mobileNavigationBar.type = "button";
    mobileNavigationBar.setAttribute("data-toggle", "collapse");
    parentNode.appendChild(mobileNavigationBar);
    let navBarIcon = document.createElement("span");
    navBarIcon.className = "navbar-toggler-icon";
    mobileNavigationBar.appendChild(navBarIcon);
}

// Function that creates button base on class type 

function createButton(classType) {
    let newButton = document.createElement("button");
    newButton.type = "button";
    newButton.className = classType;
    return newButton;
}

export default initHeader;
