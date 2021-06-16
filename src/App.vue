<template>
  <div id="app">
    <Header title-element="Weather App"/>
    <Main />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from '@/components/Main'

export default {
  name: 'App',
  components: {
    Header,
    Main,
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
  color:  rgba(0,0,0,0.54);
}
</style>
