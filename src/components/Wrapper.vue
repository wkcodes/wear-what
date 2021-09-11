<template>
  <main>
    <Header/>
    <WearBox/>
    <Footer/>
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
    
</style>