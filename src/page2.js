function populatePage2() {
    let bodyElem = document.querySelector("body");
    bodyElem.classList.remove("page1");
    bodyElem.classList.add("page2");
    document.querySelectorAll("body > *").forEach(e => bodyElem.removeChild(e));

    // let container = document.createElement("div");
    // container.classList.add("container");

    {
        let weatherDiv = document.createElement("div");
        weatherDiv.classList.add("weatherInfo");
        {
            let imgDiv = document.createElement("img");
            imgDiv.classList.add("weatherGIF");
            weatherDiv.appendChild(imgDiv);
        }
        {
            let infoDiv = document.createElement("div");
            infoDiv.classList.add("info");
            {
                let tempDiv = document.createElement("div");
                tempDiv.classList.add("temp");
                infoDiv.appendChild(tempDiv);
            }
            {
                let textDiv = document.createElement("div");
                textDiv.classList.add("text");
                infoDiv.appendChild(textDiv);
            }
            {
                let humidDiv = document.createElement("div");
                humidDiv.classList.add("humidity");
                {
                    let dropDiv = document.createElement("div");
                    dropDiv.classList.add("drop", "material-symbols-outlined");
                    dropDiv.textContent = "water_drop";
                    humidDiv.appendChild(dropDiv);
                }
                {
                    let valueDiv = document.createElement("div");
                    valueDiv.classList.add("value");
                    humidDiv.appendChild(valueDiv);
                }
                infoDiv.appendChild(humidDiv);
            }
            {
                let aqiDiv = document.createElement("div");
                aqiDiv.classList.add("aqi");
                infoDiv.appendChild(aqiDiv);
            }
            weatherDiv.appendChild(infoDiv);
        }
        bodyElem.appendChild(weatherDiv);
    }

    {
        let historyDiv = document.createElement("div");
        historyDiv.classList.add("history");
        bodyElem.appendChild(historyDiv);
    }

}

export {populatePage2};