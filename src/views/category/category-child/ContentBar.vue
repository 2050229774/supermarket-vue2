<template>
  <div class="content-bar">
    <!-- 外层遍历行 -->
    <div class="content-bar-line" v-for="line in contentData">
      <!-- 内层遍历列 -->
      <div class="content-bar-column" v-for="column in line">
        <img :src="column.src">
        <div>{{column.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ContentBar',
    data() {
      return {

      }
    },
    props: ['contentData']
  }
</script>

<style lang="scss" scoped>
  .content-bar-line {
    display: flex;
    margin: 20px 0;
  }
  .content-bar-column {
    flex: 1;
    img {
      display: block;
      width: 60%;
      margin: 0 auto;
      border-radius: 10px;
    }
    div {
      text-align: center;
    }
  }
</style>
