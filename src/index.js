import { getData } from "./data";
import { populatePage } from "./page";
// import "./style.css";

populatePage();

let dataFetcher = getData();

let searchBtn = document.querySelector(".findBtn");
searchBtn.addEventListener("click", function (e) {
    let weatherDiv = document.querySelector(".weatherText");
    let location = document.querySelector("input#location").getAttribute("value");
    dataFetcher.callWeatherAPI("current", location)
    .then((data) => {
        console.log(data);
        let displayText = `In ${data["location"]["name"]}, it is currently ${data["current"]["condition"]["text"]}`;
        displayText += ` with a temperature of ${data["current"]["temp_c"]} degrees.\n`;
        if (data["current"]["temp_c"] > 20) {
            displayText += "Finally! No jackets!!!";
        }
        weatherDiv.textContent = displayText;
    });
});

let imgElem = document.createElement("img");
dataFetcher.callGiphyAPI("random", "cat")
.then((data) => {
    imgElem.setAttribute("src", `${data["data"]["images"]["original"]["url"]}`);
})
.catch(err => alert(err));
// document.querySelector("body").appendChild(imgElem);