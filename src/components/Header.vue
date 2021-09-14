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
        margin: 10px;
        height: 10vh;
    }
    i{
      font-size: 2vw;
    }
    i:hover{
      cursor: pointer;
    }
    @media screen and (max-width: 300px), (max-height: 300px)  {
      h1{
        font-size: 6vw;
      }
      i{
        font-size: 3vw;
      }
    }
</style>