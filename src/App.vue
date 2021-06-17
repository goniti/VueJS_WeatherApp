<template>
  <div id="app">
    <header>
      <h1 class="title">Weather {{ currentCity }}</h1>
      <beat-loader class="custom-class" color="#EC6E4C" :loading="loading" :size="15" :sizeUnit="rem"></beat-loader>
      <form v-on:submit.prevent="handleSubmit">
        <md-field>
          <label>Type name of another city</label>
          <md-input v-model="city" />
          <span class="md-helper-text">{{ currentCity }} weather forecast</span>
        </md-field>
      </form>
    </header>
    <Main v-bind:data="this.data" />
  </div>
</template>

<script>
import Main from '@/components/Main'
import { BeatLoader } from '@saeris/vue-spinners'

export default {
  name: 'App',
  components: {
    Main,
    BeatLoader,
  },
  data: () => ({
    data: {},
    locations: {},
    city: 'Lyon',
    currentCity: 'Lyon',
    loading: false,
  }),
  beforeMount() {
    this.getData()
    this.city = ''
  },
  methods: {
    getData() {
      fetch(`${process.env.VUE_APP_URL_LOCATIONS}?q=${this.city}&appid=${process.env.VUE_APP_API_KEY}`).then(
        async (res) => {
          this.locations = await res.json()
          this.getWeather()
        },
      )
    },
    getWeather() {
      this.loading = true
      fetch(
        `${process.env.VUE_APP_URL_WEATHER}?lat=${this.locations[0].lat}&lon=${this.locations[0].lon}&exclude=minutely,alerts,hourly&units=metric&appid=${process.env.VUE_APP_API_KEY}`,
      )
        .then(async (response) => {
          this.data = await response.json()
          this.loading = false
        })
        .catch((error) => {
          console.error('There was an error!', error)
        })
    },
    handleSubmit(event) {
      event.preventDefault()
      const inputValue = event.target[0].value
      if (inputValue === '') {
        return
      }
      this.getData()
      this.currentCity = inputValue
      this.city = ''
    },
  },
}
</script>

<style>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(0, 0, 0, 0.54);
}
.title {
  font-size: clamp(1rem, 13.5vw, 5rem);
}
.custom-class{
  text-align: center;
}
</style>
