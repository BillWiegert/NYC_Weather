console.log("Hello from the JavaScript console!");

// const WeatherTest = function($el) {
//   this.$h1 = $el.find("h1")
// }
$.ajax({
  url: "http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=488c9179f2e875737d42014405c354f3",
  type: "GET",
  success(stuff) {
    doThingsWithStuff(stuff);
    console.log(stuff);
  }
});

function doThingsWithStuff(stuff) {
  let desc = stuff['weather'][0]['description'];
  let wind = stuff['wind']['speed'];
  let temp = stuff['main']['temp'];
  let humidity = stuff['main']['humidity'];
  let city = stuff['name'];
  temp = (temp * (9/5) - 459.67).toFixed(1);
  $('.city').append(city);
  $('.desc').append(desc);
  $('.wind').append(wind);
  $('.temp').append(`${temp}°F`);
  $('.humidity').append(humidity);
}
