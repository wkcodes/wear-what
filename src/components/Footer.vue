<template>
  <main>
    <p>W.K Codes - 2021</p>
    <a href="https://github.com/wkcodes/wear-what"
      ><i class="fab fa-github"></i
    ></a>
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
    padding: 0.5rem;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    margin: 10px auto;
    box-shadow: 0px 5px 5px;
    width: max-content;
    height: 5vh;
    max-height: 100%;
  }
  p {
    font-size: 1vw;
  }
  i {
    font-size: 2rem;
    margin-left: 1vw;
    display: block;
  }
  @media screen and (max-width: 500px), (max-height: 300px) {
    .main {
      margin: 10px auto;
    }
    p {
      font-size: 15px;
    }
    i {
      margin-left: 0.5rem;
      font-size: 1rem;
    }
  }
  @media (max-width: 800px) and (min-width: 400px) {
    p,
    i {
      font-size: 1.5rem;
    }
  }
</style>
