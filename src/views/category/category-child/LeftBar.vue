<template>
  <div class="left-bar">
    <div :class="{active: thisActive === title}" @click="barActive(title)" v-for="title in leftTitle">
      {{title}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LeftBar',
    data(){
      return {
        leftTitle:[
          '鞋靴',
          '食品',
          '男装',
          '女装',
          '手机',
          '家电',
          '数码',
          '生鲜',
          '电脑办公',
          '户外运动',
          '家具厨房',
          '内衣配饰',
          '个护清洁',
          '宠物鲜花',
          '医药保健',
          '钟表珠宝',
          '二手商品'
        ],
        isactive: false,
        thisActive: '鞋靴'
      }
    },
    methods:{
      barActive(title){
        this.thisActive = title;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .left-bar {
    div {
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 14px;
      font-weight: 300;
    }
  }
  .active {
    background-color: $whiteBackground;
    border-radius: 20px 0 0 20px;
    font-size: 20px !important;
    font-weight: 500 !important;
  }


</style>
