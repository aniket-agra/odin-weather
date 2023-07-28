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
        {
            let locationDiv = document.createElement("div");
            locationDiv.classList.add("location");
            {
                let locationPin = document.createElement("div");
                locationPin.classList.add("pin", "material-symbols-outlined");
                locationPin.textContent = "location_on";
                locationDiv.appendChild(locationPin);
            }
            {
                let locationText = document.createElement("div");
                locationText.classList.add("value");
                locationDiv.appendChild(locationText);
            }
            weatherDiv.appendChild(locationDiv);
        }
        bodyElem.appendChild(weatherDiv);
    }

    {
        let stuff = document.createElement("fieldset");
        stuff.classList.add("stuff");
        {
            let newsLegend = document.createElement("legend");
            newsLegend.classList.add("headlines");
            newsLegend.textContent = "Top Headlines";
            stuff.appendChild(newsLegend);
        }
        {
            let newsDiv = document.createElement("div");
            newsDiv.classList.add("news");
            stuff.appendChild(newsDiv);
        }
        bodyElem.appendChild(stuff);
    }

    {
        let noteDiv = document.createElement("div");
        noteDiv.classList.add("note");
        noteDiv.textContent = "PS: You may have to disable secure DNS lookup " +
                            "in your browser to display the headlines. This" +
                            " will be fixed soon.";
        bodyElem.appendChild(noteDiv);
    }
}

export {populatePage2};