<template>
  <header>
    <h1 class="title">{{titleElement}}</h1>
    <form v-on:submit.prevent="handleSubmit">
      <md-field>
        <label>Type here!</label>
        <md-input v-model="city" />
        <span class="md-helper-text">Below is the weather forecast for the city of {{city}}</span>
      </md-field>
    </form>
  </header>
</template>
<script>
export default {
  name: 'Header',
  props:['titleElement'],
  data: () => ({
    city: "Lyon",
    data: {},
    locations: {},
  }),
  beforeMount() {
    this.getData()
  },
  methods: {

    handleSubmit() {
      this.getData()
    },

    getData() {
      fetch(`${process.env.VUE_APP_URL_LOCATIONS}?q=${this.city},FR&appid=${process.env.VUE_APP_API_KEY}`).then(
        async (res) => {
          this.locations = await res.json()
          this.getWeather()
        },
      )
    },

    getWeather() {
      fetch(
        `${process.env.VUE_APP_URL_WEATHER}?lat=${this.locations[0].lat}&lon=${this.locations[0].lon}&exclude=minutely,alerts,hourly&units=metric&appid=${process.env.VUE_APP_API_KEY}`,
      )
        .then(async (response) => {
          this.data = await response.json()
        })
        .catch((error) => {
          console.error('There was an error!', error)
        })
    },
  },
}
</script>

<style scoped>
.title {
    font-size: clamp(1rem, 13.5vw, 5rem);
  }
</style>
