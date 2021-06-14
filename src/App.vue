<template>
  <div id="app">
    {{ data }}
    <Header/>
    <Main/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from "@/components/Main";

console.log(process.env.VUE_APP_API_KEY)

export default {
  name: 'App',
  components: {
    Header,
    Main
  },

  data() {
    return {
      data: {},
    }
  },
  beforeMount() {
    this.getName()
  },
  methods: {
    async getName() {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-90&appid=${process.env.VUE_APP_API_KEY}`)
      const data = await res.json()
      this.data = data
    },
  },
}
</script>

<style>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
