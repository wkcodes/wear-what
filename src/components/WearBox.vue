<template>
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
  </div>
</template>

<script>
  export default {
    name: 'WearBox',
    data() {
      return {
        top: '',
        bottom: ''
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
  #top {
    display: block;
  }
  .container {
    border: solid;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
