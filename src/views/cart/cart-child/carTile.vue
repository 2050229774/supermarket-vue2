<template>
  <div id="cart-tile">
      <h1 id="cart-tile-conter">购物车<span>({{$store.state.carlistadd}})</span> </h1>
      <div @click="manage()">
        <h1 id="cart-tile-right" v-if="yn">管理</h1>
        <h1 id="cart-tile-right" v-else>完成</h1>
      </div>
  </div>


</template>

<script>
  export default {
    name: "carTile",
    data(){
      return {
        yn: true
      }
    },
    methods:{
      manage(){
        this.yn = !this.yn
        this.$emit('cut')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #cart-tile {
    height: 50px;
    line-height: 50px;
    background-color: #f3f3f3;
    position: relative;
    h1 {
      font-weight: 500;
      margin: 0;
    }
    #cart-tile-conter {
      text-align: center;
      font-size: 20px;
      span {
        font-size: 16px;
      }
    }
    #cart-tile-right {
      position: absolute;
      right: 10px;
      top: 0;
      font-size: 16px;
    }
  }

</style>
