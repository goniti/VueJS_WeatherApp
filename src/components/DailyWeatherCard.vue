<template>
  <div class="group_cards">
    <md-card
      :style="cardSize"
      class="card card--centered md-elevation-3"
      v-for="(weather, key) in newsLimited"
      :key="key"
    >
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
  computed: {
    newsLimited() {
      return this.Data.slice(0, this.Limit)
    },
    cardSize() {
      return {
        'flex-basis': `calc((100% - ${this.Limit}rem) / ${this.Limit} )`,
      }
    },
  },
  props: {
    Data: Array,
    Limit: Number,
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
  background-color: rgb(230, 226, 225) !important;
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
