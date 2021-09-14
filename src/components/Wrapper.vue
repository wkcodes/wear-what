<template>
  <main>
    <div class="container">
    <Header/>
    <WearBox/>
    <Footer/>
    </div>
  </main>
</template>

<script>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  import WearBox from './WearBox.vue';

  export default {
    name: 'Wrapper',
    components: {
      Header,
      Footer,
      WearBox
    },
  };
</script>

<style>
    body {
      background-color:powderblue;
    }  
    main {
      margin: 0 auto;

    }
    .container {
      margin: 0 auto;
      max-width: 40vw;
      max-height: 70vh;
      height: 100vh;
    }
    @media screen and (max-width: 800px) {
      .container{
        max-width: 90vw;
        max-height: 50vh;
      }
    }
</style>