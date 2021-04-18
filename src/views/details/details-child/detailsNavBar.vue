<template>
  <nav-bar backColor="#73d5ff">
    <template v-slot:left>
      <div class="fhimg" @click="returnRouter()"><img src="../../../assets/img/details/返回 .png" alt="返回"></div>
    </template>
    <template v-slot:center>
      <div class="tab-control">
        <div class="tab-control-child" v-for="(i,name) in namee" @click="activef(name)">
          <span :class="{active: name === itemactive}">{{i}}</span>
        </div>
      </div>
    </template>
    <template v-slot:right>
      <div class="rest"><img src="../../../assets/img/details/其他.png" alt="其他"></div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from '../../../components/common/navbar/NavBar.vue'

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
        this.$router.go(-1)
      },
      active(event){
        this.$emit('active',event)
        console.log(event)
      },
      activef(name){
        this.itemactive = name;
        this.$emit('thisActive',name)
      }
    }
  }
</script>

<style lang="scss">
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
      color: #ffaaff;
      border-bottom: solid 2px #ffaaff;
      padding: 0 10px;
      padding-bottom: 6px;
    }
    }
</style>
