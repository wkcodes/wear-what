<template>
    <div class="container">
      <button>toggle time of day</button>
      <img src="../../public/img/clothes/short_sleeve_shirt.png" alt="pants" width="150" height="150">
      <p>It's {{currentWeather}} in {{city}}</p>
    </div>
</template>

<script>
  export default {
    name: 'WearBox',
    data() {
      return {
        city: 'Seattle',
        currentWeather: {}
      }
    }, 
    mounted() {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=da643a7d6952012ad2356e9fe073f685')
        .then(res => res.json())
        .then(data => this.currentWeather = data.main.temp)
    }
  };
</script>

<style scoped>
    .container {
      display: flex;
      justify-content: center;
    }
    
</style>