<template>
  <main>
    <CurrentWeatherCard />
    <DailyWeatherCard/>
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
}
</script>

<style scoped></style>
