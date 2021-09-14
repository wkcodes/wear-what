<template>
  <main>
    <p>W.K Codes - 2021</p>
    <a href="https://github.com/wkcodes/wear-what"><i class="fab fa-github"></i></a>
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
    i{
      font-size: 1.5vw;
      margin-left: 1vw;
      display: block;
    }
    @media screen and (max-width: 300px), (max-height: 300px) {
      .main{
        height: 3vh;
        width: 2vh;
        max-width: 50vw;
        margin: 10px auto;
      }
      p{
        font-size: 6px;
      }
      i{
        font-size: 6px;
      }
    }
</style>