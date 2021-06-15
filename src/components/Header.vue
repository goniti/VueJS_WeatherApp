<template>
  <header>
    <h1 class="md-display-4">Weather App</h1>
    <form v-on:submit.prevent="handleSubmit">
      <md-field>
        <label>Type here!</label>
        <md-input v-model="city" />
        <span class="md-helper-text">City Name</span>
      </md-field>
    </form>
  </header>
</template>
<script>
export default {
  name: 'Header',

  data: () => ({
    city: null,
    data: {},
    locations: {},
  }),

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
<style scoped></style>
