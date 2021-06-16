<template>
  <div class="group_cards">
    <md-card class="card card--centered">
      <md-card-header>
        <md-card-media md-small>
          <img :src="`http://openweathermap.org/img/wn/${Daily[0].weather[0].icon}@2x.png`" alt="People" />
        </md-card-media>

        <md-card-header-text>
          <div class="md-title">Monday</div>
          <div class="md-subhead">{{ Daily[0].weather[0].description }}</div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <span class="md-headline">{{ parseInt(Daily[0].temp.day) }}&deg;</span>
      </md-card-content>
    </md-card>

    <md-card class="card card--centered">
      <md-card-header>
        <md-card-media md-small>
          <img :src="`http://openweathermap.org/img/wn/${Daily[0].weather[0].icon}@2x.png`" alt="People" />
        </md-card-media>

        <md-card-header-text>
          <div class="md-title">Tuesday</div>
          <div class="md-subhead">{{ Daily[1].weather[0].description }}</div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <span class="md-headline">{{ parseInt(Daily[0].temp.day) }}&deg;</span>
      </md-card-content>
    </md-card>

    <md-card class="card card--centered">
      <md-card-header>
        <md-card-media md-small>
          <img :src="`http://openweathermap.org/img/wn/${Daily[0].weather[0].icon}@2x.png`" alt="People" />
        </md-card-media>

        <md-card-header-text>
          <div class="md-title">Wednesday</div>
          <div class="md-subhead">{{ Daily[2].weather[0].description }}</div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <span class="md-headline">{{ parseInt(Daily[0].temp.day) }}&deg;</span>
      </md-card-content>
    </md-card>

    <md-card class="card card--centered">
      <md-card-header>
        <md-card-media md-small>
          <img :src="`http://openweathermap.org/img/wn/${Daily[0].weather[0].icon}@2x.png`" alt="People" />
        </md-card-media>

        <md-card-header-text>
          <div class="md-title">Thursday</div>
          <div class="md-subhead">{{ Daily[3].weather[0].description }}</div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <span class="md-headline">{{ parseInt(Daily[0].temp.day) }}&deg;</span>
      </md-card-content>
    </md-card>

    <md-card class="card card--centered">
      <md-card-header>
        <md-card-media md-small>
          <img :src="`http://openweathermap.org/img/wn/${Daily[0].weather[0].icon}@2x.png`" alt="People" />
        </md-card-media>

        <md-card-header-text>
          <div class="md-title">Friday</div>
          <div class="md-subhead">{{ Daily[4].weather[0].description }}</div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <span class="md-headline">{{ parseInt(Daily[0].temp.day) }}&deg;</span>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'DailyWeatherCard',
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
