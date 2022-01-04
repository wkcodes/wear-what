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
    font-size: 5rem;
  }
  main {
    background-color: linen;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin: 10px auto;
    height: 10vh;
    max-width: 40%;
    box-shadow: 0px 5px 5px;
  }
  i {
    font-size: 2.5rem;
  }
  i:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 500px), (max-height: 300px) {
    main {
      max-width: 90%;
      margin: 10px auto;
    }
    h1 {
      font-size: 2rem;
    }
    i {
      font-size: 1.3rem;
    }
  }
</style>
