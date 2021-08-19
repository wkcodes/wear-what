<template>
  <main class="container">
    <Header title="Wearwhat"/>
    <WearBox test=""/>
    <Footer/>
  </main>
</template>

<script>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  import WearBox from './WearBox.vue';

  let testData = 'boy howdy';

  export default {
    name: 'Wrapper',
    components: {
      Header,
      Footer,
      WearBox
    },
    props: {
        test: String
    }
  };
</script>

<style scoped>
    .container {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto;
    }
</style>