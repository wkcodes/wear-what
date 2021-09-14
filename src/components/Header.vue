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
        margin-right: 2vw;
        font-size: 4vw;
    }
    main {
        background-color: linen;
        border-style: solid;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        margin: 10px auto;
        height: 10vh;
        max-width: 50vw;
    }
    i{
      font-size: 2.5vw;
    }
    i:hover{
      cursor: pointer;
    }
    @media screen and (max-width: 300px), (max-height: 300px)  {
      main {
        width: 50vw;
        margin: 10px auto;
      }
      h1{
        font-size: 6vw;
      }
      i{
        font-size: 3vw;
      }
    }
</style>