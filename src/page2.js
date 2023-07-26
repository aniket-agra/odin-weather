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
            let tempDiv = document.createElement("div");
            tempDiv.classList.add("temp");
            weatherDiv.appendChild(tempDiv);
        }
        {
            let textDiv = document.createElement("div");
            textDiv.classList.add("text");
            weatherDiv.appendChild(textDiv);
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
            weatherDiv.appendChild(humidDiv);
        }
        {
            let aqiDiv = document.createElement("div");
            aqiDiv.classList.add("aqi");
            weatherDiv.appendChild(aqiDiv);
        }
        bodyElem.appendChild(weatherDiv);
    }

    {
        let stuffDiv = document.createElement("div");
        stuffDiv.classList.add("stuff");
        bodyElem.appendChild(stuffDiv);
    }

}

export {populatePage2};