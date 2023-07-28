import { getData } from "./data";
import { populatePage1 } from "./page1";
import { populatePage2 } from "./page2";
import "./style.css";

populatePage1();

let dataFetcher = getData();

dataFetcher.callGiphyAPI("random", ["tag", "weatherman"])
.then((data) => {
    console.log(data);
    let weatherman = document.querySelector(".weatherman");
    let imgDiv = document.createElement("img");
    imgDiv.classList.add("weathermanGIF");
    imgDiv.setAttribute("src", `${data["data"]["images"]["fixed_height"]["url"]}`);
    weatherman.appendChild(imgDiv);
});

const fillInfo = function () {
    let loadingDiv = document.querySelector(".loading");
    loadingDiv.style.color = "black" ;
    let weatherCondition;
    let location = document.querySelector("input#location").getAttribute("value");
    dataFetcher.callWeatherAPI("current", location)
    .then((data) => {
        populatePage2();
        console.log(data);
        loadingDiv.style.color = "white";
        let tempDiv = document.querySelector(".temp");
        tempDiv.textContent = `${data["current"]["temp_c"]}\u00B0C`;
        let textDiv = document.querySelector(".weatherInfo > .text");
        weatherCondition = data["current"]["condition"]["text"];
        textDiv.textContent = `${weatherCondition}`;
        let humidDiv = document.querySelector(".humidity > .value");
        humidDiv.textContent = `${data["current"]["humidity"]}%`;
        let locationDiv = document.querySelector(".location > .value");
        locationDiv.textContent = `${data["location"]["name"]}, ${data["location"]["country"]}`;
    })
    .then(() => {
        dataFetcher.callGiphyAPI("random", ["tag", weatherCondition.split(" ").join("+")]) 
        .then((data) => {
            console.log(data);
            let imgDiv = document.querySelector(".weatherGIF");
            imgDiv.setAttribute("alt", weatherCondition);
            imgDiv.setAttribute("src", `${data["data"]["images"]["fixed_height"]["url"]}`);
        });
    });
    dataFetcher.callAqiAPI(location)
    .then((data) => {
        let aqiDiv = document.querySelector(".aqi");
        let aqiVal = data["data"]["aqi"];
        if (aqiVal === "-")
            aqiDiv.textContent = `AQI: N/A`;
        else
            aqiDiv.textContent = `AQI: ${aqiVal}`;
    });
    dataFetcher.callNewsAPI(location)
    .then(function (data) {
        let numResults = Math.min(10, data["data"].length);
        let newsDiv = document.querySelector(".news");
        for (let i = 0; i < numResults; i++) {
            let headline = document.createElement("a");
            headline.classList.add(`headline#${i + 1}`);
            headline.setAttribute("href", data["data"][i]["url"]);
            headline.textContent = data["data"][i]["title"];
            newsDiv.appendChild(headline);
        }
    });
}

let searchBtn = document.querySelector(".findBtn");
searchBtn.addEventListener("click", function (e) {
    fillInfo();    
});

let inputElem = document.querySelector("input");
inputElem.addEventListener("keyup", function (e) {
    if (e.code === "Enter") {
        fillInfo();
    }
});
// let imgElem = document.createElement("img");
// dataFetcher.callGiphyAPI("random", "cat")
// .then((data) => {
//     imgElem.setAttribute("src", `${data["data"]["images"]["original"]["url"]}`);
// })
// .catch(err => alert(err));
// document.querySelector("body").appendChild(imgElem);