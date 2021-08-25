<template>
    <div class="container">
      <button>toggle time of day</button>
      <img src="../../public/img/clothes/short_sleeve_shirt.png" alt="pants" width="150" height="150">
      <p>{{message}}</p>
    </div>
</template>

<script>
  import WeatherHandler from '../API/WeatherHandler.js'

  let data = WeatherHandler()

  console.log(data)

  export default {
    name: 'WearBox',
    data() {
      return {
        message: 'Its (cool, hot etc.)'
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