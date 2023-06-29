import { getData } from "./data";
import { populatePage } from "./page";
// import "./style.css";

populatePage();

let dataFetcher = getData();

let searchBtn = document.querySelector(".findBtn");
searchBtn.addEventListener("click", function (e) {
    dataFetcher.callWeatherAPI("current", document.querySelector("input#location").getAttribute("value"))
    .then((data) => {
        console.log(data);
    })
})

let imgElem = document.createElement("img");
dataFetcher.callGiphyAPI("random", "cat")
.then((data) => {
    imgElem.setAttribute("src", `${data["data"]["images"]["original"]["url"]}`);
})
.catch(err => alert(err));
// document.querySelector("body").appendChild(imgElem);