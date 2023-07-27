import { getData } from "./data";
import { populatePage1 } from "./page1";
import { populatePage2 } from "./page2";
import "./style.css";

populatePage1();

let dataFetcher = getData();

let searchBtn = document.querySelector(".findBtn");
searchBtn.addEventListener("click", function (e) {
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
        tempDiv.textContent = `16\u00B0C`; //${data["current"]["temp_c"]} 
        let textDiv = document.querySelector(".weatherInfo > .text");
        textDiv.textContent = "Partly cloudy";//`${data["current"]["condition"]["text"]}`;
        let humidDiv = document.querySelector(".humidity > .value");
        humidDiv.textContent = "50%";//`${data["current"]["humidity"]}%`;
        let locationDiv = document.querySelector(".location > .value");
        locationDiv.textContent = `${data["location"]["name"]}, ${data["location"]["country"]}`;
    })
    .then(() => {
        dataFetcher.callAqiAPI(location)
        .then((data) => {
            let aqiDiv = document.querySelector(".aqi");
            aqiDiv.textContent = `AQI: ${data["data"]["aqi"]}`;
        });
    })
    .then(() => {
        dataFetcher.callGiphyAPI("random", "cloudy") //weatherCondition.split(" ").join("+") - for testing
        .then((data) => {
            console.log(data);
            let imgDiv = document.querySelector(".weatherGIF");
            imgDiv.setAttribute("alt", weatherCondition);
            imgDiv.setAttribute("src", `${data["data"]["images"]["fixed_height"]["url"]}`);
        });
    })
    .then(() => {
        dataFetcher.callNewsAPI(location)
        .then(function (data) {
            let newsDiv = document.querySelector(".news");
            let numResults = Math.max(10, data["totalResults"]);
            console.log(data);
        });
    });
});

// let imgElem = document.createElement("img");
// dataFetcher.callGiphyAPI("random", "cat")
// .then((data) => {
//     imgElem.setAttribute("src", `${data["data"]["images"]["original"]["url"]}`);
// })
// .catch(err => alert(err));
// document.querySelector("body").appendChild(imgElem);