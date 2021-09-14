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
    margin: 0;
    padding: 0;
  } 
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 10px;
    font-size: 16px;
  }
</style>
