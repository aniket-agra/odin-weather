function getData() {
    let WEATHER_API_KEY = "98027771108a4e34ae895533232506";
    let GIPHY_API_KEY = "S1oe8Qn3VykKvfxVnEATGF24DHPFOaxk";
    let AQICN_API_KEY = "b948e0531f21bfdc57f17b820550ec7a01c14f4b";
    let NEWS_API_KEY = "d0bde101400b31138dcc1b588877ba1b";
    const callWeatherAPI = function (qType, qParam) {
        let weatherBase = "https://api.weatherapi.com/v1/";
        let fetch_url = `${weatherBase}${qType}.json?key=${WEATHER_API_KEY}&q=${qParam}&aqi=yes`;
        console.log(fetch_url);
        return fetch(fetch_url, {mode : "cors"})
        .then((response) => {return response.json()});
    }
    const callGiphyAPI = function (qType, qParams) {
        let giphyBase = "https://api.giphy.com/v1/gifs/";
        let fetch_url = `${giphyBase}${qType}?api_key=${GIPHY_API_KEY}`;
        fetch_url = fetch_url + `&${qParams[0]}=${qParams[1]}`;
        console.log(fetch_url);
        return fetch(fetch_url, {mode : "cors"})
        .then((response) => {return response.json()});
    }
    const callAqiAPI = async function (qParam) {
        let base = "https://api.waqi.info/feed/";
        let fetch_url = base + `${qParam}?token=${AQICN_API_KEY}`;
        let response = await fetch(fetch_url, {mode: "cors"});
        let data = await response.json();
        return data;
    }
    const callNewsAPI = async function (qParams) {
        let base = "http://api.mediastack.com/v1/news?";
        let fetch_url = base + `access_key=${NEWS_API_KEY}&keywords=${qParams}` +
                        `&date=${new Date().toISOString().split('T')[0]}&sort=popularity`+
                        `&languages=en`;
        let response = await fetch(fetch_url, {mode: "cors"});
        let data = await response.json();
        return data;
    }
    const callHistoryAPI = async function () {
    }
    const callQuotesAPI = function (qParams) {
    }
    return {callWeatherAPI, callGiphyAPI, callAqiAPI, callNewsAPI, callHistoryAPI, callQuotesAPI};
}

export {getData};