<template>
    <div>
      <button>toggle time of day</button>
      <img src="../../public/img/clothes/short_sleeve_shirt.png" alt="pants" width="150" height="150">
      <h2>{{names[0]}}</h2>
    </div>
</template>

<script>
  export default {
    name: 'WearBox',
    props: ['names']
  };
</script>

<style>
    
</style>