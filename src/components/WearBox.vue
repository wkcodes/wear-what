<template>
  <main>
    <div class="container">
      <img
        v-if="top === 'shirt'"
        src="../../public/img/clothes/short_sleeve_shirt.png"
        alt="pants"
        width="200"
        height="200"
      />
      <img
        v-if="top == 'jacket'"
        src="../../public/img/clothes/hoodie.png"
        alt="pants"
        width="200"
        height="200"
      />
      <img
        v-if="bottom == 'pants'"
        src="../../public/img/clothes/pants.png"
        alt="pants"
        width="200"
        height="200"
      />
      <img
        v-if="bottom == 'shorts'"
        src="../../public/img/clothes/shorts.png"
        alt="pants"
        width="200"
        height="200"
      />
      <p style="box">It's {{temp}} degrees and {{cloudy}} in {{city}}.</p>
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
        cloudy: '',
        temp: '',
        city: 'Seattle'
      };
    },
    created() {
      this.wearCalculator();
    },
    methods: {
      wearCalculator() {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&appid=da643a7d6952012ad2356e9fe073f685`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            //if (data.main())
            if (data.main.temp > 70) {
              this.top = 'shirt';
              this.bottom = 'shorts';
            } else {
              this.top = 'jacket';
              this.bottom = 'pants';
            }
            if (data.weather[0].main == 'Clouds') {
              this.cloudy = 'cloudy'
            } else {
              this.cloudy = 'clear'
            }
            this.temp = data.main.temp
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
    background-color: linen;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    max-width: 50vw;
    box-shadow: 0px 5px 5px;
  }
  img:hover {
    transition: all 0.5s ease;
    transform: translateY(-3%);
  }
  img {
    transition: all 0.5s ease;
    transform: translateY(3%);
    padding-top: 1vh;
    max-height: 20vh;
    max-width: 20vh;
  }
  p {
    font-size: 2vw;
    padding-top:10px;
  }
  @media screen and (max-width: 800px), (max-height: 700px) {
    .container {
      height: 50vh;
      max-height: 70vh;
      max-width: 65vw;
    }
  }
  @media screen and (max-width: 500px), (max-height: 300px) {
    img {
      max-height: 17vh;
      max-width: 17vh;
    }
    p {
      font-size: 3vw;
    }
  }
</style>
