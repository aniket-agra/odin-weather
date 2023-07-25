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
        tempDiv.textContent = `${data["current"]["temp_c"]}\u00B0C`;
        let textDiv = document.querySelector(".weatherInfo > .text");
        textDiv.textContent = `${data["current"]["condition"]["text"]}`;
        let humidDiv = document.querySelector(".humidity > .value");
        humidDiv.textContent = `${data["current"]["humidity"]}%`;
        let aqiDiv = document.querySelector(".aqi");
        aqiDiv.textContent = `PM2.5 ${data["current"]["air_quality"]["pm2_5"].toFixed(2)}`;
        weatherCondition = `${data["current"]["condition"]["text"]}`;
    })
    .then(() => {
        dataFetcher.callGiphyAPI("random", weatherCondition.split(" ").join("+"))
        .then((data) => {
            let imgDiv = document.querySelector(".weatherGIF");
            imgDiv.setAttribute("alt", weatherCondition);
            imgDiv.setAttribute("src", `${data["data"]["images"]["fixed_height"]["url"]}`);
        });
    })
});

// let imgElem = document.createElement("img");
// dataFetcher.callGiphyAPI("random", "cat")
// .then((data) => {
//     imgElem.setAttribute("src", `${data["data"]["images"]["original"]["url"]}`);
// })
// .catch(err => alert(err));
// document.querySelector("body").appendChild(imgElem);