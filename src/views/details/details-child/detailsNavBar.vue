<template>
  <nav-bar >
    <template v-slot:left>
      <div class="fhimg" @click="returnRouter()"><img src="~assets/img/details/返回 .png" alt="返回"></div>
    </template>
    <template v-slot:center>
      <div class="tab-control">
        <div class="tab-control-child" v-for="(i,name) in namee" @click="activef(name)">
          <span :class="{active: name === itemactive}">{{i}}</span>
        </div>
      </div>
    </template>
    <template v-slot:right>
      <div class="rest"><img src="~assets/img/details/其他.png" alt="其他"></div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'

  export default {
    name: "detailsNavTab",
    data() {
      return {
        namee: {
          pop: '宝贝',
          estimate: '参数',
          details: '详情',
          recommend: '推荐'
        },
        itemactive: 'pop'
      }
    },
    components: {
      NavBar
    },
    methods: {
      returnRouter() {
        // 退回上一个路由
        this.$router.go(-1)
      },
      activef(name){
        // 抛出点击事件
        this.itemactive = name;
        this.$emit('thisActive',name)
      }
    }
  }
</script>

<style lang="scss" >
  .nav-bar {
    background-color: $subject;
    color: $whiteBackground;
  }
  .tab-control {
    display: flex;
    width: 100%;
    padding-bottom: 8px;
    position: relative;
    z-index: 100;
    .tab-control-child {
      flex: 1;
      text-align: center;
    }
    .active {
      color: $activatePink;
      border-bottom: solid 2px $activatePink;
      padding: 0 10px;
      padding-bottom: 6px;
    }
    }
</style>
