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
      <p style="box">It's {{ temp }} degrees and {{ cloudy }} in {{ city }}.</p>
      <button @click="onClick()" class="button">Reset</button>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'WearBox',
    props: ['user__city'],
    data() {
      return {
        top: '',
        bottom: '',
        cloudy: '',
        temp: '',
        city: this.user__city,
        toggle: true,
      };
    },
    created() {
      console.log('created');
      this.wearCalculator();
    },
    methods: {
      wearCalculator() {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&appid=da643a7d6952012ad2356e9fe073f685`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            //if (data.main())
            if (data.main.temp > 70) {
              this.top = 'shirt';
              this.bottom = 'shorts';
            } else {
              this.top = 'jacket';
              this.bottom = 'pants';
            }
            if (data.weather[0].main == 'Clouds') {
              this.cloudy = 'cloudy';
            } else {
              this.cloudy = 'clear';
            }
            this.temp = data.main.temp;
          });
      },
      onClick() {
        console.log('reset clicked');
        this.toggle = false;
        this.$emit('reset', this.toggle);
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
    height: max-content;
    box-shadow: 0px 5px 5px;
    padding: 2rem;
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
    padding-top: 10px;
  }
  button {
    background-color: indianred;
    border-radius: 20px;
    color: white;
    padding: 0.5rem 0.5rem;
    text-align: center;
    text-decoration: none;
    font-size: 1.5vw;
    margin-top: -1.5vh;
  }
  @media screen and (max-width: 800px), (max-height: 700px) {
    .container {
      max-height: 100%;
      max-width: 80%;
      padding: 1.5rem;
    }
  }
  @media screen and (max-width: 500px), (max-height: 300px) {
    img {
      max-height: 20vh;
      max-width: 20vh;
      padding-top: 0.5vh;
    }
    p {
      font-size: 1.2rem;
    }
    button {
      width: 40%;
      padding: 0.3rem;
      font-size: 0.8rem;
    }
  }
</style>
