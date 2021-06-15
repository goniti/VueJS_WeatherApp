<template>
  <div class="group_cards">
    <md-card class="card card--centered">
      <md-card-header>
        <md-card-media md-small>
          <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="People" />
        </md-card-media>

        <md-card-header-text>
          <div class="md-title">Monday</div>
          <div class="md-subhead">A little cloud</div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <span class="md-headline">15&deg;</span>
      </md-card-content>
    </md-card>

    <md-card class="card card--centered">
      <md-card-header>
        <md-card-media md-small>
          <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="People" />
        </md-card-media>

        <md-card-header-text>
          <div class="md-title">Tuesday</div>
          <div class="md-subhead">A little cloud</div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <span class="md-headline">20&deg;</span>
      </md-card-content>
    </md-card>

    <md-card class="card card--centered">
      <md-card-header>
        <md-card-media md-small>
          <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="People" />
        </md-card-media>

        <md-card-header-text>
          <div class="md-title">Wednesday</div>
          <div class="md-subhead">A little cloud</div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <span class="md-headline">30&deg;</span>
      </md-card-content>
    </md-card>

    <md-card class="card card--centered">
      <md-card-header>
        <md-card-media md-small>
          <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="People" />
        </md-card-media>

        <md-card-header-text>
          <div class="md-title">Thursday</div>
          <div class="md-subhead">A little cloud</div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <span class="md-headline">50&deg;</span>
      </md-card-content>
    </md-card>

    <md-card class="card card--centered">
      <md-card-header>
        <md-card-media md-small>
          <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="People" />
        </md-card-media>

        <md-card-header-text>
          <div class="md-title">Friday</div>
          <div class="md-subhead">A little cloud</div>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <span class="md-headline">40&deg;</span>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'DailyWeatherCard',
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
  flex-basis: calc((100% - 5rem) / 5 );
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
