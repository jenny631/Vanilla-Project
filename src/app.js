function displayTemperature(response){
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerhtml = Math.round
    (reponse.data.main.temp);

}
let apiKey = "e2411c8eab70a880d87443ccd47d1f64";
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric';

axios.get(apiUrl).then(displayTemperature);

