document.getElementById('get-weather').addEventListener("click",()=>{
    document.getElementById("error").innerHTML="" //clearing error message
    const city=document.getElementById('city-input').value
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d61d1162075b921eff95386598ef95c7`

    fetch(url)   // fetch - initiates an http request to the url you specified
    .then(result=>{
        return result.json()
    })
  
    .then(weatherdata=>{
        //converting kelvin to celsius
        const kelvintemp=weatherdata.main.temp
        const celsiustemp=kelvintemp - 273.15;

        document.getElementById("weather-info").innerHTML=`
                <div>
                    <h1>Weather: ${weatherdata.weather[0].main}</h1>
                    <h1>Description: ${weatherdata.weather[0].description}</h1>
                    <h1>Temperature: ${celsiustemp.toFixed(2)} °C</h1>
                 </div>
                `
    })
    .catch(error=>{
        document.getElementById("error").innerHTML=`
            <p>Double check the city name :)</p>
            `
    })
    document.getElementById("weather-info").innerHTML=""
})
