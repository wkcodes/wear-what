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
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 25px;
      height: 4vh;
      width: 30vw;
      margin: 10px auto;
      box-shadow: 0px 5px 5px;
    }
    p{
      font-size: 1vw;
    }
    @media screen and (max-width: 300px), (max-height: 300px) {
      .main{
        height: 3vh;
        max-width: 40vw;
        margin: 10px auto;
      }
      p{
        font-size: 1.5vw;
      }
    }
</style>