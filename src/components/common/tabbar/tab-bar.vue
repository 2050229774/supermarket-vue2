<template>
  <div id="tab-bar">
  	<slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tabBar'
  }
</script>

<style lang="scss">
  #tab-bar {
    display: flex;
    background-color: $grayBackground;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -2px 1px rgba(10,12,12,0.2);
  }
</style>
