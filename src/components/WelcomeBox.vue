<template>
<div class="container">
  <h1>Welcome!</h1>
  <p>This is WearWhat a web-app that help you determine what you want to wear at the moment.</p>
  <button @click="onClick()">Submit City</button>
  <input v-model="city" placeholder="Paris" />
</div>
</template>

<script>
  export default {
    name: 'WelcomeBox',
    data() {
      return {
        city: '',
        toggle: false,
      };
    },
    methods: {
      onClick() {
        this.toggle = true;
        console.log('click');
        this.$emit('submit-city', this.city);
        this.$emit('toggle', this.toggle);
        console.log(this.city);
      },
    },
  };
</script>

<style scoped>
  #top {
    display: block;
  }
  .container {
    background-color: linen;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    max-width: 50vw;
    box-shadow: 0px 5px 5px;
  }
  img:hover {
    transition: all 0.5s ease;
    transform: translateY(-3%);
  }
  img {
    transition: all 0.5s ease;
    transform: translateY(3%);
    padding-top: 1vh;
    max-height: 20vh;
    max-width: 20vh;
  }
  p {
    font-size: 2vw;
    padding-top:10px;
  }
  @media screen and (max-width: 800px), (max-height: 700px) {
    .container {
      height: 50vh;
      max-height: 70vh;
      max-width: 65vw;
    }
  }
  @media screen and (max-width: 500px), (max-height: 300px) {
    img {
      max-height: 17vh;
      max-width: 17vh;
    }
    h1 {
        font-size: 8vw;
    }
    p {
      font-size: 3vw;
    }
    button {
        size: 3vw;
    }
  }
</style>
