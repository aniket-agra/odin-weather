function getData() {
    let WEATHER_API_KEY = "98027771108a4e34ae895533232506";
    let GIPHY_API_KEY = "S1oe8Qn3VykKvfxVnEATGF24DHPFOaxk";
    let weatherBase = "http://api.weatherapi.com/v1/";
    let giphyBase = "http://api.giphy.com/v1/gifs/search";
    const callApi = function (qType, qParam) {
        // let fetch_url = `${weatherBase}${qType}.json?key=${WEATHER_API_KEY}&q=${qParam}`;
        let fetch_url = `${giphyBase}?api_key=${GIPHY_API_KEY}&q=${qParam}`;
        console.log(fetch_url);
        fetch(fetch_url, {mode : "cors"})
        .then((response) => {return response.json()})
        .then((data) => {populateDisplay(data)}).catch((err) => console.error("Caught error: " + err));
    }
    const getCurrent = function () {

    };
    const getForecast = function () {

    };
    function populateDisplay(data) {
        console.log(data);
    }
    let data; 
    // callApi("current", "london");
    callApi("", "sunny");

}

export {getData};