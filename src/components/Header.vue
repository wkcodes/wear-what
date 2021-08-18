<template>
    <h1>{{ title }}</h1>
</template>

<script>
  export default {
    name: 'Header',
    props: ['title'], 
  };
</script>

<style scoped>
    h1 {
        color:seagreen;
    }
</style>