<template>
  <h1>Welcome!</h1>
    <button @click="onClick()">Submit City</button>
  <input v-model="city" placeholder="Paris" />
</template>

<script>
  export default {
    name: 'WelcomeBox',
    data() {
      return {
        city: '',
      };
    },
    methods: {
      onClick() {
        console.log('click');
        this.$emit('submit-city', this.city);
        this.$emit('toggle', this.toggle)
        console.log(this.city);
      },
    },
  };
</script>
