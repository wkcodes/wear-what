<template>
  <router-view/>
</template>

<script>
import Wrapper from './components/Wrapper.vue';

  export default {
    name: 'App',
    components: {
      Wrapper,
    },
    data() {
      return {
        city: []
      }
    } 
  };
</script>

<style>
  * {
    box-sizing: border-box;
    text-decoration: none;
  } 
  #app {
    font-family: 'Bitter', serif;
    text-align: center;
    margin: 10px;
  }
</style>
