document.addEventListener("DOMContentLoaded", function () {
    const getWeatherBtn = document.getElementById("getWeather");
    const info = document.getElementById("weatherInfo");
    
    getWeatherBtn.addEventListener("click", function () {
        const city = document.getElementById("city").value;
        const apiKey = "6ba3d4e5071d4402468985d54babf4d0"; 
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                const { name, main, weather } = data;
                const temperature = main.temp;
                const description = weather[0].description;
                
                info.innerHTML = `
                    <h2>${name}</h2>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Description: ${description}</p>
                `;
            })
            .catch(error => {
                info.innerHTML = "Error fetching weather data.";
            });
    });
});