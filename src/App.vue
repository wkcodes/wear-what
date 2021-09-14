<template>
  <Wrapper/>
</template>

<script>
import Wrapper from './components/Wrapper.vue';

  export default {
    name: 'App',
    components: {
      Wrapper,
    },
   
  };
</script>

<style>
  * {
    box-sizing: border-box;
  } 
  #app {
    font-family: 'Bitter', serif;
    text-align: center;
    margin: 10px;
    font-size: 16px;
  }
</style>
