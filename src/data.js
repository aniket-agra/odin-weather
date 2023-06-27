function getData() {
    let weatherData, gifData;
    let WEATHER_API_KEY = "98027771108a4e34ae895533232506";
    let GIPHY_API_KEY = "S1oe8Qn3VykKvfxVnEATGF24DHPFOaxk";
    let weatherBase = "http://api.weatherapi.com/v1/";
    let giphyBase = "http://api.giphy.com/v1/gifs/";
    const callWeatherAPI = function (qType, qParam) {
        let fetch_url = `${weatherBase}${qType}.json?key=${WEATHER_API_KEY}&q=${qParam}`;
        console.log(fetch_url);
        fetch(fetch_url, {mode : "cors"})
        .then((response) => {return response.json()})
        .then((data) => {setWeatherData(data)}).catch((err) => console.error("Caught error: " + err));
    }
    const callGiphyAPI = function (qType, qParam) {
        let fetch_url = `${giphyBase}${qType}?api_key=${GIPHY_API_KEY}&q=${qParam}`;
        console.log(fetch_url);
        fetch(fetch_url, {mode : "cors"})
        .then((response) => {return response.json()})
        .then((data) => {setGifData(data)}).catch((err) => console.error("Caught error: " + err));
    }
    function setWeatherData(data) {
        console.log(data);
        weatherData = data;
    }
    function setGifData(data) {
        console.log(data);
        gifData = data;
    }
    return {weatherData, gifData};
}

export {getData};