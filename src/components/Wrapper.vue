<template>
  <main>
    <Header />
    <WearBox />
    <Footer />
  </main>
</template>

<script>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  import WearBox from './WearBox.vue';
  import Welcome from '../views/Welcome.vue';

  export default {
    name: 'Wrapper',
    components: {
      Header,
      Footer,
      WearBox,
      Welcome,
    }
  };
</script>

<style>
  body {
    background-color: powderblue;
  }
  main {
    margin: 0 auto;
  }
  .container {
    margin: 0 auto;
    max-width: 40vw;
    max-height: 100%;
    height: 60vh;
  }
  @media screen and (max-width: 800px) {
    .container {
      max-width: 90vw;
      max-height: 100%;
    }
    main {
      height: 100%;
    }
  }
</style>
