<template>
  <div class="backtop">
    <img src="../../../assets/img/backtop/返回顶部.png" alt="回到顶部">
  </div>
</template>

<script>
  export default {
    name: 'BackTop'
  }
</script>

<style lang="scss" scoped>
  .backtop {
    position: fixed;
    right: 10px;
    bottom: 60px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
</style>
