
let API_key ="98bfbc4f3dc22c5db3d3e9dd678b9874";
async function getWeather() {
  let city_name = document.getElementById("cityInput").value.trim();
     let icon = document.querySelector(".icon");
 
    const result = document.getElementById("weatherDisplay");
 

  let API_url=`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`;

 
  if (!city_name) {
    result.innerHTML = "";
    return;
  }

 
  try{

  
  let response = await fetch(API_url);
  console.log(response)
  let data = await response.json();
  console.log(data);


        if (data.cod !== 200) {
            result.innerHTML = "City not found!";
            return;
        }
        let temp = (data.main.temp - 273.15).toFixed(1);
        let desc = data.weather[0].description;
        let weatherMain = data.weather[0].main;
        let iconCode = data.weather[0].icon;
     
        result.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${temp}°C</p>
            <p>Weather: ${desc}</p> `;
       
     
        changeBackground(weatherMain);
    
}
catch(error){
  result.innerHTML="Error something went wrong";
   console.log(error)
}
}


function changeBackground(weather) {
    if (weather.toLowerCase() === "clear") {
        document.body.style.backgroundImage = "url('clearsky.png')";
    } 
    else if (weather.toLowerCase() === "clouds") {
        document.body.style.backgroundImage = "url('cloud.png')";
    } 
    else if (weather.toLowerCase() === "rain") {
        document.body.style.backgroundImage = "url('rainy.png')";
    } 
    else {
        document.body.style.backgroundImage = "url('bg.png')";
    }
}



