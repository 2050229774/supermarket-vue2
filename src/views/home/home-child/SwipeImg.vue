<template>
  <img :src="way">
</template>

<script>
  export default {
    name: 'SwipenImg',
    props: {
      way: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>

</style>
