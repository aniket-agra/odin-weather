function getData() {
    let API_KEY = "98027771108a4e34ae895533232506";
    let base_url = "http://api.weatherapi.com/v1/";
    const callApi = function (qType, qParam) {
        let fetch_url = `${base_url}${qType}.json?key=${API_KEY}&q=${qParam}`;
        console.log(fetch_url);
        fetch(fetch_url, {"mode" : "cors"})
        .then((response) => {return response.json()})
        .then((data) => {return data}).catch((err) => console.error("Caught error: " + err));
    }
    const getCurrent = function () {

    };
    const getForecast = function () {

    };
    let data; 
    callApi("current", "london");
    
}

export {getData};