<template>
  <div id="recommend">
    <div><p id="headline">YY看了又看YY</p></div>
    <data-display :good="recommend" ></data-display>
  </div>

</template>

<script>
  import dataDisplay from '../../../components/common/dataDisplay/dataDisplay.vue'

  export default {
    name: "recommend",
    props: {
      recommend: {
        type: Object,
        required: true
      }
    },
    components: {
      dataDisplay
    }
  }
</script>

<style lang="scss">
  #headline {
    color: #F4C76B;
    text-align: center;
  }
</style>
