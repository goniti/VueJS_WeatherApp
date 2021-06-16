<template>
  <div>
    <md-card class="card">
      <md-card-header >
        <h2 class="md-title">{{ Main }}</h2>
        <h3 class="md-subhead">{{ Description }}</h3>
        <md-card-media md-big >
          <img :src="`http://openweathermap.org/img/wn/${Icon}@2x.png`" alt="weather_icon" />
        </md-card-media >
      </md-card-header>

      <md-card-content>
        <span class="md-display-3">{{parseInt(Temp)}}&deg;</span>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'CurrentWeatherCard',
  props:{
    Icon: String,
    Temp: Number,
    Description: String,
    Main: String
  },
}
</script>

<style scoped>
.card{
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
