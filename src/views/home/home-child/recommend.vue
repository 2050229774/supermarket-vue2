<template>
  <div class="recommend-nav">
    <div class="recommend-nav-i" v-for="i in item">
      <a :href="i.href">
        <img :style="{width: idth,height: idth}" :src="i.link">
        <div>{{i.name}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Recommend',
    props: {
      item : {
        type: Object
      },
      idth: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>

.recommend-nav {
  width: 100%;
  display: flex;
  padding: 10px 0;
  border-bottom: 5px solid #EEEEEE;
  .recommend-nav-i {
    flex: 1;
    a {
      width: 100%;
      height: 100%;
    }
    img {
      display:table;
      margin:0 auto;
      border-radius: 50%;
    }
    div {
      text-align: center;
      color: #F4C76B;
    }
  }
}
</style>
