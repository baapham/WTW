function initHeader () {
    let navigationBar = document.createElement("nav");
    navigationBar.className = "navbar navbar-expand-lg navbar-light bg-light";
    
    let logo = createLogo();
    navigationBar.appendChild(logo);

    let mobileNavigationBar = enableMobileNavigationBar();
    navigationBar.appendChild(mobileNavigationBar);

    let collapsableList = createCollapsableList();
    navigationBar.appendChild(collapsableList);

    document.getElementById("root").appendChild(navigationBar);
}

// Function that creates logo
function createLogo() {
    let logo = document.createElement("a");
    logo.className = "navbar-brand";
    logo.href = "#";
    logo.innerText = "wsiw";
    return logo;
}

// Function that transforms navigation bar for mobile viewing
function enableMobileNavigationBar(){
    let mobileNavigationBar = createButton("navbar-toggler");
    mobileNavigationBar.setAttribute("data-toggle", "collapse");
    
    let navBarIcon = document.createElement("span");
    navBarIcon.className = "navbar-toggler-icon";
    mobileNavigationBar.appendChild(navBarIcon);

    return mobileNavigationBar;
}

// Function that creates button based on class type 
// classType refers to type of button
function createButton(classType) {
    let newButton = document.createElement("button");
    newButton.type = "button";
    newButton.className = classType;
    return newButton;
}

// Function that creates linked text
// textLink refers to the URL that text refers to
// textString refers to the string that is displayed in the text 
function createHyperlink (textLink, textString) {
    let hyperlink = "a";
    hyperlink.className = "nav-link";
    hyperlink.innerText = textString;
    hyperlink.href = textLink;
    return hyperlink;
}

// Function that creates list item
function createListItem(textLink, textString, hasHyperlink, classType) {
    let listItem = document.createElement("li");
    listItem.className = classType;
    if (hasHyperlink) {
        let hyperlink = createHyperlink(textLink, textString)
        listItem.appendChild(hyperlink);
    }
    return listItem;
}

// Function that creates a collapsable list to fit into collapsed navigation bar for mobile viewing
function createCollapsableList () {
    // Enables collapability of content
    let collapsableListDiv = document.createElement("div");
    collapsableListDiv.className = "collapse navbar-collapse";
    collapsableListDiv.id = "navbarSupportedContent";
    
    // Creates un-ordered list
    let collapsableList = document.createElement("ul");
    collapsableList.className = "navbar-nav mr-auto";
    collapsableListDiv.appendChild(collapsableList);
    
    let homeButton = createListItem("#", "Home", true, "nav-item");
    collapsableList.appendChild(homeButton);

    let aboutButton = createListItem("#","About",true, "nav-item");
    collapsableList.appendChild(aboutButton);

    let searchButton = createListItem(null, "Search", false, "form-inline my-2 my-lg-0");
    collapsableList.appendChild(searchButton);

    let signupButton = createButton("btn btn-success");
    collapsableList.appendChild(signupButton);

    let loginButton = createButton("btn btn-light");
    collapsableList.appendChild(loginButton);
}

export default initHeader;
