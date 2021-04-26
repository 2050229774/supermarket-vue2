<template>
  <div class="tooltip">
    <p>{{tooltipData}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Tooltip',
    props: ['tooltipData']
  }
</script>

<style lang="scss" scoped>
  .tooltip {
    position: fixed;
    top: 25%;
    left: 25%;
    z-index: 1000;
    background-color: rgba(0,0,0,0.6);
    color: $whiteBackground;
    font-size: $large;
    border-radius: 10px;
    p {
      width: 200px;
      height: 50px;
      line-height: 50px;
      margin: 0;
      text-align: center;
    }
  }
</style>
