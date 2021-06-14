<template>
  <header>
    <h1 class="md-display-4">Weather App</h1>
    <md-field>
      <label>Type here!</label>
      <md-input v-model="type"></md-input>
      <span class="md-helper-text">City Name</span>
    </md-field>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    type: null,
  })
}
</script>

<style scoped></style>
