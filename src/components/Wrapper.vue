<template>
  <main>
    <Header />
    <WearBox
      v-if="toggle"
      v-bind:user__city="this.city"
      @reset="resetWearBox"
    />
    <WelcomeBox v-if="!toggle" @submit-city="getCity" />
    <Footer />
  </main>
</template>

<script>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  import WearBox from './WearBox.vue';
  import WelcomeBox from './WelcomeBox.vue';

  export default {
    name: 'Wrapper',
    components: {
      Header,
      Footer,
      WearBox,
      WelcomeBox,
    },
    methods: {
      getCity: function(params) {
        console.log(params);
        this.city = params;
        this.toggle = params;
        console.log(this.city);
        if (params.toggle === true) {
          console.log(this.toggle);
        }
      },
      resetWearBox: function(params) {
        this.toggle = params;
      },
    },
    created() {
      if (this.toggle == true) {
        console.log('city');
      }
    },
    data() {
      return {
        city: '',
        toggle: false,
      };
    },
  };
</script>

<style>
  body {
    background-color: powderblue;
  }
  main {
    margin: 0 auto;
    font-size: 2rem;
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
  @media (max-width: 800px) and (min-width: 400px) {
  }
</style>
