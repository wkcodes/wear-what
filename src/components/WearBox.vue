<template>
  <main>
    <div class="container">
      <img
        v-if="top === 'shirt'"
        src="../../public/img/clothes/short_sleeve_shirt.png"
        alt="pants"
        width="150"
        height="150"
      />
      <img
        v-if="top == 'jacket'"
        src="../../public/img/clothes/hoodie.png"
        alt="pants"
        width="150"
        height="150"
      />
      <img
        v-if="bottom == 'pants'"
        src="../../public/img/clothes/pants.png"
        alt="pants"
        width="150"
        height="150"
      />
      <img
        v-if="bottom == 'shorts'"
        src="../../public/img/clothes/shorts.png"
        alt="pants"
        width="150"
        height="150"
      />
      <p>It's a nice day in Seattle</p>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'WearBox',
    data() {
      return {
        top: '',
        bottom: '',
      };
    },
    created() {
      this.wearCalculator();
    },
    methods: {
      wearCalculator() {
        fetch(
          'https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=da643a7d6952012ad2356e9fe073f685'
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.main.temp > 65) {
              this.top = 'shirt';
              this.bottom = 'shorts';
            } else {
              this.top = 'jacket';
              this.bottom = 'pants';
            }
            if (data.weather[0].main == 'Clouds') {
              // cloudy
            }
          });
      },
    },
  };
</script>

<style scoped>
  main {
    background-color: linen;
  }
  #top {
    display: block;
  }
  .container {
    padding: 15px;
    border: solid;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img:hover {
    transition: all 1s ease;
    transform: translateY(-10%);
  }
  img {
    margin: 5px;
    transition: all 1s ease;
    transform: translateY(10%);
  }
</style>
