function populatePage2() {
    let bodyElem = document.querySelector("body");
    bodyElem.classList.add("page2");
    document.querySelectorAll("body > *").forEach(e => bodyElem.removeChild(e));

    let container = document.createElement("div");
    container.classList.add("container");

    // {
    //     let weatherDiv = document.createElement("div");
    //     weatherDiv.classList.add("weatherText");
    //     bodyElem.appendChild(weatherDiv);
    // }

    // {
    //     let loadDiv = document.createElement("div");
    //     loadDiv.classList.add("loading");
    //     bodyElem.appendChild(loadDiv);
    // }

    // {
    //     let imgDiv = document.createElement("img");
    //     imgDiv.classList.add("weatherGIF");
    //     imgDiv.setAttribute("alt", "");
    //     imgDiv.setAttribute("src", "");
    //     bodyElem.appendChild(imgDiv);
    // }

}

export {populatePage2};