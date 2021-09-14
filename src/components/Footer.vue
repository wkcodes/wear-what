<template>
  <main>
    <p>W.K Codes - 2021</p>
  </main>
</template>

<script>
  export default {
    name: 'Footer',
    components: {},
  };
</script>

<style scoped>
    main {
      background-color: linen;
      padding: 15px;
      margin: 10px;
      border-style: solid;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 25px;
      max-height: 7vh;
      width: 50vw;
      margin: 10px auto;
    }
    p{
      font-size: 1rem;
    }
    @media screen and (max-width: 300px), (max-height: 300px) {
      .main{
        width: 50vw;
        margin: 10px auto;
      }
      p{
        font-size: 3vw;
      }
    }
</style>