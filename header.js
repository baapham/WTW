function initHeader () {
    let header = document.createElement("header");
    let title = document.createElement("h1");
    title.innerText = "Hello, World";
    header.appendChild(title);
    document.getElementById("root").appendChild(header);
}

export default initHeader;