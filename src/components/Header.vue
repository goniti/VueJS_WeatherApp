<template>
  <div>
    <button v-on:click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
    <button v-on:click="onsubmit">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      counter: 0,
    }
  },

  methods: {
    onsubmit:  (event) => {
      event.preventDefault()
      console.log('Hi i have submit')
    }
  }

}
</script>

<style scoped></style>
