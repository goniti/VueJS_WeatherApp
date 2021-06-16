<template>
  <main>
    <CurrentWeatherCard
      :icon="data.current.weather[0].icon"
      :description="data.current.weather[0].description"
      :main="data.current.weather[0].main"
      :temp="data.current.temp"
    />
    <DailyWeatherCard :daily="data.daily" />
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
  props: {
    data: Object,
  },
}
</script>

<style scoped></style>
