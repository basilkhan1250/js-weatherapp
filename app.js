const city = document.querySelector(".cityName")
const form = document.querySelector(".input")
const data = document.querySelector(".city")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  axios.get(`https://api.weatherapi.com/v1/current.json?key=5d30f3fc4ac141018e7173631242604&q=${city.value}`)
    .then((r) => {
      console.log(r.data);
      console.log(r.data.current.condition.icon)
      data.innerHTML = `
    <p class="date">${r.data.location.localtime}</p>
    <h1 class="name">City: ${r.data.location.name}</h1>
    <img src="${r.data.current.condition.icon}" alt="icon">
    <h1 class="temprature">${r.data.current.temp_c} C<sup>o</sup></h1>
    <p class="climate">${r.data.current.condition.text}</p>
    <div class="last">
    <p class="wind">${r.data.current.wind_kph}<span>wind</span></p>
    <p class="humidity">${r.data.current.humidity}<span>Humidity</span></p>
    <p class="pri">${r.data.current.precip_in}% <span>Precipitation</span></p>
    </div>
    `
    })
    
  city.value = " ";
});








