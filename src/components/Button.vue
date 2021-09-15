<template>
  <a href="">
    <button @click="onClick()">Submit City</button>
  </a>
  <input v-model="city" placeholder="Paris" />
</template>

<script>
  export default {
    name: 'Button',
    data() {
      return {
        city: '',
      };
    },
    methods: {
      onClick() {
        console.log('click');
        this.$emit('submit-city', this.city);
        console.log(this.city);
      },
    },
  };
</script>
