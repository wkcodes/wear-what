<template>
    <div class="container">
      <button>toggle time of day</button>
      <img src="../../public/img/clothes/short_sleeve_shirt.png" alt="pants" width="150" height="150">
      <p>It's {{temp}} and {{weather}} in {{city}}</p>
    </div>
</template>

<script>
  export default {
    name: 'WearBox',
    data() {
      return {
        city: '',
        weatherData: {},
        temp: '',
        weather: ''
      }
    }, 
    async mounted() {
      try{
      fetch('https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=da643a7d6952012ad2356e9fe073f685')
        .then(res => res.json())
        .then(data => {
          this.weatherData = data
          this.city = data.name
          this.temp = data.main.temp
          this.weather = data.weather[0].main
        })
      }catch (err) {
         throw err
      }
    }
  };
</script>

<style scoped>
    .container {
      display: flex;
      justify-content: center;
    }
    
</style>