<template>
  <main>
    <CurrentWeatherCard
      :icon="getCurrentIcon()"
      :description="getCurrentDescription()"
      :main="getCurrentMain()"
      :temp="getCurrentTemp()"
    />
    <DailyWeatherCard :data="data.daily" :limit="5" />
  </main>
</template>

<script>
import CurrentWeatherCard from '@/components/CurrentWeatherCard'
import DailyWeatherCard from '@/components/DailyWeatherCard'
export default {
  name: 'Main',
  components: {
    CurrentWeatherCard,
    DailyWeatherCard,
  },
  methods: {
    getCurrentIcon() {
      return this.data.current.weather[0].icon
    },
    getCurrentDescription() {
      return this.data.current.weather[0].description
    },
    getCurrentMain() {
      return this.data.current.weather[0].main
    },
    getCurrentTemp() {
      return this.data.current.temp
    },
  },
  props: {
    data: Object,
  },
}
</script>

<style scoped></style>
