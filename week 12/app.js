// city temp

const button = document.getElementById('getWeather');
const output = document.getElementById('output');
const city_input = document.getElementById('city');

// 5 day constants

const dayBoxes = document.querySelectorAll('#five_day_div > div');




city_input.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter'){
        button.click();
    }
})

button.addEventListener('click', async() =>{
    const input = city_input.value.trim();
    const [city, state] = input.split(',').map(x => x.trim());
    if (!city){
        output.textContent = 'Please enter a city name';
        return;
    }

    const apiKey = '8e13ab0f63d4b9be94fdc7c529fa2b76';
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&units=imperial&appid=${apiKey}`;

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('City not found or API error');
        const data = await res.json();
        console.log(data);  // where all the goodies are
        const temp = data.main.temp.toFixed(1);
        const Celsius = ((temp - 32) * (5/9)).toFixed(1);
        const now = new Date().toLocaleTimeString();
        output.innerHTML = `Current temperature in ${data.name}:<br> 
                              ${temp} degrees F, <br>
                              ${Celsius} degrees C, <br>
                               updated at ${now}`;
    }   catch (err){
        output.textContent = err.message;
    }

    // ---- 5 DAY / 3 HOUR FORECAST ----
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state},US&units=imperial&appid=${apiKey}`;

    try {
        const forecastRes = await fetch(forecastUrl);
        if (!forecastRes.ok) throw new Error('Forecast not found or API error');

        const forecastData = await forecastRes.json();
        console.log("5-DAY FORECAST DATA ↓↓↓");
        console.log(forecastData);

        const dailyForecasts = forecastData.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        );

        console.log('dailyForecasts:',  dailyForecasts);

        for (let i = 0; i < 5; i++) {
            const forecast = dailyForecasts[i];
            const tempF = forecast.main.temp.toFixed(1);
        
            dayBoxes[i].querySelector('.tempF').textContent = `${tempF} °F`;
        }

        for (let i = 0; i < 5; i++) {
            const forecast = dailyForecasts[i];
        
            // description of the sky conditions
            const skies = forecast.weather[0].description;
        
            dayBoxes[i].querySelector('.skies').textContent = skies;
        }




        

        
        
    
        

            // build 5 day objects
            const dateInfo = [];
            for (let i = 0; i < 5; i++) {
                const d = new Date();
                d.setDate(d.getDate() + i);
                
                const weekday = d.toLocaleDateString('en-US', { weekday: 'short'});
                const dateLabel = d.toLocaleDateString('en-US', {month: 'short', day: 'numeric'});
                const display = `${weekday} - ${dateLabel}`;

                dateInfo.push({
                    dateObj: d,
                    weekday,
                    dateLabel,
                    display
                });
            }

            for (let i = 0; i < 5; i++) {
                dayBoxes[i].querySelector('.date').textContent = dateInfo[i].display;
            }
            

            console.log('dateInfo:', dateInfo);

            

            } catch (err) {
        console.log("Forecast error:", err.message);
        }
    })


  
  
  