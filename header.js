function initHeader () {
    let navigationBar = document.createElement("nav");
    let logo = document.createElement("a");
    
    navigationBar.className = "navbar navbar-expand-lg navbar-light bg-light";
    logo.className = "navbar-brand";
    logo.href = "#";
    logo.innerText = "wsiw";
    
    let header = document.createElement("header");
    let title = document.createElement("h1");
    title.innerText = "Hello, World";
    header.appendChild(title);
    document.getElementById("root").appendChild(navigationBar);
}

export default initHeader;