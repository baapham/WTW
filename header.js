function initHeader () {
    let navigationBar = document.createElement("nav");
    let logo = document.createElement("a");
    
    navigationBar.className = "navbar navbar-expand-lg navbar-light bg-light";
    logo.className = "navbar-brand";
    logo.href = "#";
    logo.innerText = "wsiw";
    navigationBar.appendChild(logo);
    
    document.getElementById("root").appendChild(navigationBar);
}

export default initHeader;