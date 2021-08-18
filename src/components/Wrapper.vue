<template>
  <main class="container">
    <Header title="Wearwhat"/>
    <Footer/>
  </main>
</template>

<script>
  import Header from './Header.vue';
  import Footer from './Footer.vue';

  export default {
    name: 'Wrapper',
    components: {
      Header,
      Footer,
    },
  };
</script>

<style scoped>
    .container {
        display: grid;
        grid-template-columns: 15rem;
    }
</style>