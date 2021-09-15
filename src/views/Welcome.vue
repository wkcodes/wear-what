<template>
  <h1>Welcome</h1>
  <Button/>
</template>

<script>
import Button from '../components/Button.vue'

  export default {
    name: 'Welcome',
    components: {
        Button
    },
    data() {
      return {
        city: ''
      };
    },
  };
</script>
