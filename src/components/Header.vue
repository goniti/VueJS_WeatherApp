<template>

</template>
<script>
export default {
  name: 'Header',
  props: {
    titleApp: String,
    getData: Function,
    },
  data: () => ({
    city: 'Lyon',
    currentCity: 'Lyon',
    data:{}
  }),
  beforeMount() {
    this.log()
    this.getData()
    this.city = ''
  },
  methods: {
    log() {
  console.log(this.data)
    },
    handleSubmit(event) {
      event.preventDefault()
      const inputValue = event.target[0].value
      if (inputValue === '') {
        return
      }
      this.getData()
      this.currentCity = inputValue
      this.city = ''
    },
  },
}
</script>

<style scoped>

</style>
