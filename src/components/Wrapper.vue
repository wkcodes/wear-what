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
      background-color:peachpuff;
    }  
    main {
      margin: 0 auto;

    }
    .container {
      margin: 0 auto;
      max-width: 40vw;
    }
    @media screen and (max-width: 1200px) {
      .container{
        max-width: 100vw;
      }
    }
</style>