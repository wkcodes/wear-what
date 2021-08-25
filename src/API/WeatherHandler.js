const getWeather = async () => {
  console.log('getWeather running...')
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=da643a7d6952012ad2356e9fe073f685')
    .then(response => response.json())
    .then(data => console.log(data.main.feels_like))
  
};

export default getWeather