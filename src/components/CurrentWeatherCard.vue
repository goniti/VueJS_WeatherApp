<template>
  <div>
    <md-card class="card">
      <md-card-header >
        <h2 class="md-title">Clear</h2>
        <h3 class="md-subhead">A little cloud</h3>
        <md-card-media md-big >
          <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="weather_icon" />
        </md-card-media >
      </md-card-header>

      <md-card-content>
        <span class="md-display-3">32&deg;</span>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'CurrentWeatherCard',
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
