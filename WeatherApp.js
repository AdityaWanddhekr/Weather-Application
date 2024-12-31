

let key="2fdfbd65e1e0b387897491f8778517a6";
let url="https://api.openweathermap.org/data/2.5/weather?units=metric&";

async function checkWeather(city) {
  let promise=await fetch(url+`q=${city}`+`&appid=${key}`);
  let data=await promise.json();

  let cityName=document.querySelector("#city-name");
  cityName.innerHTML=data.name;
  let temperature=document.querySelector("#temperature");
  temperature.innerHTML=Math.round(data.main.temp)+"°C";
  let discription=document.querySelector("#description");
  description.innerHTML=`The Weather of the ${data.name} is ${data.weather[0].description}`;
  let windSpeed=document.querySelector("#wind-speed");
  windSpeed.innerHTML="Wind Speed : "+data.wind.speed+" m/s";
  let Humidity=document.querySelector("#Humidity");
  Humidity.innerHTML="Humidity : "+data.main.humidity+" % ";
  let Pressure=document.querySelector("#Pressure");
  Pressure.innerHTML="Pressure : "+data.main.pressure+" hpa ";
  let date=document.querySelector("#date");
  date.innerHTML=new Date();

  let atmosphere=data.weather[0].description;
  let icon=document.querySelector("#weather-icon");
  switch(atmosphere){
  
    case "clear sky":icon.innerHTML=icon.src="media/clearSky.png";
                    break;
    case "smoke":icon.innerHTML=icon.src="media/smoke.png";
                  break; 
    case "fog":icon.innerHTML=icon.src="media/fog.png";
                break;
    case "haze":icon.innerHTML=icon.src="media/haze.png";
                break; 
  }
}


let input=document.querySelector("#city-input");
let btn=document.querySelector(".check");
btn.addEventListener("click",()=>{
  if(input.value==""){
    alert("Please enter City!...");
  }
  else{
    const date = new Date();
    console.log(date);
    console.log(input.value);
    checkWeather(input.value)
  }
})