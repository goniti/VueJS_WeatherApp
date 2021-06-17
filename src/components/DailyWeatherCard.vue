<template>
  <div class="group_cards">
    <md-card class="card card--centered" v-for="(weather, index) in Daily" :key="index">
      <md-card-header>
        <md-card-media md-small>
          <img :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" alt="People" />
        </md-card-media>

        <md-card-header-text>
          <div class="md-title">{{ getDaily(weather.dt) }}</div>
          <div class="md-subhead">{{ weather.weather[0].description }}</div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <span class="md-headline">{{ parseInt(weather.temp.day) }}&deg;</span>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'DailyWeatherCard',
  methods: {
    getDaily: function (timestamp) {
      let timestampConverted = new Date(timestamp)
      const options = { weekday: 'long' }
      return new Intl.DateTimeFormat('en-US', options).format(timestampConverted)
    },
  },
  props: {
    Daily: Array,
  },
}
</script>

<style scoped>
.group_cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 95vw;
  margin-top: 1rem;
}
.card {
  flex-basis: calc((100% - 5rem) / 5);
}
.card--centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1200px) {
  .card:not(:last-child) {
    flex-basis: 50%;
  }
  .card:last-child {
    flex-basis: 100%;
  }
}
@media (max-width: 700px) {
  .group_cards {
    flex-direction: column;
    justify-content: center;
  }
}
</style>
