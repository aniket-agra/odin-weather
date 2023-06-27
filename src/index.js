import { getData } from "./data";

let dataFetcher = getData();

let imgElem = document.createElement("img");
dataFetcher.callGiphyAPI("random", "cat")
.then((data) => {
    imgElem.setAttribute("src", `${data["data"]["images"]["original"]["url"]}`);
})
.catch(err => alert(err));
document.querySelector("body").appendChild(imgElem);