function populatePage2() {
    let bodyElem = document.querySelector("body");
    bodyElem.classList.add("page2");
    document.querySelectorAll("body > *").forEach(e => bodyElem.removeChild(e));

    // let container = document.createElement("div");
    // container.classList.add("container");

    {
        let weatherDiv = document.createElement("div");
        weatherDiv.classList.add("weatherInfo");
        bodyElem.appendChild(weatherDiv);
    }

    {
        let imgDiv = document.createElement("img");
        imgDiv.classList.add("weatherGIF");
        bodyElem.appendChild(imgDiv);
    }

    {
        let historyDiv = document.createElement("div");
        historyDiv.classList.add("history");
        bodyElem.appendChild(historyDiv);
    }

}

export {populatePage2};