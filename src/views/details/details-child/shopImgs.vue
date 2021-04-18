<template>
  <div id="shop-imgs">
    <img :src="src" v-for="src in shopImgs" @load="jiazai()">
  </div>
</template>

<script>
  export default {
    name: "shopImgs",
    props: {
      shopImgs: {
        type: Array,
        required: true
      }
    },
    methods: {
      jiazai(){
        this.$emit("onload")
      }
    }
  }
</script>

<style lang="scss">
  #shop-imgs {
    width: 100%;
    img {
      width: 100%;
    }
  }
</style>
