<template>
  <main>
    <h1>WearWhat</h1>
    <i class="far fa-user fa-lg"></i>
  </main>
</template>

<script>
  export default {
    name: 'Header',
  };
</script>

<style scoped>
    h1 {
        margin-right: 1rem;
    }
    main {
        background-color: linen;
        border-style: solid;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        margin: 10px;
    }
    i:hover{
      cursor: pointer;
    }
</style>