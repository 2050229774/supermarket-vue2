<template>
  <div id="bottom-nav">
    <div id="bottom-nav-yn" @click="checkAll()">
      <img v-if="yn" src="../../../assets/img/cart/15-圆圈未选.png">
      <img v-else src="../../../assets/img/cart/选中.png" alt="">
    </div>
    <div id="bottom-nav-text">
      全选
    </div>
    <div v-if="delyn">
      <div id="bottom-nav-clearing">结算</div>
      <div id="bottom-nav-total">
        <p>合计：<span>￥{{total}}</span></p>
      </div>
    </div>
    <div v-else>
      <div @click="deletes()" id="bottom-nav-clearing">删除</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "bottomNav",
    data(){
      return {
        yn: true
      }
    },
    props:{
      total: {
        type: Number
      },
      delyn: {
        type: Boolean,
        default: true
      }
    },
    methods:{
      checkAll(){
        //先清零总价格（之前有选中的情况）
        if(this.yn == true){
          this.$emit('reset')
        }
        this.yn  = !this.yn
        this.$root.Bus.$emit('checkAll',this.yn)
        //有取消选中的情况（取消对应的全选）

        //全部为true的情况 （选中全选）
        //绑定id所有元素全部为true，全选为ture，负责全选为false
        //将所有id都添加到一个vuex数组中，因为数据会自动改变，最后遍历这个数组即可
      },
      deletes(){
        this.$root.Bus.$emit('deletes',this.yn)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #bottom-nav {
    position: fixed;
    bottom: 52px;
    width: 100%;
    height: 40px;
    background-color: #ffffff;
    border-top: solid 1px #cccac3;
    #bottom-nav-yn {
      float: left;
      img {
        height: 25px;
        width: 25px;
        margin: 7px 10px;
      }
    }
    #bottom-nav-text {
       float: left;
       height: 40px;
       line-height: 40px;
    }
    #bottom-nav-total {
      float: right;
      margin-right: 10px;
      p {
        height: 40px;
        line-height: 40px;
        margin: 0;
      }
    }
    #bottom-nav-clearing {
      float: right;
      margin-right: 4px;
      margin-top: 4px;
      height: 32px;
      line-height: 32px;
      width: 100px;
      text-align: center;
      // 设置成为左浮动更合理
      color: #ffffff;
      background-color: #ff8b2c;
      border-radius: 30px;
    }
  }
</style>
